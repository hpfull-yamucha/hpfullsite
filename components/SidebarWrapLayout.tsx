import React from "react";
import { Blog as BlogType, Member as MemberType, Tag as TagType } from "types";
import { BlogSidebar } from "./BlogSidebar";

interface Props {
  children: JSX.Element;
  latestDataBlog?: BlogType[];
  sortedAndLimitedTag: TagType[];
  popularBlog?: BlogType[];
  writer?: MemberType;
}

export const SidebarWrapLayout: React.FC<Props> = React.memo((props: Props) => {
  const { children, latestDataBlog, sortedAndLimitedTag, popularBlog, writer } =
    props;
  return (
    <div className="flex justify-center mx-auto md:max-w-[1024px] mt-16">
      <div className="flex items-center flex-col md:w-[70%] mt-4">
        {children}
      </div>
      <div className="md:w-[30%] flex w-full flex-col mt-4">
        <BlogSidebar
          popularBlog={popularBlog}
          blog={latestDataBlog}
          sortedAndLimitedTag={sortedAndLimitedTag}
          writer={writer}
        />
      </div>
    </div>
  );
});

SidebarWrapLayout.displayName = "SidebarWrapLayout";
