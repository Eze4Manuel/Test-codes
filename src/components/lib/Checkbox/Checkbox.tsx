import type { FC, PropsWithChildren } from 'react';

import match from '@/utils/match';

import styles from './Checkbox.module.scss';
import type CheckboxProps from './Checkbox.props';

const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  id,
  helperText,
  error,
  label,
  checked,
  theme = 'wine',
  ...rest
}) => {
  const checkBoxTheme = match(theme, {
    wine: styles.theme__wine,
    darkBlack: styles.theme__darkBlack,
    default: '',
  });
  return (
    <div className={styles.container}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        className={`${styles.input} ${checkBoxTheme}`}
        {...rest}
      />
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      {helperText && (
        <span
          className={`text-xs ${
            error ? 'text-primary-dark' : 'text-cci-black'
          }`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
