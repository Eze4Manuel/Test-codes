import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { setUserData } from '@/store/slices/userSlice';

import useAppDispatch from './useAppDispatch';

const useCheckAuth: (config?: { disableRedirect: boolean }) => {
  isAuthenticated: boolean;
} = (config) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (!userData) {
      if (!config?.disableRedirect) {
        router.push('/login');
      }
    } else {
      const parsedData = JSON.parse(userData);
      dispatch(setUserData(parsedData));
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated };
};

export default useCheckAuth;
