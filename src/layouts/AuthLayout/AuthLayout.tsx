import type { FC, PropsWithChildren } from 'react';

import styles from './Auth.module.scss';
import type AuthLayoutProps from './AuthLayout.props';

const Auth: FC<PropsWithChildren<AuthLayoutProps>> = ({ meta, children }) => {
  // TODO: State to manage sidebar

  return (
    <>
      {meta}

      <div className={styles.auth__container}>
        {/* TODO: SideNav / Mobile Sidedrawwer */}
        <main className={styles.auth__main}>
          {/* TODO: Navbar */}

          {children}
        </main>
      </div>
    </>
  );
};

export default Auth;
