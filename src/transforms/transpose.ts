import { buildTransform } from '../domain/types';
import { mapImage } from '../domain/utils';
import { intParam } from '../params/intParam';

export const transpose = buildTransform({
  name: 'Transpose',
  description: 'Move the image left or right, up or down',
  params: [
    intParam({ name: 'X', defaultValue: 0 }),
    intParam({ name: 'Y', defaultValue: 0 }),
  ] as const,
  fn: mapImage(({ coord: [x, y], getSrcPixel, parameters: [transX, transY] }) =>
    getSrcPixel([x + transX, y + transY])
  ),
});
