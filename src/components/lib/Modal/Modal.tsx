import type { FC, PropsWithChildren } from 'react';

import match from '@/utils/match';

import styles from './Modal.module.scss';
import type ModalProps from './Modal.props';

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  open = true,
  children,
  size = 'normal',
  ...rest
}) => {
  const sizeVariant = match(size, {
    normal: styles.variant__normal,
    small: styles.variant__small,
    default: '',
  });
  return open ? (
    <div className={styles.bg} {...rest}>
      <div className={`${styles.modal} ${sizeVariant}`}>{children}</div>
    </div>
  ) : (
    <></>
  );
};
export default Modal;
