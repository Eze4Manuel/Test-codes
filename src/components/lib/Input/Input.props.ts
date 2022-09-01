import type React from 'react';

interface InputProps {
  type: string;
  labelText: string;
  name: string;
  icon?: boolean;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textOpacity?: 'normal' | 'dim';
  variant?: 'normal' | 'bold';
  doubleInput?: boolean;
}

export default InputProps;
