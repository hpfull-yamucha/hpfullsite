import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog as BlogType } from "../types";

interface Props {
  blog: BlogType[];
}

export const Blog: React.FC<Props> = ({ blog }) => {
  return (
    <>
      <div className="flex flex-col justify-center w-full">
        {blog.map((blog) => {
          const maxLength = 40;
          const maxBodyLength = 68;
          var blogBody = blog.body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
          if (blog.title.length > maxLength) {
            blog.title = blog.title.substring(0, maxLength) + "...";
          } else {
            blog.title = blog.title;
          }
          if (blogBody.length > maxBodyLength) {
            blogBody = blogBody.substring(0, maxBodyLength) + "...";
          } else {
            blogBody = blogBody;
          }
          return (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <a>
                <div className="text-center m-4 flex rounded-3xl">
                  <Image
                    className="rounded-3xl"
                    src={blog.image.url}
                    width={256}
                    height={256}
                    objectFit="cover"
                    alt="blogimg"
                  />

                  <div className="ml-3 px-4 justify-around flex flex-col w-full">
                    <div>
                      <p className="text-sm text-left text-gray-400">
                        {blog.createdAt.substring(0, 10)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xl text-left break-words">
                        {blog.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-left text-gray-500">{blogBody}</p>
                    </div>

                    <div className="flex justify-end pl-2 mt-1 items-center">
                      <div className="mr-2 flex items-center">
                        <Image
                          className="rounded-full"
                          src={blog.writer.image.url}
                          width={36}
                          height={36}
                          alt="blogimg"
                        ></Image>
                      </div>
                      <div className="mr-2">
                        <p className="text-base text-right text-gray-500">
                          {blog.writer.name}
                        </p>
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

Blog.displayName = "Blog";
