import React from 'react';
import { ImagePicker } from '../components/ImagePicker';
import { readImage } from '../domain/run';
import { Image, ParamFunction } from '../domain/types';

interface ImagePickerParamsProps {
  name: string;
}

export function imagePickerParam({
  name,
}: ImagePickerParamsProps): ParamFunction<{ dataUrl: string; image: Image }> {
  return {
    name,
    defaultValue: { valid: false },
    fn: (params) => (
      <ImagePicker
        currentImageUrl={
          params.value.valid ? params.value.value.dataUrl : undefined
        }
        name={name}
        width={64}
        height={64}
        onChange={async (dataUrl) => {
          const image = await readImage(dataUrl);
          params.onChange({ valid: true, value: { dataUrl, image } });
        }}
      />
    ),
  };
}
