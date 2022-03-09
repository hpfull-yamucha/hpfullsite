import React from "react";
import { Blog as BlogType, Tag as TagType, Member as MemberType } from "types";
import { SearchInput } from "components/SearchInput";
import { LatestBlogList } from "components/LatestBlogList";
import { TagList } from "components/TagList";
import { PopularBlogList } from "components/PopularBlogList";
import { SidebarProfileCard } from "./SidebarProfileCard";

interface Props {
  popularBlog: BlogType[];
  blog?: BlogType[];
  sortedAndLimitedTag: TagType[];
  writer?: MemberType;
}

export const BlogSidebar: React.FC<Props> = React.memo((props: Props) => {
  const { blog, sortedAndLimitedTag, popularBlog, writer } = props;
  return (
    <>
      <SearchInput />
      {writer ? <SidebarProfileCard writer={writer} /> : <></>}
      <TagList sortedAndLimitedTag={sortedAndLimitedTag} />
      {blog ? <LatestBlogList blog={blog} /> : <></>}
      {popularBlog ? <PopularBlogList popularBlog={popularBlog} /> : <></>}
    </>
  );
});

BlogSidebar.displayName = "BlogSidebar";
