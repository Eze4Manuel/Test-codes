import type { ReactNode } from 'react';

export interface Tab {
  id: string;
  title: string;
  component: ReactNode;
}

export default interface TabViewProps {
  tabs: Tab[];
  showActionButton?: boolean;
  actionButtonTitle?: string;
  onActionButtonClicked?: () => void;
}

export interface InvalidTabProps {
  onClick: () => void;
}
