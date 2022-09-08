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
  ...rest
}) => {
  return (
    <label htmlFor={name}>
      {label && (
        <span className={`${styles.label} ${className || ''}`}>{label}</span>
      )}
      <textarea
        id={name}
        className={styles.textarea}
        rows={rows}
        cols={cols}
        value={value}
        onChange={onChange}
        {...rest}
      ></textarea>
    </label>
  );
};

export default TextArea;
