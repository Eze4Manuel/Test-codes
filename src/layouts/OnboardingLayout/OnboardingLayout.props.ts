import type { ReactNode } from 'react';

export default interface OnboardingLayoutProps {
  meta: ReactNode;
  hideBackButton?: boolean;
  heading?: string;
  subheading?: string;
}
