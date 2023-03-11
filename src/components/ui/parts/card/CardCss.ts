import { css } from "@emotion/react";

export const ECardItem = css`
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

export const ECardImgWrap = css`
  width: 220px;
  height: 220px;
`

export const ECardImg = css`
  width: 100%;
  height: 100%;
`

export const ECardMainTitle = css`
  font-size: 1.3rem;
  color: var(--bg-color);
`

export const ECardSubTitle = css`
  color: var(--bg-color);
  font-size: 1rem;
  font-weight: 400;
  margin: 4px 0 10px;
`

export const ECardDescription = css`
  font-size: var(--p-font);
  color: var(--main-color);
  font-weight: 600;
`