import { Dispatch, SetStateAction } from "react";

type Props = {
  setSideMenuState: Dispatch<SetStateAction<boolean>>
}

export const ToggleSideMenuHooks = (props: Props) => {
  const { setSideMenuState } = props;
  setSideMenuState((prev: boolean) => !prev);
}