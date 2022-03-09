import React from "react";
import { Blog as BlogType } from "../types";
import Link from "next/link";
import Image from "next/image";

interface Props {
  blog: BlogType[];
}

export const LatestBlogListWithImage: React.FC<Props> = React.memo(
  (props: Props) => {
    const { blog } = props;
    return (
      <div className="shadow-inner rounded-xl bg-white p-4 mt-8 w-screen">
        <p className="border-b-2 border-black text-2xl text-black text-left pt-3 mb-6 pb-2">
          最新記事
        </p>
        <div>
          {blog.map((blog) => {
            const maxLength = 26;
            if (blog.title.length > maxLength) {
              blog.title = blog.title.substring(0, maxLength) + "...";
            } else {
              blog.title = blog.title;
            }
            return (
              <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
                <a>
                  <div className="border-b-2 border-gray-300 mb-4 pb-2 flex">
                    <div className="w-1/4 mr-2">
                      <Image
                        src={blog.image.url}
                        width={70}
                        height={70}
                        objectFit="cover"
                        alt="popularblogimg"
                      />
                    </div>
                    <div className="w-3/4">
                      <p className="text-base text-gray-400">
                        {blog.createdAt.substring(0, 10)}
                      </p>
                      <p className="text-base">{blog.title}</p>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
);

LatestBlogListWithImage.displayName = "LatestBlogListWithImage";
