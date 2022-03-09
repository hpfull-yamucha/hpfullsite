import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Item as ItemType } from "../types";

interface Props {
  items: ItemType[];
}

export const Item: React.FC<Props> = React.memo((props: Props) => {
  const { items } = props;
  const itemsComponent = useMemo(
    () =>
      items.map((item) => {
        return (
          <div key={item.id} className="justify-center my-10 mx-6">
            <Link key={item.id} href={item.link}>
              <a target="_blank" rel="noreferrer">
                <div className="text-center justify-center m-6 h-52 rounded-3xl">
                  <div className="mb-4">
                    <Image
                      className="rounded-3xl justify-items-center"
                      src={item.image.url}
                      width={208}
                      height={208}
                      objectFit="cover"
                      alt="itemimg"
                    />
                  </div>
                  <div className="px-4 w-56">
                    <p className="text-sm text-left font-bold mb-1">
                      {item.title}
                    </p>
                    <p className="text-left font-light text-gray-500">
                      ¥{item.price}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        );
      }),
    [items]
  );
  return (
    <>
      <p className="text-3xl my-8 text-black">ショップアイテム一覧</p>
      <p>※クリックで別サイトへ飛びます</p>
      <div className="flex w-10/12 justify-center flex-wrap">
        {itemsComponent}
      </div>
    </>
  );
});

Item.displayName = "Item";
