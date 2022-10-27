import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';

import styles from './TabView.module.scss';
import type TabViewProps from './TabView.props';

const TabView: FC<PropsWithChildren<TabViewProps>> = ({
  tabs,
  showActionButton = false,
  actionButtonTitle,
  onActionButtonClicked,
  rightComponent,
  children,
}) => {
  const router = useRouter();

  const onTabClicked = (url: string) => {
    router.push(`${url}#active`);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${rightComponent ? 'gap-5' : ''}`}>
        <div className={styles.header}>
          <div className={styles.overflow__wrapper}>
            <div className={`${styles.overflow__container}`}>
              <div className={`${styles.tab__container}`}>
                {tabs.map((tab, index) => (
                  <button
                    id={router.pathname.startsWith(tab.url) ? 'active' : ''}
                    key={index}
                    className={`${styles.tab} ${
                      router.pathname.startsWith(tab.url) && styles.tab__active
                    }`}
                    onClick={() => onTabClicked(tab.url)}
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

        {rightComponent && <div>{rightComponent}</div>}
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default TabView;
