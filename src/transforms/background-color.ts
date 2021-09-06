import { buildTransform } from '../domain/types';
import { mapImage, isTransparent, fromHexColor } from '../domain/utils';
import { colorPickerParam } from '../params/colorPickerParam';

export const backgroundColor = buildTransform({
  name: 'Background Color',
  description: 'Change all transparent pixles to the given color',
  params: [
    colorPickerParam({
      name: 'Color',
      defaultValue: fromHexColor('#000000'),
    }),
  ],
  fn: mapImage(({ coord, getSrcPixel, parameters }) => {
    const [color] = parameters;
    const p = getSrcPixel(coord);
    return isTransparent(p) ? color : p;
  }),
});