import '../styles/global.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CookiesProvider } from 'react-cookie';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { queryClientConfig } from '@/utils/config/queryClient.config';
import { toastOptions } from '@/utils/config/toaster.config';

const client = new QueryClient(queryClientConfig);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <CookiesProvider>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Component {...pageProps} key={router.pathname} />
          <Toaster position="top-right" toastOptions={toastOptions} />
        </QueryClientProvider>
      </Provider>
    </CookiesProvider>
  );
};

export default MyApp;
