import { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faUserPlus,
  faUserAlt,
  faSignOutAlt,
  faBars,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

import {
  EHeader,
  ETitle,
  EIcon,
  ENavList,
  ENavListActive,
  ENavLink,
  EIconList,
  EIconHover,
  EIconBar,
} from './HeaderCss';
import { ToggleSideMenuHooks } from 'features/changeSideMenu/hooks/ToggleSideMenuHooks';
import { ScrollCloseSideMenuHooks } from 'features/changeSideMenu/hooks/ScrollCloseSideMenuHooks';
import { ChangeSideMenuState } from 'features/changeSideMenu/state/ChangeSideMenuState';

export const Header = () => {
  const { sideMenuState, setSideMenuState } = ChangeSideMenuState();

  useEffect(() => {
    ScrollCloseSideMenuHooks({ setSideMenuState });
  }, [setSideMenuState]);

  return (
    <header css={EHeader}>
      <Link href='/' css={ETitle}>
        FooDely
      </Link>
      <ul css={[ENavList, sideMenuState && ENavListActive]}>
        <li>
          <Link href='#home' css={ENavLink} scroll={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href='#about' css={ENavLink} scroll={false}>
            About
          </Link>
        </li>
        <li>
          <Link href='#menu' css={ENavLink} scroll={false}>
            Menu
          </Link>
        </li>
        <li>
          <Link href='#service' css={ENavLink} scroll={false}>
            Service
          </Link>
        </li>
      </ul>
      <ul css={EIconList}>
        <li>
          <Link href='#' title='カート'>
            <FontAwesomeIcon icon={faCartShopping} css={[EIcon, EIconHover]} />
          </Link>
        </li>
        <li>
          <Link href='#' title='ログイン'>
            <FontAwesomeIcon icon={faSignInAlt} css={[EIcon, EIconHover]} />
          </Link>
        </li>
        <li>
          <Link href='#' title='サインアップ'>
            <FontAwesomeIcon icon={faUserPlus} css={[EIcon, EIconHover]} />
          </Link>
        </li>
        <li>
          <Link href='/mypage' title='ユーザ情報'>
            <FontAwesomeIcon icon={faUserAlt} css={[EIcon, EIconHover]} />
          </Link>
        </li>
        <li>
          <Link href='#' title='ログアウト'>
            <FontAwesomeIcon icon={faSignOutAlt} css={[EIcon, EIconHover]} />
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faBars}
            css={[EIcon, EIconBar]}
            onClick={() => ToggleSideMenuHooks({ setSideMenuState })}
          />
        </li>
      </ul>
    </header>
  );
};