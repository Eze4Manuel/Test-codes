import type { FC } from 'react';

import styles from './TextArea.module.scss';
import type TextAreaProps from './TextArea.props';

const TextArea: FC<TextAreaProps> = ({
  name,
  label,
  className,
  labelClassname,
  ...rest
}) => {
  return (
    <label htmlFor={name}>
      {label && (
        <span className={`${styles.label} ${labelClassname || ''}`}>
          {label}
        </span>
      )}
      <textarea
        id={name}
        className={`${styles.textarea} ${className || ''}`}
        {...rest}
      ></textarea>
    </label>
  );
};

export default TextArea;
