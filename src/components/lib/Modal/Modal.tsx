import type { FC, PropsWithChildren } from 'react';

import styles from './Modal.module.scss';
import type ModalProps from './Modal.props';

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  open = true,
  children,
  ...rest
}) => {
  return open ? (
    <div className={styles.bg} {...rest}>
      <div className={styles.modal}>{children}</div>
    </div>
  ) : (
    <></>
  );
};
export default Modal;
