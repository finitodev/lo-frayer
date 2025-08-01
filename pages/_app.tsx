import '../styles/globals.css';
import type { AppProps } from 'next/app';

/**
 * Custom App component. It wraps every page of the extension prototype with
 * global styles and can be used to inject providers or context. See
 * https://nextjs.org/docs/basic-features/typescript for more details.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;