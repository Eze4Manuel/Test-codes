import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useCheckAuth } from '@/hooks';
import memberProfileTabs from '@/layouts/TabViewLayout/member/memberProfileTabs';

const Profile = () => {
  const router = useRouter();
  const { isAuthenticated } = useCheckAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(memberProfileTabs[0]?.url || '/');
    }
  }, [isAuthenticated]);

  return <></>;
};

export default Profile;
