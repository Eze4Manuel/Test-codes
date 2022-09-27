import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useCheckAuth } from '@/hooks';
import followUpLeadProfileTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadProfileTabs';

const Profile = () => {
  const router = useRouter();
  const { isAuthenticated } = useCheckAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(followUpLeadProfileTabs[0]?.url || '/');
    }
  }, [isAuthenticated]);

  return <></>;
};

export default Profile;
