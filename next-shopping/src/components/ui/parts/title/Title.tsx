import { ETitle } from './TitleCss';

type Props = {
  children: React.ReactNode;
};

export const Title = (props: Props) => {
  const { children } = props;
  return <h2 css={ETitle}>{children}</h2>;
};
