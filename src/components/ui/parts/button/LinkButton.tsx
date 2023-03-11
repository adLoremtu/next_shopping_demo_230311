import Link from 'next/link';

import { ELinkButton } from './LinkButtonCss';

type Props = {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
};

export const LinkButton = (props: Props) => {
  const { children, href, disabled = true } = props;

  return disabled ? (
    <Link href={href} css={ELinkButton}>
      {children}
    </Link>
  ) : null;
};
