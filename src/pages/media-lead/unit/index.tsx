import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useCheckAuth } from '@/hooks';
import mediaUnitTabs from '@/layouts/TabViewLayout/mediaLead/mediaUnitTabs';

const Unit = () => {
  const router = useRouter();
  const { isAuthenticated } = useCheckAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(mediaUnitTabs[0]?.url || '/');
    }
  }, [isAuthenticated]);

  return <></>;
};

export default Unit;
