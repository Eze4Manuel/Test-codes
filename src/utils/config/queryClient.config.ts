import toaster from 'react-hot-toast';
import type { QueryClientConfig } from 'react-query';

const throwError = (error: any) => {
  toaster.error(
    error?.response?.data?.message || 'Something went wrong, try again later.'
  );
};

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    mutations: {
      onError: (error) => {
        throwError(error);
      },
    },
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      onError: (error) => {
        throwError(error);
      },
    },
  },
};
