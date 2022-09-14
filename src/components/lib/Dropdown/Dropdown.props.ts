import type { ActionMeta, SingleValue } from 'react-select';

export interface Option {
  value: string;
  label: string;
}

export default interface DropdownProps {
  options: Option[];
  label: string;
  defaultValue?: Option;
  disabled?: boolean;
  onChange?: (value: SingleValue<Option>, action: ActionMeta<Option>) => void;
}
