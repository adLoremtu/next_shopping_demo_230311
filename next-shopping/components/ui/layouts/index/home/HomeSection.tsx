import Image from 'next/image';

import { EHomeSection, EHomeImg, EHomeMainTitle, EHomeSubTitle } from './HomeSectionCss';
import { ESection } from 'components/pages/index/indexCss';
import { Button } from 'components/ui/parts/button/Button';

export const HomeSection = () => {
  return (
    <section id='home' css={[ESection, EHomeSection]}>
      <div>
        <h1 css={EHomeMainTitle}>Food Delivery Site</h1>
        <h2 css={EHomeSubTitle}>
          Food The <br /> Most Precious Things
        </h2>
        <Button href='#'>Today&#39;s Menu</Button>
      </div>
      <div>
        <Image src='/home.png' alt='main photo' width={768} height={512} css={EHomeImg} />
      </div>
    </section>
  );
};
