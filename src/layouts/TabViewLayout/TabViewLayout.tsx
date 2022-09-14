import type { FC, PropsWithChildren } from 'react';

import TabView from '@/components/lib/TabView';

import type TabViewLayoutProps from './TabViewLayout.props';

const TabViewLayout: FC<PropsWithChildren<TabViewLayoutProps>> = ({
  children,
  tabs,
  showActionButton,
  actionButtonTitle,
  onActionButtonClicked,
}) => {
  return (
    <TabView
      tabs={tabs}
      showActionButton={showActionButton}
      actionButtonTitle={actionButtonTitle}
      onActionButtonClicked={onActionButtonClicked}
    >
      {children}
    </TabView>
  );
};
export default TabViewLayout;
