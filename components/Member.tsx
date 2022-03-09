import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SnsIcons } from "./SnsIcons";
import { Member as MemberType } from "../types";

interface Props {
  member: MemberType[];
}

export const Member: React.FC<Props> = (props: Props) => {
  const { member } = props;
  return (
    <>
      <p className="text-3xl mt-12 mb-2">構成員の皆さん</p>
      <div className="flex w-full justify-center flex-wrap content-between lg:w-2/3 xl:w-1/2">
        {member.map((member) => {
          return (
            <div
              key={member.id}
              className="bg-white text-center shadow-xl p-8 w-80 rounded-xl m-6"
            >
              <Link href={`/members/${member.id}`} passHref>
                <div>
                  <div className="mt-4">
                    <p className="font-bold">{member.position}</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Image
                      className="rounded-full"
                      src={member.image.url}
                      width={60}
                      height={60}
                      alt="Avatar"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="font-bold">Name</p>
                    <p className="text-xs mt-2 text-gray-600">{member.name}</p>
                    <p className="font-bold mt-3">E-mail</p>
                    <p className="text-xs mt-2 text-gray-600">{member.email}</p>
                    <p className="font-bold mt-3">経歴</p>
                    <p className="text-xs mt-2 text-gray-600">{member.award}</p>
                  </div>
                </div>
              </Link>
              <SnsIcons member={member} />
            </div>
          );
        })}
      </div>
    </>
  );
};

Member.displayName = "Member";
