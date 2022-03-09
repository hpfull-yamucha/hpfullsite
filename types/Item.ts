import { MicroCMS, Image } from ".";

export interface Item extends MicroCMS {
  title: string;
  link: string;
  image: Image;
  price: string;
}
