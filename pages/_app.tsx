import type { AppProps } from 'next/app';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from '@/styles/global-style';
import { theme } from '@/styles/theme';
import '@/styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = ({ Component, pageProps:{session, ...pageProps} }: AppProps) => {

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Head>
            <title>GETCODE</title>
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
export default App;