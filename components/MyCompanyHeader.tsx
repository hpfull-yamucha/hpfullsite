import React from "react";
import Link from "next/link";

interface Props {
  tabName: string;
}

export const MyCompanyHeader: React.FC<Props> = (props: Props) => {
  const { tabName } = props;
  return (
    <div className="md:w-2/3 mx-4 mb-10">
      <nav className="flex flex-row justify-start">
        {tabName === "company_outline" ? (
          <>
            <Link href="/company">
              <a className="md:text-2xl text-xl text-black py-4 px-6 block hover:text-blue-500 focus:outline-none  border-b-2 font-medium border-blue-500">
                組織概要
              </a>
            </Link>
            <Link href="/company/history">
              <a className="md:text-2xl text-xl text-black py-4 px-6 block hover:text-blue-500 focus:outline-none">
                沿革
              </a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/company">
              <a className="md:text-2xl text-xl text-black py-4 px-6 block hover:text-blue-500 focus:outline-none">
                組織概要
              </a>
            </Link>
            <Link href="/company/history">
              <a className="md:text-2xl text-xl text-black py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium border-blue-500">
                沿革
              </a>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

MyCompanyHeader.displayName = "MyCompanyHeader";
