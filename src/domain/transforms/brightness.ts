import { buildTransform } from '../types';
import { mapImage, clampColor } from '../utils';
import { intParam } from '../../params/intParam';

export const brightness = buildTransform({
  name: 'Brightness',
  description: 'Increase or decrease the brightness of the image',
  params: [
    intParam({
      name: 'Amount',
      defaultValue: 0,
      min: -100,
      max: 100,
    })
  ],
  fn: mapImage(({ coord, getSrcPixel, parameters }) => {
    const [amount] = parameters;
    const rawAmount = amount / 100 * 255;
    const p = getSrcPixel(coord);
    return clampColor([p[0] + rawAmount, p[1] + rawAmount, p[2] + rawAmount, p[3]])
  }),
});
