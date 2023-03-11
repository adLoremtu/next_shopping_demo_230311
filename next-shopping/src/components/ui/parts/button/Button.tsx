import { SerializedStyles } from '@emotion/serialize';

import { EButton } from './ButtonCss';

type Props = {
  setCss?: SerializedStyles;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  const { setCss, children, onClick } = props;

  return <button css={[EButton, setCss]} onClick={onClick}>{children}</button>;
};
