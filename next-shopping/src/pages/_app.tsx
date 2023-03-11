import type { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import 'modern-css-reset/dist/reset.min.css';

import { CheckLoginStatus } from '@/features/checkLoginStatus/hooks/CheckLoginStatus';

export default function App({ Component, pageProps }: AppProps) {
  const global = css`
    :root {
      --main-color: #ff702a;
      --main-highlight-color: #ffc999;
      --text-color: #fff;
      --bg-color: #1e1c2a;
      --big-font: 5rem;
      --h2-font: 2.25rem;
      --p-font: 0.9rem;
    }

    * {
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;

      &::section {
        background: var(--main-color);
        color: var(--text-color);
      }
    }

    body {
      font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
      color: var(--text-color);
      background: var(--bg-color);
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;

      &::visibility {
        color: var(--text-color);
      }
    }

    @media (max-width: 1560px) {
      :root {
        --big-font: 3.5rem;
        --h2-font: 2rem;
      }
    }
  `;

  return (
    <>
      <Global styles={global} />
      <CheckLoginStatus>
        <Component {...pageProps} />
      </CheckLoginStatus>
    </>
  );
}
