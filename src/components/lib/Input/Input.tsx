import type { FC } from 'react';

import match from '@/utils/match';

import styles from './Input.module.scss';
import type InputProps from './Input.props';

const Input: FC<InputProps> = ({
  type,
  labelText,
  name,
  required,
  value,
  onChange,
  textOpacity = 'normal',
  variant = 'normal',
  doubleInput,
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

  if (doubleInput) {
    return (
      <div className="grid w-full grid-cols-2 gap-x-6">
        <label htmlFor={name}>
          <div className={`${LabelVariant}`}>{labelText}</div>
          <input
            type={type}
            name={name}
            id={name}
            required={required}
            className={`${styles.base} ${InputVariant}`}
            onChange={onChange}
            value={value}
          />
        </label>
        <label htmlFor={name}>
          <div className={`${LabelVariant}`}>{labelText}</div>
          <input
            type={type}
            name={name}
            id={name}
            required={required}
            className={`${styles.base} ${InputVariant}`}
            onChange={onChange}
            value={value}
          />
        </label>
      </div>
    );
  }

  return (
    <label htmlFor={name} className="w-full">
      <div className={`${LabelVariant}`}>{labelText}</div>
      <input
        type={type}
        name={name}
        id={name}
        className={`${styles.base} ${InputVariant}`}
        required={required}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default Input;
