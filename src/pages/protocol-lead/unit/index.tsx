import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useCheckAuth } from '@/hooks';
import protocolUnitTabs from '@/layouts/TabViewLayout/protocolLead/protocolUnitTabs';

const Unit = () => {
  const router = useRouter();
  const { isAuthenticated } = useCheckAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(protocolUnitTabs[0]?.url || '/');
    }
  }, [isAuthenticated]);

  return <></>;
};

export default Unit;
