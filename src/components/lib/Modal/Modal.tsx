import type { FC, PropsWithChildren } from 'react';

import styles from './Modal.module.scss';
import type ModalProps from './Modal.props';

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  open = false,
  children,
  ...rest
}) => {
  return (
    <div className={`${styles.bg} ${open ? 'block' : 'hidden'}`} {...rest}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
export default Modal;
