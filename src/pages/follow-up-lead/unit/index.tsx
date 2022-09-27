import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useCheckAuth } from '@/hooks';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';

const Unit = () => {
  const router = useRouter();
  const { isAuthenticated } = useCheckAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(followUpLeadUnitTabs[0]?.url || '/');
    }
  }, [isAuthenticated]);

  return <></>;
};

export default Unit;
