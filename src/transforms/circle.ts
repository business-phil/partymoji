import { buildTransform } from '../domain/types';
import { mapImage } from '../domain/utils';
import { intParam } from '../params/intParam';

export const circle = buildTransform({
  name: 'Circle',
  description: 'Make the image move in a circular pattern',
  params: [
    intParam({
      name: 'Radius',
      description: 'Positive number',
      defaultValue: 10,
      min: 0,
    }),
  ] as const,
  fn: mapImage(
    ({
      coord: [x, y],
      frameCount,
      frameIndex,
      getSrcPixel,
      parameters: [radius],
    }) => {
      const xOffset = Math.round(
        radius * Math.sin(-2 * Math.PI * (frameIndex / frameCount))
      );
      const yOffset = Math.round(
        radius * Math.cos(-2 * Math.PI * (frameIndex / frameCount))
      );
      return getSrcPixel([x + xOffset, y + yOffset]);
    }
  ),
});
