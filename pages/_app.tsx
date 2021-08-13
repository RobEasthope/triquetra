import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme/theme';
import { globalStyles } from '../theme/globalStyles';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ChakraProvider theme={theme}>
      {globalStyles}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
