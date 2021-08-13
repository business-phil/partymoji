import React from 'react';
import { ParamFunction, ParamValue } from '../domain/types';

const TextParam: React.FC<{
  name: string;
  value?: string;
  onChange: (v: ParamValue<string>) => void;
}> = ({ name, value, onChange }) => {
  const [val, setVal] = React.useState(value);

  return (
    <div>
      <label>{name}</label>
      <br />
      <input
        type="text"
        value={val}
        name={name}
        onChange={(e) => setVal(e.target.value)}
        onBlur={() =>
          onChange(value ? { valid: true, value } : { valid: false })
        }
      />
    </div>
  );
};

export const textParam = (args: {
  name: string;
  defaultValue?: string;
}): ParamFunction<string> => ({
  name: args.name,
  defaultValue:
    args.defaultValue !== undefined
      ? { valid: true, value: args.defaultValue }
      : { valid: false },
  fn: (params) => (
    <TextParam
      name={args.name}
      onChange={params.onChange}
      value={params.value.valid ? params.value.value : undefined}
    />
  ),
});