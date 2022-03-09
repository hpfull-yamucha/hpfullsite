import React from "react";
import Link from "next/link";

interface Props {
  maxPageNumber?: number;
  currentPageNumber: number;
  whatPage?: string;
  tagId?: string;
}

export const Pagination: React.FC<Props> = React.memo((props) => {
  const { maxPageNumber, currentPageNumber, whatPage, tagId } = props;
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  const previousLinkHref = tagId
    ? `/${whatPage}/${tagId}/page/${prevPage}`
    : `/${whatPage}/page/${prevPage}`;
  const nextLinkHref = tagId
    ? `/${whatPage}/${tagId}/page/${nextPage}`
    : `/${whatPage}/page/${nextPage}`;

  return (
    <div className="flex px-3 my-12">
      {currentPageNumber !== 1 && (
        <Link href={previousLinkHref}>
          <a className="text-lg">&lt; Previous</a>
        </Link>
      )}
      {currentPageNumber !== maxPageNumber && (
        <Link href={nextLinkHref}>
          <a className="ml-4 text-lg">Next &gt;</a>
        </Link>
      )}
    </div>
  );
});

Pagination.displayName = "Pagination";
