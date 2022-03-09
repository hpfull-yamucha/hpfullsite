import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import styles from "pages/Index.module.css";
import { Member as MemberType } from "types";

interface Props {
  balloonMessage: string;
  balloonHeight?: string;
}

export const Balloon: React.FC<Props> = React.memo((props: Props) => {
  const { balloonMessage, balloonHeight } = props;
  return (
    <div className={styles.balloon1}>
      <div className={styles.icon}>
        <Image
          className="rounded-full"
          src={"/hpfullyamuchalogodeka.png"}
          alt="hpfull"
          width={70}
          height={70}
        />
      </div>
      <div className={`${balloonHeight}`}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(balloonMessage).pauseFor(2500).start();
          }}
        />
      </div>
    </div>
  );
});

Balloon.displayName = "Balloon";
