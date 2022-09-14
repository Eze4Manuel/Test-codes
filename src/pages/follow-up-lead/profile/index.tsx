import { useRouter } from 'next/router';
import { useEffect } from 'react';

import followUpLeadProfileTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadProfileTabs';

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(followUpLeadProfileTabs[0]?.url || '/');
  }, []);

  return <></>;
};

export default Profile;
