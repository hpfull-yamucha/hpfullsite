import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog as BlogType } from "../types";

interface Props {
  blog: BlogType;
  tagsComponent: JSX.Element[];
}

export const BlogId: React.FC<Props> = React.memo((props: Props) => {
  const { blog, tagsComponent } = props;
  return (
    <div className="flex justify-center items-center w-[95%] flex-col md:shadow-inner rounded-xl md:bg-white">
      <div className="flex flex-col justify-center items-center w-11/12">
        <div className="mt-8 w-full justify-start ml-10">
          <p className="text-sm text-left text-gray-400">
            {blog.createdAt.substring(0, 10)}
          </p>
        </div>
        <div className="w-full text-left my-2 ml-8 pb-2 border-b-2 px-2">
          <p className="text-xl md:text-2xl text-black font-bold break-words">
            {blog.title}
          </p>
        </div>

        <div className="flex items-center justify-between w-full px-4 mt-1">
          <Link href={`/members/${blog.writer.id}`} passHref>
            <a className="flex items-center pl-2">
              <Image
                className="rounded-full"
                src={blog.writer.image.url}
                width={32}
                height={32}
                alt="blogwriterimg"
              ></Image>
              <div className="ml-1 h-7 p-1 text-left text-base text-gray-500">
                {blog.writer.name}
              </div>
            </a>
          </Link>
          <div className="flex pl-2 items-center justify-end">
            {tagsComponent}
          </div>
        </div>

        <div className="mt-6 mx-4 ">
          <Image
            src={blog.image.url}
            width={600}
            height={370}
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

BlogId.displayName = "BlogIdComponent";
