import { useRouter } from 'next/router';
import { useEffect } from 'react';

import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';

const Unit = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(followUpLeadUnitTabs[0]?.url || '/');
  }, []);

  return <></>;
};

export default Unit;
