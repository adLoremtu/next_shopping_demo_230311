import { SerializedStyles } from '@emotion/react';
import React from 'react';

type Props = {
  setCss?: SerializedStyles;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const BaseForm = (props: Props) => {
  const { setCss, children, onSubmit } = props;
  return (
    <form css={setCss} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
