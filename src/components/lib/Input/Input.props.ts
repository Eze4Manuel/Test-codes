import type { HTMLProps } from 'react';

export default interface InputProps extends HTMLProps<HTMLInputElement> {
  labelText: string;
  icon?: boolean;
  textOpacity?: 'normal' | 'dim';
  variant?: 'normal' | 'bold';
}
