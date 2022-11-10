import type { FC } from 'react';

import match from '@/utils/match';

import styles from './Input2.module.scss';
import type InputProps from './Input2.props';

const Input: FC<InputProps> = ({
  name,
  textOpacity = 'normal',
  error,
  helperText,
  ...rest
}) => {
  const InputVariant = match(textOpacity, {
    normal: styles.variant__normalText,
    dim: styles.variant__dimText,
    default: '',
  });

  return (
    <div className="h-full w-full">
      <input
        name={name}
        id={name}
        className={`${styles.base} ${InputVariant} ${
          error ? 'border-red-500' : ''
        }`}
        {...rest}
      />

      {helperText && (
        <span className={`text-sm ${error ? 'text-red-500' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
