import type { ReactNode } from 'react';

export interface Tab {
  title: string;
  url: string;
}

export default interface TabViewProps {
  tabs: Tab[];
  showActionButton?: boolean;
  actionButtonTitle?: string;
  onActionButtonClicked?: () => void;
  rightComponent?: ReactNode;
}

export interface InvalidTabProps {
  onClick: () => void;
}
