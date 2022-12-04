import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import NavBar from '@/components/auth/NavBar';
import SideNav from '@/components/auth/SideNav';
import { useAppSelector, useMediaQuery } from '@/hooks';
import { processRole } from '@/utils/misc';

import type AuthLayoutProps from './AuthLayout.props';

const Auth: FC<PropsWithChildren<AuthLayoutProps>> = ({ meta, children }) => {
  const { user } = useAppSelector((state) => state.user);
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const largeScreen = useMediaQuery('(min-width: 1200px)');
  // const { isAuthenticated } = useCheckAuth();
  const { sideNavLinks } = processRole(user?.role, user?.unit);
  const isAuthenticated = true;

  useEffect(() => {
    setSideNavIsOpen(false);
  }, [largeScreen]);

  const toggleSideNav = () => {
    setSideNavIsOpen((prevState) => !prevState);
  };

  return isAuthenticated ? (
    <>
      {meta}

      <div className="relative flex h-screen w-screen">
        <SideNav
          isOpen={sideNavIsOpen}
          onClose={toggleSideNav}
          links={sideNavLinks}
        />

        <main className="relative flex h-full w-full flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <NavBar openSideNav={toggleSideNav} />

          <div className="w-full flex-1 p-5 pt-5 lg:p-10">{children}</div>
        </main>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Auth;
