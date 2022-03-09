import React from "react";

interface Props {
  rating: number;
}
export const Rating: React.FC<Props> = React.memo((props: Props) => {
  const { rating } = props;
  return (
    <div className="h-full relative inline-block">
      <div className="text-2xl items-center">☆☆☆☆☆</div>
      <div
        style={{ width: `${rating}%` }}
        className="text-2xl items-center text-yellow-300 absolute top-0 overflow-hidden whitespace-nowrap"
      >
        ★★★★★
      </div>
    </div>
  );
});

Rating.displayName = "Rating";
