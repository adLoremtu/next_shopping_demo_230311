import { useState } from "react"

export const ChangeSideMenuState = () => {
  const [sideMenuState, setSideMenuState] = useState(false);

  return { sideMenuState, setSideMenuState };
}
