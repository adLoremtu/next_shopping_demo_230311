import { css } from "@emotion/react";

export const CartCssWrapper = css`
  padding: 0 20px;
  margin-top: 20px;
`

export const CartCssList = css`
  width: 100%;
`

export const CartCssItem = css`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--text-color);

  &:not(:first-of-type) {
    padding-top: 20px;
  }
`

export const CartCssImgWrap = css`
  width: 150px;
  height: 150px;
  margin-right: 10px;
`

export const CartCssImg = css`
  width: 100%;
  min-width: 150px;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`

export const CartCssInfoWrap = css`
  width: calc(100% - 160px);
`

export const CartCssInfoTextWrap = css`
  overflow: hidden;
  width: 100%;
`

export const CartCssInfoItemText = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 20px;
`

export const CartCssInfoItemPrice = css`
  margin-bottom: 20px;
`

export const CartCssTotalCost = css`
  padding-top: 20px;
  text-align: right;
`

export const CartCssButtonWrap = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`