import React from "react";
// import { useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";

export const Footer: React.FC = () => {
  // const router = useRouter();
  // const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // const [secretText, setSecretText] = useState<string>("");

  Modal.setAppElement("#__next");

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // const isSecretNumber = () => {
  //   setSecretText("");
  //   if (secretText === process.env.SECRETPAGE_CODE) {
  //     router.push("/secret-page");
  //   }
  // };

  return (
    <footer className="w-full flex flex-col justify-center items-center border-t border-gray-300 mt-10 mb-20 pt-8">
      <div className="flex mt-8 mb-12 flex-wrap justify-center">
        <Link href={"/privacy"} passHref>
          <a>
            <div className="mr-6 text-black font-serif font-bold hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
              プライバシーポリシー
            </div>
          </a>
        </Link>
        <Link href={"/company"} passHref>
          <a>
            <div className="mr-6 text-black font-serif font-bold hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
              組織情報
            </div>
          </a>
        </Link>
        <Link href={"/contact"} passHref>
          <a>
            <div className="mr-6 text-black font-serif font-bold hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
              お問い合せ
            </div>
          </a>
        </Link>
        <Link href={"/terms"} passHref>
          <a>
            <div className="mr-6 text-black font-serif font-bold hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
              利用規約
            </div>
          </a>
        </Link>
        <Link href={"/jobs"} passHref>
          <a>
            <div className="text-black font-serif font-bold hover:text-green-600 hover:border-b-4 hover:border-green-600 border-b-4 border-gray-100">
              採用情報
            </div>
          </a>
        </Link>
      </div>
      <Link href={"/company_research"} passHref>
        <a>
          <Image
            src="/hpfull-logo-radi.png"
            alt="hpfull"
            width={80}
            height={42}
          />
        </a>
      </Link>
      {/* <button className="" onClick={openModal}>
        <Image
          src="/hpfull-logo-radi.png"
          alt="hpfull"
          width={80}
          height={42}
        />
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}

        onRequestClose={closeModal}
        // スタイリングを定義
        style={customStyles}
      >
        <>
          <p className="font-bold">ひらけごま</p>
          <div className="flex flex-col items-center">
            <input
              className="border-2 w-72 mb-1"
              type="text"
              value={secretText}
              onChange={(e) => setSecretText(e.target.value)}
            />
            <button
              className="bg-black w-10 border-2 rounded-md border-black shadow-xl"
              type="button"
              onClick={isSecretNumber}
            >
              <p className="text-white">押下</p>
            </button>
          </div>
        </>
      </Modal> */}
    </footer>
  );
};

const customStyles = {
  overlay: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  content: {
    backgroundColor: "rgba(239, 68, 68)",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "300px",
    height: "96px",
    transform: "translate(-50%, -50%)",
    padding: "8px",
    borderRadius: "0.75rem",
  },
};

Footer.displayName = "Footer";
