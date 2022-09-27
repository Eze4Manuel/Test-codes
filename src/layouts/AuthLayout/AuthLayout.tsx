import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import NavBar from '@/components/auth/NavBar';
import SideNav from '@/components/auth/SideNav';
import { useAppDispatch, useAppSelector, useMediaQuery } from '@/hooks';
import { setUserData } from '@/store/slices/userSlice';
import { processRole } from '@/utils/misc';

import type AuthLayoutProps from './AuthLayout.props';
import { followUpLeadLinks, memberLinks } from './data';

const Auth: FC<PropsWithChildren<AuthLayoutProps>> = ({ meta, children }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const largeScreen = useMediaQuery('(min-width: 1200px)');

  const getLinks = () => {
    switch (processRole(user?.role || '')?.urlForm) {
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

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (!userData) {
      router.push('/login');
    } else {
      const parsedData = JSON.parse(userData);
      dispatch(setUserData(parsedData));
    }
  }, []);

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
