import React from "react";
import Link from "next/link";
import { Tag as TagType } from "../types";

interface Props {
  sortedAndLimitedTag: TagType[];
}

export const TagList: React.FC<Props> = React.memo((props: Props) => {
  const { sortedAndLimitedTag } = props;
  return (
    <div className="shadow-inner rounded-xl bg-white p-4 mt-4">
      <p className="border-b-2 border-black text-2xl text-black text-left pt-3 mb-6 pb-2">
        タグ一覧
      </p>
      <div className="flex flex-wrap justify-left items-center">
        {sortedAndLimitedTag.map((tag) => {
          return (
            <div className="m-2" key={tag.id}>
              <Link href={`/tags/${tag.id}`}>
                <a className="text-lg text-blue-500 hover:bg-gray-500 rounded">
                  #{tag.name}
                  {`(${tag.count})`}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
});

TagList.displayName = "TagList";
