import { css } from '@emotion/react';

export const ServiceSectionList = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  grid-gap: 1.5rem;
  margin-top: 4rem;
`

export const ServiceSectionItem = css`
  text-align: center;
  padding: 20px 30px;
`

export const ServiceSectionImg = css`
  width: 220px;
  height: auto;
  margin: 0 auto;
`

export const ServiceSectionTitle = css`
  margin: 4px 0 10px;
  color: var(--main-color);
  font-size: 1.2rem;
`

export const ServiceSectionText = css`
  line-height: 1.7;
`