import { Dispatch, SetStateAction } from "react";

type Props = {
  setSideMenuState: Dispatch<SetStateAction<boolean>>
}

export const ScrollCloseSideMenuHooks = (props: Props) => {
  const { setSideMenuState } = props;

  if (typeof window !== 'undefined') {
    // windowを使う処理を記述
    window.onscroll = () => {
      setSideMenuState(false);
    };
  }
}