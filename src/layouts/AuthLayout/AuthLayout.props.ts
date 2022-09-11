import type { ReactNode } from 'react';

interface Links {
  icon: string;
  title: string;
  url: string;
}
export default interface AuthLayoutProps {
  meta: ReactNode;
  links: Links[];
}
