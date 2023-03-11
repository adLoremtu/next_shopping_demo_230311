import { css } from '@emotion/react';

export const FooterSectionWrap = css`
  padding: 10px 0;
`

export const FooterSectionMain = css`
  display: flex;
  flex-wrap: wrap;
`

export const FooterSectionCol = css`
  width: 25%;
  
  @media (max-width: 1140px) {
    width: 50%;
    margin-bottom: 10px;
  }
  
  @media (max-width: 575px) {
    width: 100%;
  }
`

export const FooterSectionTitle = css`
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 25px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 50px;
    left: 0;
    bottom: -8px;
    background: var(--main-color);
  }
`

export const FooterSectionItem = css`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

export const FooterSectionLink = css`
  color: #9897a9;
  font-size: 1.1rem;
  display: block;
  text-transform: capitalize;
  transition: 0.4s;
  
  &:hover {
    color: var(--text-color);
    transform: translateX(-12px);
  }
`

export const FooterSectionSocialList = css`
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FooterSectionSocialLink = css`
  height: 40px;
  width: 40px;
  background-color: var(--main-color);
  color: var(--text-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 50%;
  transition: 0.4s;
  
  &:hover {
    transform: scale(1.2);
    color: var(--bg-color);
    background: var(--text-color);
  }
`