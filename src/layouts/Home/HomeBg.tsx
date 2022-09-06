import type { FC, PropsWithChildren } from 'react';

import styles from './HomeBg.module.scss';

const HomeBg: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default HomeBg;
