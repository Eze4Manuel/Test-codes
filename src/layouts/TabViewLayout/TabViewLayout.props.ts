import type { Tab } from '@/components/lib/TabView/TabView.props';

export default interface TabViewLayout {
  tabs: Tab[];
  showActionButton?: boolean;
  actionButtonTitle?: string;
  onActionButtonClicked?: () => void;
}
