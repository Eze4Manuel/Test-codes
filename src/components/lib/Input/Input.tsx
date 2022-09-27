import type { FC } from 'react';

import match from '@/utils/match';

import styles from './Input.module.scss';
import type InputProps from './Input.props';

const Input: FC<InputProps> = ({
  labelText,
  name,
  textOpacity = 'normal',
  variant = 'normal',
  error,
  helperText,
  ...rest
}) => {
  const InputVariant = match(textOpacity, {
    normal: styles.variant__normalText,
    dim: styles.variant__dimText,
    default: '',
  });

  const LabelVariant = match(variant, {
    bold: styles.variant__bold,
    normal: styles.variant__normal,
    default: '',
  });

  return (
    <div className="w-full">
      <label htmlFor={name} className="w-full">
        <div className={`${LabelVariant} ${styles.label}`}>{labelText}</div>
        <input
          name={name}
          id={name}
          className={`${styles.base} ${InputVariant} ${
            error ? 'border-red-500' : ''
          }`}
          {...rest}
        />
      </label>

      {helperText && (
        <span className={`text-sm ${error ? 'text-red-500' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
