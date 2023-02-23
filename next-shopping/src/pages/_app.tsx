import type { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import 'modern-css-reset/dist/reset.min.css';

export default function App({ Component, pageProps }: AppProps) {
  const global = css`
    body {
      background: #333;
    }
  `;

  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
