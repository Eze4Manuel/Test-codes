import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useCallback } from 'react';

import styles from './TabView.module.scss';
import type TabViewProps from './TabView.props';

const TabView: FC<TabViewProps> = ({
  tabs,
  showActionButton = false,
  actionButtonTitle,
  onActionButtonClicked,
}) => {
  const router = useRouter();
  const activeTab = router.query?.tab || '';

  const onTabClicked = (id: string) => {
    router.push(`${router.pathname}?tab=${id}`);
  };

  const renderContent = useCallback(() => {
    const activeTabObject = tabs.find((tab) => tab.id === activeTab);

    if (activeTabObject) {
      return activeTabObject.component;
    }

    return <></>;
  }, [router.query?.tab]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.overflow__wrapper}>
          <div
            className={`no-scrollbar scroll-smooth ${styles.overflow__container}`}
          >
            <div className={`${styles.tab__container}`}>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${styles.tab} ${
                    activeTab === tab.id && styles.tab__active
                  }`}
                  onClick={() => onTabClicked(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.overflow__container__border} />
        </div>

        {showActionButton && (
          <button
            className={styles.action__button}
            onClick={() => {
              if (onActionButtonClicked) onActionButtonClicked();
            }}
          >
            {actionButtonTitle || 'Edit info'}
          </button>
        )}
      </div>

      <div className={styles.content}>{renderContent()}</div>
    </div>
  );
};

export default TabView;
