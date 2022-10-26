import type React from 'react';

export default interface CheckboxProps
  extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  checked?: boolean;
  theme?: 'wine' | 'darkBlack';
}
