import type { FC } from 'react';

import styles from './TextArea.module.scss';
import type TextAreaProps from './TextArea.props';

const TextArea: FC<TextAreaProps> = ({
  name,
  label,
  rows,
  cols,
  value,
  onChange,
  className,
  required,
  ...rest
}) => {
  return (
    <label htmlFor={name}>
      {label && <span className={styles.label}>{label}</span>}
      <textarea
        id={name}
        className={`${styles.textarea} ${className || ''}`}
        rows={rows}
        cols={cols}
        value={value}
        required={required}
        onChange={onChange}
        {...rest}
      ></textarea>
    </label>
  );
};

export default TextArea;
