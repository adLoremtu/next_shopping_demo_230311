import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { ESection } from '@/components/pages/index/IndexContentsCss';
import {
  FooterSectionWrap,
  FooterSectionMain,
  FooterSectionCol,
  FooterSectionTitle,
  FooterSectionItem,
  FooterSectionLink,
  FooterSectionSocialList,
  FooterSectionSocialLink,
} from './FooterCss';

export const Footer = () => {
  return (
    <section id='contact' css={ESection}>
      <div css={FooterSectionWrap}>
        <div css={FooterSectionMain}>
          <div css={FooterSectionCol}>
            <h4 css={FooterSectionTitle}>Menu Links</h4>
            <ul>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Home
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  About
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Menu
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Service
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <a href='#' css={FooterSectionLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div css={FooterSectionCol}>
            <h4 css={FooterSectionTitle}>Our Service</h4>
            <ul>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Web Design
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Web Development
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Marketing
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Product Management
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>
          <div css={FooterSectionCol}>
            <h4 css={FooterSectionTitle}>Information</h4>
            <ul>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  About Us
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Delivery Information
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Privacy Policy
                </Link>
              </li>
              <li css={FooterSectionItem}>
                <Link href='#' css={FooterSectionLink}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div css={FooterSectionCol}>
            <h4 css={FooterSectionTitle}>Contact Us</h4>
            <div css={FooterSectionSocialList}>
              <a href='#' css={FooterSectionSocialLink}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href='#' css={FooterSectionSocialLink}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href='#' css={FooterSectionSocialLink}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='#' css={FooterSectionSocialLink}>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
