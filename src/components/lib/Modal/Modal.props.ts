export default interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  size?: 'normal' | 'small';
}
