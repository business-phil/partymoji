import React from 'react';
import { Dropdown } from '../../../components';
import { ParamValue, ParamFunction } from '../../types';

const DropdownParam: React.FC<{
  name: string;
  options: { name: string; value: any }[];
  value: any;
  onChange: (v: ParamValue<any>) => void;
}> = ({ name, options, value, onChange }) => {
  return (
    <div>
      <label>{name}</label>
      <br />
      <Dropdown
        onChange={(value) => onChange({ valid: true, value })}
        selected={value}
        options={options}
      />
    </div>
  );
};

export function dropdownParam<T>(args: {
  name: string;
  options: { name: string; value: T }[];
  defaultValue: T;
}): ParamFunction<T> {
  return {
    name: args.name,
    defaultValue: args.defaultValue,
    fn: (params) => {
      return (
        <DropdownParam
          name={args.name}
          value={params.value}
          options={args.options}
          onChange={params.onChange}
        />
      );
    },
  };
}
