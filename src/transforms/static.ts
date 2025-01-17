import { buildTransform } from '../domain/types';
import { isTransparent, mapImage } from '../domain/utils';
import { radioParam } from '../params/radioParam';
import { sliderParam } from '../params/sliderParam';

export const staticc = buildTransform({
  name: 'Static',
  description: 'Adds random static to the image',
  params: [
    radioParam({
      name: 'Type',
      description: 'Whether to apply the party to the foreground or background',
      defaultValue: 'background',
      options: [
        {
          name: 'Background',
          value: 'background',
        },
        {
          name: 'Foreground',
          value: 'foreground',
        },
      ],
    }),
    sliderParam({
      name: 'Strength',
      description: 'Higher number increases the amount of static pixels',
      defaultValue: 25,
      min: 5,
      max: 100,
      step: 5,
    }),
  ],
  fn: mapImage(
    ({ coord, getSrcPixel, parameters: [type, strength], random }) => {
      const src = getSrcPixel(coord);

      const isBackground = isTransparent(src);

      if (type === 'foreground' ? isBackground : !isBackground) {
        return src;
      }

      if (isBackground && type === 'background') {
        const inverse = Math.ceil(random() * 100) < strength;
        const grey = Math.ceil(random() * 255);

        return inverse ? [grey, grey, grey, 255] : src;
      }

      const isStatic = Math.ceil(random() * 100) < strength;
      const grey = Math.ceil(random() * 255);

      return isStatic ? [grey, grey, grey, src[3]] : src;
    }
  ),
});
