import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppSelector, useCheckAuth } from '@/hooks';
import profileTabs from '@/layouts/TabViewLayout/shared/ProfileTabs';
import { processRole } from '@/utils/misc';

const ProfileRedirect = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const { urlForm } = processRole(user?.role, user?.unit);
  const { isAuthenticated } = useCheckAuth();

  const getResolvedUrl = (url?: string) => {
    if (!url) return '';

    // Shared tabs have their urls starting with "$".
    // This helps prepend the approppriate unit lead prefix to shared tabs by replacing
    // the "$" with the correct prefix.
    if (url.startsWith('$')) {
      return `/${urlForm}${url.split('$')[1]}`;
    }

    if (url.startsWith('/$')) {
      return `/${urlForm}${url.split('/$')[1]}`;
    }

    return url;
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push(`${getResolvedUrl(profileTabs[0]?.url)}`);
    }
  }, [isAuthenticated]);

  return <></>;
};

export default ProfileRedirect;
