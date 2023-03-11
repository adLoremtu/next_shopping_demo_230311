import { Dispatch, SetStateAction } from "react";

type Props = {
  setSideMenuState: Dispatch<SetStateAction<boolean>>
}

// サイドメニューが開いた状態の時にスクロールされたらメニューを閉じる
export const ScrollCloseSideMenuHooks = (props: Props) => {
  const { setSideMenuState } = props;

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setSideMenuState(false);
    };
  }
}

// サイドメニュー開閉処理
export const ToggleSideMenuHooks = (props: Props) => {
  const { setSideMenuState } = props;
  setSideMenuState((prev: boolean) => !prev);
}