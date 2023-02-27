import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import {
  ESection,
  ESectionTitleWrap,
  ESectionTitleMain,
  ESectionTitleSub,
} from 'components/pages/index/IndexContentsCss';
import {
  EMenuBoxList,
  EMenuBoxItem,
  EMenuBoxImgWrap,
  EMenuBoxImg,
  EMenuBoxMainTitle,
  EMenuBoxSubTitle,
  EMenuBoxDescription,
  EMenuBoxIcon,
} from './MenuSectionCss';

export const MenuSection = () => {
  return (
    <section id='menu' css={ESection}>
      <div css={ESectionTitleWrap}>
        <span css={ESectionTitleMain}>Food menu</span>
        <h2 css={ESectionTitleSub}>Fresh taste and great price</h2>
      </div>
      <ul css={EMenuBoxList}>
        <li css={EMenuBoxItem}>
          <div css={EMenuBoxImgWrap}>
            <Image src='/hamburger.png' alt='hamburger' width={768} height={512} css={EMenuBoxImg} />
          </div>
          <h2 css={EMenuBoxMainTitle}>Hamburger</h2>
          <h3 css={EMenuBoxSubTitle}>American Tasty Food</h3>
          <span css={EMenuBoxDescription}>1,100円</span>
          <FontAwesomeIcon icon={faCartShopping} css={EMenuBoxIcon} />
        </li>
        <li css={EMenuBoxItem}>
          <div css={EMenuBoxImgWrap}>
            <Image src='/pasta.png' alt='pasta' width={768} height={512} css={EMenuBoxImg} />
          </div>
          <h2 css={EMenuBoxMainTitle}>Pasta</h2>
          <h3 css={EMenuBoxSubTitle}>Italian Tasty Food</h3>
          <span css={EMenuBoxDescription}>1,650円</span>
          <FontAwesomeIcon icon={faCartShopping} css={EMenuBoxIcon} />
        </li>
        <li css={EMenuBoxItem}>
          <div css={EMenuBoxImgWrap}>
            <Image src='/sushi.png' alt='sushi' width={768} height={512} css={EMenuBoxImg} />
          </div>
          <h2 css={EMenuBoxMainTitle}>Sushi</h2>
          <h3 css={EMenuBoxSubTitle}>Japanese Tasty Food</h3>
          <span css={EMenuBoxDescription}>800円</span>
          <FontAwesomeIcon icon={faCartShopping} css={EMenuBoxIcon} />
        </li>
      </ul>
    </section>
  );
};
