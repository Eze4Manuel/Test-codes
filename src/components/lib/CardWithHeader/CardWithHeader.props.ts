import type { HTMLProps } from 'react';

export default interface CardWithHeaderType extends HTMLProps<HTMLElement> {
  rightComponent?: React.ReactNode | undefined;
  header: string;
  total?: number;
}
