import type { FC } from 'react';

import type HomeBgProps from './Home.props';
import styles from './HomeBg.module.scss';

const HomeBg: FC<HomeBgProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default HomeBg;
