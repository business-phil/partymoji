import { buildTransform } from '../domain/types';
import { mapImage } from '../domain/utils';
import { floatParam } from '../params/floatParam';

export const doubleVision = buildTransform({
  name: 'Double Vision',
  description: 'See the image in double',
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
      const dir = x % 2 === 0 ? -1 : 1;
      const xOffset = Math.round(
        dir * amplitude * Math.sin(-2 * Math.PI * (frameIndex / frameCount))
      );
      return getSrcPixel([x + xOffset, y]);
    }
  ),
});
