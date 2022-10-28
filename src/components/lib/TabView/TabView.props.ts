export interface Tab {
  title: string;
  url: string;
}

export default interface TabViewProps {
  tabs: Tab[];
  showActionButton?: boolean;
  actionButtonTitle?: string;
  dropdown?: boolean;
  onActionButtonClicked?: () => void;
}

export interface InvalidTabProps {
  onClick: () => void;
}
