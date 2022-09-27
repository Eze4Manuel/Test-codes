import toaster from 'react-hot-toast';

export const throwError = (error: any) => {
  toaster.error(
    error?.response?.data?.message || 'Something went wrong, try again later.'
  );
};
