import { css } from '@emotion/react';

export const EAboutSection = css`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 1.5rem;
  align-items: center;
  
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const EAboutImg = css`
  max-width: 100%;
  width: 480px;
  height: auto;
  margin: 0 auto;
  
  @media (max-width: 720px) {
    order: 2;
  }
`

export const EAboutMainTitle = css`
  color: var(--main-color);
  font-weight: 600;
`

export const EAboutSubTitle = css`
  font-size: var(--h2-font);
`

export const EAboutDescription = css`
  margin: 0.8rem 0 1.8rem;
  line-height: 1.7;
`