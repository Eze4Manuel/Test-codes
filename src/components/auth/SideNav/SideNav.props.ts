interface Link {
  icon: string;
  url: string;
  title: string;
}

export default interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: Link[];
}
