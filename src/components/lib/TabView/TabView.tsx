import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useCallback } from 'react';

import Button from '../Button';
import Heading from '../Heading';
import Text from '../Text';
import styles from './TabView.module.scss';
import type TabViewProps from './TabView.props';
import type { InvalidTabProps } from './TabView.props';

const InvalidTab: FC<InvalidTabProps> = ({ onClick }) => (
  <div className={styles.empty__tab}>
    <Heading>Oops!</Heading>
    <Text>
      You have entered an invalid url. Click the button below to go to fix that!
    </Text>
    <Button onClick={onClick} size="medium">
      Proceed
    </Button>
  </div>
);

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

  const handleNavigateToDefaultScreen = () => {
    if (tabs[0]) {
      router.push(`${router.pathname}?tab=${tabs[0]?.id}`);
      return;
    }

    router.push(`/`);
  };

  const renderContent = useCallback(() => {
    const activeTabObject = tabs.find((tab) => tab.id === activeTab);

    if (activeTabObject) {
      return activeTabObject.component;
    }

    return <InvalidTab onClick={handleNavigateToDefaultScreen} />;
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
