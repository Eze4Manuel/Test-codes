import type { FC, PropsWithChildren } from 'react';

import type AuthLayoutProps from './AuthLayout.props';

const Auth: FC<PropsWithChildren<AuthLayoutProps>> = ({ meta, children }) => {
  // TODO: State to manage sidebar

  return (
    <>
      {meta}

      <div className="flex h-screen w-screen overflow-hidden">
        {/* TODO: SideNav / Mobile Sidedrawwer */}
        <main className="relative h-full w-full xl:w-[35vw] xl:max-w-[450px] 2xl:max-w-none">
          {/* TODO: Navbar */}

          {children}
        </main>
      </div>
    </>
  );
};

export default Auth;
