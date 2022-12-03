import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useCheckAuth } from '@/hooks';
import outburstUnitTabs from '@/layouts/TabViewLayout/outburstLead/outburstUnitTabs';

const Unit = () => {
  const router = useRouter();
  const { isAuthenticated } = useCheckAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(outburstUnitTabs[0]?.url || '/');
    }
  }, [isAuthenticated]);

  return <></>;
};

export default Unit;
