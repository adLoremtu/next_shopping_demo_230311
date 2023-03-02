import { SerializedStyles } from '@emotion/serialize';

import { EButton } from './ButtonCss';

type Props = {
  setCss?: SerializedStyles;
  children: React.ReactNode;
};

export const Button = (props: Props) => {
  const { setCss, children } = props;

  return <button css={[EButton, setCss]}>{children}</button>;
};
