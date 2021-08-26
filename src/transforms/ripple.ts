import { buildTransform } from '../domain/types';
import { mapFrames, mapCoords, getPixelFromSource } from '../domain/utils';
import { floatParam } from '../params/floatParam';

export const ripple = buildTransform({
  name: 'Ripple',
  params: [
    floatParam({
      name: 'Amplitude',
      defaultValue: 10,
      description: 'How strong the ripple effect should be',
    }),
    floatParam({
      name: 'Period',
      defaultValue: 2,
      min: 0,
      description: 'How many ripples you want',
    }),
  ],
  fn: ({ image, parameters }) =>
    mapFrames(image, (data, frameIndex, frameCount) => {
      const [amplitude, period] = parameters;

      const height = image.dimensions[1];
      const shift = (frameIndex / frameCount) * 2 * Math.PI;
      return mapCoords(image.dimensions, ([x, y]) => {
        const offset = Math.round(
          amplitude * Math.sin((y / height) * period * Math.PI + shift)
        );

        return getPixelFromSource(image.dimensions, data, [x + offset, y]);
      });
    }),
});