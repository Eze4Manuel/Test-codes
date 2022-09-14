import type { FC, PropsWithChildren } from 'react';

import styles from './Checkbox.module.scss';
import type CheckboxProps from './Checkbox.props';

const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  id,
  helperText,
  error,
  label,
  ...rest
}) => {
  return (
    <div className={styles.container}>
      <input
        checked
        id={id}
        type="checkbox"
        className={styles.input}
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
