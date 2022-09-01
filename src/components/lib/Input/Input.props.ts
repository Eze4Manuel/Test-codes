import type React from 'react';

export default interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type: string;
  labelText: string;
  name: string;
  icon?: boolean;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textOpacity?: 'normal' | 'dim';
  variant?: 'normal' | 'bold';
}
