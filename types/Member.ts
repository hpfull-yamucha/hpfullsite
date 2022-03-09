import { MicroCMS, Image } from ".";

export interface Member extends MicroCMS {
  name: string;
  image: Image;
  position: string;
  twitter: string;
  instagram: string;
  link: string;
  comment: string;
  email: string;
  award?: string;
  memberpageImage?: Image;
  publications?: string;
  affiliate?: string;
  directors?: string;
}
