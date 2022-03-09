import React from "react";
import { Blog as BlogType } from "../types";
import Link from "next/link";
import Image from "next/image";
import { Member as MemberType } from "../types";
import { LatestBlogList } from "./LatestBlogList";
import { SnsIcons } from "./SnsIcons";
import { TagList } from "./TagList";
import { Tag as TagType } from "types";
import { PopularBlogList } from "components/PopularBlogList";

interface Props {
  blog: BlogType[];
  writer: MemberType;
  sortedAndLimitedTag: TagType[];
  popularBlog: BlogType[];
}

export const BlogIdSidebar: React.FC<Props> = (props: Props) => {
  const { blog, writer, sortedAndLimitedTag, popularBlog } = props;
  return (
    <div className="flex flex-col mt-4">
      <div className="bg-white text-center shadow-xl p-4 rounded-xl w-full">
        <div className="h-80 flex flex-col justify-center">
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
      <PopularBlogList popularBlog={popularBlog} />
      <TagList sortedAndLimitedTag={sortedAndLimitedTag} />
      <LatestBlogList blog={blog} />
    </div>
  );
};

BlogIdSidebar.displayName = "BlogIdSidebar";
