import { buildTransform } from '../domain/types';
import { mapImage } from '../domain/utils';
import { floatParam } from '../params/floatParam';

export const shake = buildTransform({
  name: 'Shake',
  description: 'Make the image shake back and forth',
  params: [
    floatParam({ name: 'Amplitude', defaultValue: 10, min: 0 }),
  ] as const,
  fn: mapImage(
    ({
      coord: [x, y],
      frameCount,
      frameIndex,
      getSrcPixel,
      parameters: [amplitude],
    }) => {
      const xOffset =
        x +
        Math.round(
          amplitude * Math.cos((frameIndex / frameCount) * 2 * Math.PI)
        );

      return getSrcPixel([xOffset, y]);
    }
  ),
});
