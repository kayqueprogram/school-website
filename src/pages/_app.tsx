import GlobalPageStyle from '@/shared/styles/GlobalPageStyle';
import { ThemeProvider } from 'styled-components';
import pageTheme from '@/shared/styles/pageTheme';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={pageTheme}>
      <GlobalPageStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
