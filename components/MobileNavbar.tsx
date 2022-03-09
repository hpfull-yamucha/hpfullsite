import React from "react";
import Link from "next/link";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

export const MobileNavbar: React.FC = React.memo(() => {
  // https://nabendu82.medium.com/creating-a-hamburger-menu-in-react-nextjs-app-19a6094cec5f
  return (
    <header className="fixed top-0 left-0 bg-gray-100 h-20 z-50">
      <nav className="w-screen">
        <Menu
          noOverlay
          width={320}
          right
          styles={styles}
          pageWrapId={"page-wrap"}
        >
          <p className="menu-item">
            <Link href="/company">
              <a className="px-12 py-4 flex items-center relative uppercase font-black text-lg bg-none">
                ORGANIZATION
              </a>
            </Link>
          </p>

          <p className="menu-item">
            <Link href="/blogs">
              <a className="px-12 py-4 flex items-center relative uppercase font-black text-lg bg-none">
                BLOG
              </a>
            </Link>
          </p>

          <p className="menu-item">
            <Link href="/services">
              <a className="px-12 py-4 flex items-center relative uppercase font-black text-lg bg-none">
                SERVICES
              </a>
            </Link>
          </p>

          <p className="menu-item">
            <Link href="/items">
              <a className="px-12 py-4 flex items-center relative uppercase font-black text-lg bg-none">
                SHOP
              </a>
            </Link>
          </p>

          {/* <p className="menu-item">
            <Link href="/members">
              <a className="px-12 py-4 flex items-center relative uppercase font-black text-lg bg-none">
                MEMBER
              </a>
            </Link>
          </p> */}

          <p className="menu-item">
            <Link href="/tags">
              <a className="px-12 py-4 flex items-center relative uppercase font-black text-lg bg-none">
                TAG
              </a>
            </Link>
          </p>

          {/* <p className="menu-item">
            <Link href="/customers-fb">
              <a className="px-12 py-4 flex items-center relative uppercase font-black text-lg bg-none">
                お客様の声
              </a>
            </Link>
          </p> */}
        </Menu>
        <div
          id="page-wrap"
          className="flex space-x-4 h-14 items-center pl-8 pt-14"
        >
          <Link href={"/"} passHref>
            <a>
              <Image
                src="/hpfullyokologoatouka.png"
                alt="hpfull"
                width={264}
                height={80}
              />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
});

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "32px",
    width: "32px",
    top: "10px",
    right: "1px",
  },
  bmCross: {
    background: "#bdc3c7",
    height: "6px",
    width: "28px",
    top: "10px",
    right: "1px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

MobileNavbar.displayName = "MobileNavbar";
