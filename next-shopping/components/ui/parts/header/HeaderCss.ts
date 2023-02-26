import { css } from '@emotion/react';

export const EHeader = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 170px;
  background: var(--bg-color);

  @media (max-width: 1560px) {
    padding: 15px 40px;
  }
  
  @media (max-width: 720px) {
    padding: 10px 16px;
  }
`;

export const ETitle = css`
  color: var(--main-color);
  font-weight: 600;
  font-size: 1.5rem;
`;

export const EIcon = css`
  font-size: 2rem;
  cursor: pointer;
  margin: 0 6px;
  color: var(--text-color);
`;

export const EIconHover = css`
  &:hover {
    transform: translateY(-4px);
    transition: all 0.5s ease;
    color: var(--main-color);
  }
`

export const EIconBar = css`
  display: none;
  
  @media (max-width: 1140px) {
    display: initial;
    color: var(--text-color);
  }
`

export const ENavList = css`
  display: flex;
  
  @media (max-width: 1140px) {
    position: absolute;
    top: -400px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #2b2640;
    transition: 0.3s;
  }
`;

export const ENavListActive = css`
  @media (max-width: 1140px) {
    top: 70px;
  }
  
  @media (max-width: 720px) {
    top: 54px;
  }

`;

export const ENavLink = css`
  color: var(--text-color);
  font-size: 1.1rem;
  padding: 10px 20px;
  font-weight: 600;

  &:hover {
    color: var(--main-color);
    transition: .4s;
  }
  
  @media (max-width: 1140px) {
    padding: 1.5rem;
    display: block;
  }
`;

export const EIconList = css`
  display: flex;
  align-items: center;
`
