import { css } from '@emotion/react';

export const EHomeSection = css`
  width: 100%;
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  align-items: center;
  
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const EHomeImg = css`
  max-width: 100%;
  width: 600px;
  height: auto;
`

export const EHomeMainTitle = css`
  font-size: var(--big-font);
  color: var(--main-color);
`

export const EHomeSubTitle = css`
  font-size: var(--h2-font);
  margin: 1rem 0 2rem;
`