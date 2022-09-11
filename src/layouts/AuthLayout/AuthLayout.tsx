import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import NavBar from '@/components/auth/NavBar';
import SideNav from '@/components/auth/SideNav';
import { useMediaQuery } from '@/hooks';

import type AuthLayoutProps from './AuthLayout.props';
import { followUpLeadLinks, memberLinks } from './data';

const Auth: FC<PropsWithChildren<AuthLayoutProps>> = ({ meta, children }) => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const largeScreen = useMediaQuery('(min-width: 1200px)');

  const router = useRouter();
  const role = router.pathname.split('/')[1];

  const getLinks = () => {
    switch (role) {
      case 'member':
        return memberLinks;

      case 'follow-up-lead':
        return followUpLeadLinks;

      default:
        return [];
    }
  };

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
        <SideNav
          isOpen={sideNavIsOpen}
          onClose={toggleSideNav}
          links={getLinks()}
        />

        <main className="relative flex h-full w-full flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <NavBar openSideNav={toggleSideNav} />

          <div className="w-full flex-1 p-5 pt-5 lg:p-10">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Auth;
