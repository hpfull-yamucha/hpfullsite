import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface Props {
  children: JSX.Element;
}

export const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono bg-gray-100 pt-20 md:pt-0">
      <Navbar />
      <main className="flex flex-1 justify-center items-center flex-col w-screen px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.displayName = "Layout";
