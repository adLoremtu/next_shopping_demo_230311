import { css } from '@emotion/react';

export const ESubmitButton = css`
  display: inline-block;
  padding: 10px 20px;
  background: var(--main-color);
  color: #fff;
  border-radius: 0.5rem;

  &:hover {
    background: var(--main-highlight-color);
  }
  
  &:disabled {
    background: #999;
  }
`