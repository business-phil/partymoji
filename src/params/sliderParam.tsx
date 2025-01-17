import { Slider, Stack, Typography } from '@material-ui/core';
import React from 'react';
import { HelpTooltip } from '../components/HelpTooltip';
import { ParamFunction, ParamValue } from '../domain/types';

const SliderParam: React.FC<{
  name: string;
  min: number;
  max: number;
  step?: number;
  value?: number;
  description?: string;
  onChange: (v: ParamValue<number>) => void;
}> = ({ name, value, min, max, step, description, onChange }) => {
  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1}>
        <Typography variant="body2">{name}</Typography>
        <HelpTooltip description={description} />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{ paddingLeft: '8px', paddingRight: '8px' }}
      >
        <Slider
          aria-label={name}
          value={value}
          step={step}
          valueLabelDisplay="off"
          getAriaValueText={(x) => x.toString()}
          min={min}
          max={max}
          onChange={(e, value) =>
            onChange({ valid: true, value: value as number })
          }
        />
        <Typography variant="body2">{value}</Typography>
      </Stack>
    </Stack>
  );
};

export function sliderParam(args: {
  name: string;
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
  description?: string;
}): ParamFunction<number> {
  return {
    name: args.name,
    defaultValue:
      args.defaultValue !== undefined
        ? { valid: true, value: args.defaultValue }
        : { valid: false },
    fn: (params) => {
      return (
        <SliderParam
          name={args.name}
          value={params.value.valid ? params.value.value : undefined}
          onChange={params.onChange}
          min={args.min}
          max={args.max}
          step={args.step}
          description={args.description}
        />
      );
    },
  };
}
