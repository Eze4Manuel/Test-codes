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

  useEffect(() => {
    if (isAuthenticated) {
      router.push(`/${urlForm}${profileTabs[0]?.url || '/'}`);
    }
  }, [isAuthenticated]);

  return <></>;
};

export default ProfileRedirect;
