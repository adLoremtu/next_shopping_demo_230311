import Link from 'next/link';

import { EButton } from './ButtonCss';

type Props = {
  href: string;
  children: React.ReactNode;
};

export const Button = (props: Props) => {
  const { children, href } = props;

  return (
    <Link href={href} css={EButton}>
      {children}
    </Link>
  );
};
