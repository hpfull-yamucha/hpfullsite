import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog as BlogType } from "../types";

interface Props {
  blog: BlogType[];
}

export const MobileBlog: React.FC<Props> = ({ blog }) => {
  return (
    <>
      <div className="flex flex-col justify-center w-full">
        {blog.map((blog) => {
          const maxLength = 30;

          if (blog.title.length > maxLength) {
            blog.title = blog.title.substring(0, maxLength) + "...";
          } else {
            blog.title = blog.title;
          }

          return (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <a>
                <div className="text-center m-6 flex flex-col bg-white h-[360px]">
                  <div className="">
                    <Image
                      src={blog.image.url}
                      width={380}
                      height={225}
                      objectFit="cover"
                      alt="blogimg"
                    />
                  </div>

                  <div className="h-full px-4 justify-evenly flex flex-col w-full mt-3">
                    <div>
                      <p className="text-base text-left text-gray-400">
                        {blog.createdAt.substring(0, 10)}
                      </p>
                    </div>
                    <div>
                      <p className="break-words text-lg text-left text-gray-600 font-semibold">
                        {blog.title}
                      </p>
                    </div>

                    <div className="flex justify-end pl-2 items-center mt-2">
                      <div className="mr-2">
                        <Image
                          className="rounded-full"
                          src={blog.writer.image.url}
                          width={30}
                          height={30}
                          alt="blogimg"
                        ></Image>
                      </div>
                      <div className="h-7 text-left text-base text-gray-500">
                        {blog.writer.name}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

MobileBlog.displayName = "MobileBlog";
