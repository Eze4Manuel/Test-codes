import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';
import { usePopper } from 'react-popper';

import Avatar from '@/components/lib/Avatar';
import Text from '@/components/lib/Text';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { logout } from '@/store/slices/userSlice';
import { processRole } from '@/utils/misc';

import type NavBarProps from './NavBar.props';

const NavBar: FC<NavBarProps> = ({ openSideNav }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow' }],
    placement: 'bottom-end',
  });

  const onMenuClicked = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const onCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  return (
    <nav className="flex w-full flex-col items-start justify-between gap-5 p-5 lg:flex-row lg:items-center lg:p-10">
      <button onClick={openSideNav} className=" lg:hidden">
        <Icon className="text-2xl" icon="ant-design:menu-outline" />
      </button>

      <div className="flex w-full flex-col items-center gap-3 lg:flex-row">
        <Avatar
          className="h-20 w-20"
          name={`${user?.first_name} ${user?.last_name}`}
          image={user?.profile_picture}
        />

        <div className="flex flex-col items-center text-center lg:items-start">
          <Text
            variant="subheading"
            className="-mb-1 font-josefinSans font-bold capitalize"
          >
            {user?.first_name} {user?.last_name}
          </Text>
          <Text className="capitalize text-gray-500">
            {processRole(user?.role || '').longForm}
          </Text>
        </div>
      </div>

      <button
        onClick={onMenuClicked}
        ref={setReferenceElement}
        className="hidden lg:block"
      >
        <Icon className="text-2xl" icon="entypo:dots-three-horizontal" />
      </button>

      {menuIsOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          className="z-40 flex min-w-[250px] flex-col gap-3 rounded-md border border-[#686868] bg-white py-5 px-7 shadow-sm  transition-none"
          onMouseLeave={onCloseMenu}
          {...attributes.popper}
        >
          <div
            className="cursor-pointer text-sm hover:text-primary-main"
            onClick={handleLogout}
          >
            <Text className="font-semibold">Log Out</Text>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
