import React from "react";
import useMedia from "use-media";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar: React.FC = React.memo(() => {
  // @See: https://ryotarch.com/javascript/react/get-window-size-with-react-hooks/
  // SSRの際、windowの未定義が起きてしまうので、クライアント側でだけwindowを参照するようにする
  // →hookがあったので今はこちらを使ってます。

  const isWide = useMedia({ minWidth: "700px" });

  return isWide ? <DesktopNavbar /> : <MobileNavbar />;
});

Navbar.displayName = "Navbar";
