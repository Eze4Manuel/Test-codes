import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useCheckAuth } from '@/hooks';
import leadPastorProfileTabs from '@/layouts/TabViewLayout/leadPastor/leadPastorProfileTabs';

const Profile = () => {
  const router = useRouter();
  const { isAuthenticated } = useCheckAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(leadPastorProfileTabs[0]?.url || '/');
    }
  }, [isAuthenticated]);

  return <></>;
};

export default Profile;
