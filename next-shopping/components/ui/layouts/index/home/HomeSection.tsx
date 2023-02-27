import Image from 'next/image';

import { EHomeSection, EHomeImg, EHomeMainTitle, EHomeSubTitle } from './HomeSectionCss';
import { ESection } from 'components/pages/index/IndexContentsCss';
import { LinkButton } from 'components/ui/parts/button/LinkButton';

export const HomeSection = () => {
  return (
    <section id='home' css={[ESection, EHomeSection]}>
      <div>
        <h1 css={EHomeMainTitle}>Food Delivery Site</h1>
        <h2 css={EHomeSubTitle}>
          Food The <br /> Most Precious Things
        </h2>
        <LinkButton href='#'>Today&#39;s Menu</LinkButton>
      </div>
      <div>
        <Image src='/home.png' alt='main photo' width={768} height={512} css={EHomeImg} />
      </div>
    </section>
  );
};
