import { css } from '@emotion/react';

export const ESection = css`
  padding: 70px 17%;
  scroll-margin-top: 47px;
  
  @media (max-width: 1140px) {
    padding: 50px 8%;
  }
  
  @media (max-width: 720px) {
    padding: 100px 7%;
  }
`

export const ESectionTitleWrap = css`
  text-align: center;
`

export const ESectionTitleMain = css`
  color: var(--main-color);
  font-weight: 600;
`

export const ESectionTitleSub = css`
  font-size: var(--h2-font);
`

