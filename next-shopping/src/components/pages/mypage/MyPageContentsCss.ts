import { css } from "@emotion/react"

export const MyPageButtonCenter = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const MyPageForm = css`
  margin: 80px auto;
  max-width: 720px;
  
  @media screen and (max-width: 480px) {
    margin: 40px auto;
  }
`

export const MyPageFormItem = css`
  padding: 24px 0;
  width: 100%;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 480px) {
    padding: 16px 14px;
    flex-wrap: wrap;
  }
`

export const MyPageFormLabel = css`
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-size: 18px;
  
  @media screen and (max-width: 480px) {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
`

export const MyPageFormInput = css`
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
  
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
  }
`
