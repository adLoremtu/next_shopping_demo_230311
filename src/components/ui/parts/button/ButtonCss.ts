import { css } from '@emotion/react';

export const EButton = css`
  display: inline-block;
  padding: 10px 20px;
  background: var(--main-color);
  color: #fff;
  border-radius: 0.5rem;
  border: none;

  &:hover {
    background: var(--main-highlight-color);
  }
`