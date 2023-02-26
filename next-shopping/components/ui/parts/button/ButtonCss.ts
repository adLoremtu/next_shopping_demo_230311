import { css } from '@emotion/react';

export const EButton = css`
  display: inline-block;
  padding: 10px 20px;
  background: var(--main-color);
  color: #fff;
  border-radius: 0.5rem;

  &:hover {
    transform: scale(1.2) translateY(10px);
    transition: .4s;
  }
`