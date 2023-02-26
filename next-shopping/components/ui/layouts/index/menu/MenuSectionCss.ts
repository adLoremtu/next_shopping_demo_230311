import { css } from '@emotion/react';

export const EMenuBoxList = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, auto));
  grid-gap: 1.5rem;
  align-items: center;
`

export const EMenuBoxItem = css`
  position: relative;
  margin-top: 4rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  background: #feeee7;
  padding: 20px;
  border-radius: 0.5rem;
`

export const EMenuBoxImgWrap = css`
  width: 220px;
  height: 220px;
`
export const EMenuBoxImg = css`
  width: 100%;
  height: 100%;
`

export const EMenuBoxMainTitle = css`
  font-size: 1.3rem;
  color: var(--bg-color);
`

export const EMenuBoxSubTitle = css`
  color: var(--bg-color);
  font-size: 1rem;
  font-weight: 400;
  margin: 4px 0 10px;
`

export const EMenuBoxDescription = css`
  font-size: var(--p-font);
  color: var(--main-color);
  font-weight: 600;
`

export const EMenuBoxIcon = css`
  background: var(--main-color);
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  padding: 7px 10px;
  border-radius: 0 0.5rem 0 0.5rem;
  
  @media (max-width: 1140px) {
    display: initial;
    color: var(--text-color);
  }
`
