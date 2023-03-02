import { SerializedStyles } from '@emotion/react';
import React from 'react';

type Props = {
  setCss?: SerializedStyles;
  children: React.ReactNode;
  onSubmit?: () => void;
};

export const BaseForm = (props: Props) => {
  const { setCss, children } = props;
  return <form css={setCss}>{children}</form>;
};
