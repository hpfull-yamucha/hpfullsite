import { MicroCMS, Image } from ".";

export interface Service extends MicroCMS {
  title: string;
  body: string;
  image: Image;
  rating: number;
}
