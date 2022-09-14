import { useRouter } from 'next/router';
import { useEffect } from 'react';

import memberProfileTabs from '@/layouts/TabViewLayout/member/memberProfileTabs';

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(memberProfileTabs[0]?.url || '/');
  }, []);

  return <></>;
};

export default Profile;
