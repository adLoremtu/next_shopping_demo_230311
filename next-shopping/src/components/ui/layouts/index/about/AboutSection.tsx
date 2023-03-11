import Image from 'next/image';

import { ESection } from '@/components/pages/index/IndexContentsCss';
import { EAboutSection, EAboutImg, EAboutMainTitle, EAboutSubTitle, EAboutDescription } from './AboutSectionCss';

export const AboutSection = () => {
  return (
    <section id='about' css={[ESection, EAboutSection]}>
      <div>
        <Image src='/about.png' alt='about photo' width={768} height={512} css={EAboutImg} />
      </div>
      <div>
        <span css={EAboutMainTitle}>About Us</span>
        <h2 css={EAboutSubTitle}>
          We speak the good <br /> food language
        </h2>
        <p css={EAboutDescription}>
          There are many variations passages of lorem Ipsum available, but the majority have suffered alteration in
          form, by injected humour randomised words which don&#39;t look even slightly believable
        </p>
      </div>
    </section>
  );
};
