import React from "react";
import Link from "next/link";
import Image from "next/image";

export const DesktopNavbar: React.FC = React.memo(() => {
  return (
    <header>
      <nav className="w-screen mt-4">
        <div className="flex items-center justify-center">
          <div className="flex md:w-[1024px] items-center justify-evenly">
            <div className="mt-1">
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

            {/* @see: https://ws-pilgrimage.jp/webcreate/711/ */}
            <div className="ml-auto flex space-x-8">
              <Link href="/company">
                <a className="pt-4 mb-4 md:text-lg font-semibold text-gray-700 hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
                  ORGANIZATION
                </a>
              </Link>

              <Link href="/services">
                <a className="pt-4 mb-4 md:text-lg font-semibold text-gray-700 hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
                  SERVICES
                </a>
              </Link>

              <Link href="/blogs">
                <a className="pt-4 mb-4 md:text-lg font-semibold text-gray-700 hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
                  BLOG
                </a>
              </Link>

              {/* <Link href="/tags">
                <a className="pt-4 mb-4 md:text-lg font-semibold text-gray-700 hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
                  TAG
                </a>
              </Link> */}

              <Link href="/items">
                <a className="pt-4 mb-4 md:text-lg font-semibold text-gray-700 hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
                  SHOP
                </a>
              </Link>

              {/* <Link href="/members">
                <a className="pt-4 mb-4 md:text-lg font-semibold text-gray-700 hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
                  MEMBER
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});

DesktopNavbar.displayName = "DesktopNavbar";
