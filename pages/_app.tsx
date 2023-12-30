import type { AppProps } from 'next/app';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from '@/styles/global-style';
import { theme } from '@/styles/theme';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';


export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
