import Link from 'next/link';

import { ELinkButton } from './LinkButtonCss';

type Props = {
  href: string;
  children: React.ReactNode;
};

export const LinkButton = (props: Props) => {
  const { children, href } = props;

  return (
    <Link href={href} css={ELinkButton}>
      {children}
    </Link>
  );
};
