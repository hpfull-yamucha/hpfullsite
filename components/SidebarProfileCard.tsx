import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SnsIcons } from "./SnsIcons";
import { Member as MemberType } from "types";

interface Props {
  writer: MemberType;
}

export const SidebarProfileCard: React.FC<Props> = React.memo(
  (props: Props) => {
    const { writer } = props;
    return (
      <div className="bg-white text-center shadow-xl p-4 rounded-xl w-full">
        <div className="h-64 flex flex-col justify-center">
          <Link href={`/members/${writer.id}`} passHref>
            <a>
              <div className="flex">
                <div className="w-1/3 lg:w-28 flex justify-center mr-2">
                  <Image
                    className="rounded-xl"
                    src={writer.image.url}
                    width={100}
                    height={100}
                    alt="Avatar"
                  />
                </div>
                <div className="mt-1">
                  <p className="text-lg font-bold text-left">{writer.name}</p>
                  <p className="text-xs mt-2 text-gray-600 text-left">
                    {writer.position}
                  </p>
                  <p className="text-xs mt-2 text-gray-600 text-left">
                    {writer.email}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-left mt-2 text-gray-600">{writer.award}</p>
              </div>
            </a>
          </Link>
          <SnsIcons member={writer} />
        </div>
      </div>
    );
  }
);

SidebarProfileCard.displayName = "SidebarProfileCard";
