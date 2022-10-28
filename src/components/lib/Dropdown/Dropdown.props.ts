import type { ActionMeta, Props, SingleValue } from 'react-select';

export interface Option {
  value: string;
  label: string;
}

export default interface DropdownProps extends Omit<Props, 'onChange'> {
  options: Option[];
  label?: string;
  defaultValue?: Option;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (value: SingleValue<Option>, action: ActionMeta<Option>) => void;
}
