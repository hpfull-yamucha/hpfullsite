import { MicroCMS, Image } from ".";

export interface Feedback extends MicroCMS {
  title: string;
  image: Image;
  body: string;
}
