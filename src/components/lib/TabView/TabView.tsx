import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';

import { useAppSelector } from '@/hooks';
import { processRole } from '@/utils/misc';

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
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();

  const onTabClicked = (url: string) => {
    router.push(`${url}#active`);
  };

  const getResolvedUrl = (url: string) => {
    // Shared tabs have their urls starting with "$".
    // This helps prepend the approppriate unit lead prefix to shared tabs by replacing
    // the "$" with the correct prefix.
    if (url.startsWith('$') || url.startsWith('/$')) {
      const { urlForm } = processRole(user?.role, user?.unit);

      return `/${urlForm}${url.split('$')[1]}`;
    }

    return url;
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
                    id={
                      router.pathname.startsWith(getResolvedUrl(tab.url))
                        ? 'active'
                        : ''
                    }
                    key={index}
                    className={`${styles.tab} ${
                      router.pathname.startsWith(getResolvedUrl(tab.url)) &&
                      styles.tab__active
                    }`}
                    onClick={() => onTabClicked(getResolvedUrl(tab.url))}
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
