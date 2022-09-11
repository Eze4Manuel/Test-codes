import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import NavBar from '@/components/auth/NavBar';
import SideNav from '@/components/auth/SideNav';
import { useMediaQuery } from '@/hooks';

import type AuthLayoutProps from './AuthLayout.props';
// import { memberLinks } from './data';

const Auth: FC<PropsWithChildren<AuthLayoutProps>> = ({
  meta,
  children,
  links,
}) => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const largeScreen = useMediaQuery('(min-width: 1200px)');

  // TODO: use a switch to conditionally render links based on the role
  // of the logged in user. The "links" below is hardcoded.
  // const links = memberLinks;

  useEffect(() => {
    setSideNavIsOpen(false);
  }, [largeScreen]);

  const toggleSideNav = () => {
    setSideNavIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {meta}

      <div className="relative flex h-screen w-screen">
        <SideNav isOpen={sideNavIsOpen} onClose={toggleSideNav} links={links} />

        <main className="relative flex h-full w-full flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <NavBar openSideNav={toggleSideNav} />

          <div className="w-full flex-1 p-5 pt-5 lg:p-10">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Auth;
