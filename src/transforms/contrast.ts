import { buildTransform } from '../domain/types';
import {
  getImageIndex,
  getPixelFromSource,
  mapCoords,
  mapFrames,
} from '../domain/utils';
import * as convert from 'color-convert';
import { sliderParam } from '../params/sliderParam';

export const contrast = buildTransform({
  name: 'Contrast',
  description: 'Makes lighter colors lighter, and darker colors darker',
  params: [
    sliderParam({
      name: 'Amount',
      min: 0,
      max: 100,
      step: 5,
      defaultValue: 50,
    }),
  ],
  fn: ({ image, parameters }) => {
    const [amount] = parameters;
    const [width, height] = image.dimensions;

    const amountPercent = amount / 100;

    // Find average value of all pixels

    const frameAverageValues: number[] = [];
    for (let f = 0; f < image.frames.length; f += 1) {
      const values = new Uint8Array(width * height);
      for (let x = 0; x < width; x += 1) {
        for (let y = 0; y < height; y += 1) {
          const [r, g, b] = getPixelFromSource(
            image.dimensions,
            image.frames[f].data,
            [x, y]
          );
          const [, , l] = convert.rgb.hsv(r, g, b);
          const idx = getImageIndex(image.dimensions, x, y);
          values[idx] = l;
        }
      }
      const avg = values.reduce((acc, cur) => acc + cur, 0) / values.length;
      frameAverageValues.push(avg);
    }

    const avgValue =
      frameAverageValues.reduce((acc, cur) => acc + cur, 0) /
      frameAverageValues.length;

    return mapFrames(image, (imageData) =>
      mapCoords(image.dimensions, (coord) => {
        const [r, g, b, a] = getPixelFromSource(
          image.dimensions,
          imageData,
          coord
        );

        const [h, s, l] = convert.rgb.hsv(r, g, b);
        const diff = l - avgValue;
        const newLight = l + diff * amountPercent;
        const [newR, newG, newB] = convert.hsv.rgb([h, s, newLight]);
        return [newR, newG, newB, a];
      })
    );
  },
});
