import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import Text from '@/components/lib/Text';

import type SideNavLinkProps from './SideNavLink.props';

const SideNavLink: FC<SideNavLinkProps> = ({ icon, title, url, onClick }) => {
  const { pathname } = useRouter();
  const isActive = pathname.startsWith(url);

  return (
    <Link href={url}>
      <div
        onClick={() => {
          if (onClick) onClick();
        }}
        className={`slide-right flex cursor-pointer items-center gap-2 border-l-8 py-3 pl-7 ${
          isActive
            ? 'border-primary-main bg-white/10'
            : 'border-transparent bg-transparent'
        } hover:bg-white/5`}
      >
        <Icon
          className={`text-xl ${isActive ? 'text-white' : 'text-white/60'}`}
          icon={icon}
        />
        <Text className={`${isActive ? 'text-white' : 'text-white/60'}`}>
          {title}
        </Text>
      </div>
    </Link>
  );
};

export default SideNavLink;
