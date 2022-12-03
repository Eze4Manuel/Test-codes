import type { ReactNode } from 'react';

export default interface ModalProps {
  onClose?: () => void;
  size?: 'normal' | 'small';
  children: ReactNode;
}
