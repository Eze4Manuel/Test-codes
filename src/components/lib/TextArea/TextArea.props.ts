import type { HTMLProps } from 'react';
import type React from 'react';

export default interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  name: string;
  required?: boolean;
  labelClassname?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
