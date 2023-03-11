import Image from 'next/image';

import {
  ESection,
  ESectionTitleWrap,
  ESectionTitleMain,
  ESectionTitleSub,
} from '@/components/pages/index/IndexContentsCss';
import {
  ServiceSectionList,
  ServiceSectionItem,
  ServiceSectionImg,
  ServiceSectionTitle,
  ServiceSectionText,
} from './ServiceSectionCss';

export const ServiceSection = () => {
  return (
    <>
      <section id='service' css={ESection}>
        <div css={ESectionTitleWrap}>
          <span css={ESectionTitleMain}>Services</span>
          <h2 css={ESectionTitleSub}>We provide best quality food</h2>
        </div>

        <ul css={ServiceSectionList}>
          <li css={ServiceSectionItem}>
            <Image src='/order.png' width={768} height={512} alt='service' css={ServiceSectionImg} />
            <h3 css={ServiceSectionTitle}>Order</h3>
            <p css={ServiceSectionText}>
              There are many variations of passages of Lorem Ipsum available but majority have suffered alteration
              injected humour
            </p>
          </li>
          <li css={ServiceSectionItem}>
            <Image src='/shipping.png' width={768} height={512} alt='service' css={ServiceSectionImg} />
            <h3 css={ServiceSectionTitle}>Shipping</h3>
            <p css={ServiceSectionText}>
              There are many variations of passages of Lorem Ipsum available but majority have suffered alteration
              injected humour
            </p>
          </li>
          <li css={ServiceSectionItem}>
            <Image src='/delivered.png' width={768} height={512} alt='service' css={ServiceSectionImg} />
            <h3 css={ServiceSectionTitle}>Delivered</h3>
            <p css={ServiceSectionText}>
              There are many variations of passages of Lorem Ipsum available but majority have suffered alteration
              injected humour
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
