import { Icon } from '@iconify/react';
import Image from 'next/image';
import type { FC } from 'react';

import { useMediaQuery } from '@/hooks';

import type SideNavProps from './SideNav.props';
import SideNavLink from './SideNavLink';

const SideNav: FC<SideNavProps> = ({ isOpen, onClose, links }) => {
  const smallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-10 h-screen w-screen bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 z-10 h-full w-[300px] overflow-y-auto overflow-x-hidden rounded-l-2xl bg-cci-black duration-300 lg:static lg:rounded-none 2xl:w-[20vw] 2xl:max-w-none ${
          isOpen
            ? 'right-0 translate-x-0 lg:right-0'
            : 'right-[-100%] translate-x-[100%] lg:right-0 lg:translate-x-[0]'
        }`}
      >
        <div className="px-7 pt-5 lg:hidden">
          <button onClick={onClose}>
            <Icon className="text-2xl text-white" icon="codicon:chrome-close" />
          </button>
        </div>

        <div className="my-10 mt-5 grid w-full place-items-center lg:mt-10">
          <figure className="relative -ml-2 flex aspect-[2/1] w-[120px] p-0 lg:w-[180px]">
            <Image
              layout="fill"
              className="h-full w-full object-cover"
              src="/assets/icons/Logo.svg"
              alt="CCI Logo"
              priority
            />
          </figure>
        </div>

        {links.map((link, index) => (
          <SideNavLink key={index} {...link} />
        ))}

        {smallScreen && (
          <SideNavLink
            icon="icon-park-outline:logout"
            title="Logout"
            url="/logout"
          />
        )}
      </aside>
    </>
  );
};

export default SideNav;
