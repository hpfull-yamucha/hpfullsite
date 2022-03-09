import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog as BlogType } from "../types";

interface Props {
  blog: BlogType;
  tagsComponent: JSX.Element[];
}

export const MobileBlogId: React.FC<Props> = React.memo((props: Props) => {
  const { blog, tagsComponent } = props;
  return (
    <div className="flex justify-center items-center flex-col w-screen bg-white mt-8">
      <div className="flex flex-col justify-center items-center w-11/12">
        <div className="mt-8 w-full justify-start ml-10">
          <p className="text-sm text-left text-gray-400">
            {blog.createdAt.substring(0, 10)}
          </p>
        </div>
        <div className="w-full text-left my-2 mx-8 pb-2 border-b-2 px-2">
          <p className="break-words text-lg text-black font-bold">
            {blog.title}
          </p>
        </div>

        <div className="flex items-end justify-end w-full px-4 mt-1">
          <Link href={`/members/${blog.writer.id}`} passHref>
            <a className="flex items-center pl-2">
              <Image
                className="rounded-full"
                src={blog.writer.image.url}
                width={28}
                height={28}
                alt="blogwriterimg"
              ></Image>
              <div className="ml-1 h-7 p-1 text-left text-base text-gray-500">
                {blog.writer.name}
              </div>
            </a>
          </Link>
        </div>

        <div className="flex w-full items-center justify-end px-4">
          {tagsComponent}
        </div>

        <div className="mt-3 mx-4">
          <Image
            src={blog.image.url}
            width={320}
            height={200}
            alt="blogimg"
          ></Image>
        </div>

        <div
          className="prose my-10 px-4 w-full break-words"
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </div>
    </div>
  );
});

MobileBlogId.displayName = "MobileBlogId";
