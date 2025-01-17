import { range } from 'remeda';

import { buildTransform } from '../domain/types';
import {
  isTransparent,
  fromHexColor,
  mapFrames,
  mapCoords,
  getPixelFromSource,
} from '../domain/utils';
import { colorPickerParam } from '../params/colorPickerParam';
import { intParam } from '../params/intParam';
import { sliderParam } from '../params/sliderParam';
import { variableLengthParam } from '../params/variableLengthParam';

const DEFAULT_COLORS = [
  '#FF0000',
  '#FF9600',
  '#FFFF00',
  '#00FF00',
  '#00FF96',
  '#00FFFF',
  '#0000FF',
  '#B400FF',
].map(fromHexColor);

export const radiance = buildTransform({
  name: 'Radiance',
  description: 'Radiate colors out in rings',
  params: [
    sliderParam({
      name: 'Group Count',
      description: 'How many times each color is repeated',
      defaultValue: 1,
      min: 1,
      max: 24,
    }),
    variableLengthParam({
      name: 'Colors',
      newParamText: 'New Color',
      description: 'The colors that make up each ring',
      defaultValue: DEFAULT_COLORS,
      createNewParam: () =>
        colorPickerParam({
          name: 'Color',
        }),
    }),
    intParam({
      name: 'Offset X',
      description: 'Change the horizontal center of the radiance',
      defaultValue: 0,
    }),
    intParam({
      name: 'Offset Y',
      description: 'Change the vertical center of the radiance',
      defaultValue: 0,
    }),
  ] as const,
  fn: ({ image, parameters: [groupCount, colors, offsetX, offsetY] }) => {
    const colorList = range(0, groupCount).flatMap(() => colors);
    const [width, height] = image.dimensions;
    const centerX = width / 2;
    const centerY = height / 2;

    return mapFrames(image, (imageData, frameIndex, frameCount) =>
      mapCoords(image.dimensions, (coord) => {
        const srcPixel = getPixelFromSource(image.dimensions, imageData, coord);

        // Make the transparent parts colorful
        if (isTransparent(srcPixel)) {
          const [x, y] = coord;
          const xRelCenter = x - centerX - offsetX;
          const yRelCenter = y - centerY + offsetY;

          const maxDist = Math.sqrt(
            (width / 2) * (width / 2) + (height / 2) * (height / 2)
          );
          const distFromCenter = Math.sqrt(
            yRelCenter * yRelCenter + xRelCenter * xRelCenter
          );

          const colorIdx =
            Math.floor((1 - distFromCenter / maxDist) * colorList.length) %
            colorList.length;

          // Increment colorIdx based on current frame progress
          const frameProgress = frameIndex / frameCount;
          const idx =
            (Math.floor(frameProgress * colorList.length) + colorIdx) %
            colorList.length;
          return colorList[idx];
        }

        return srcPixel;
      })
    );
  },
});
