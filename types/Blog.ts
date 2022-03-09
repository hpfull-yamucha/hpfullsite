import { MicroCMS, Image, Member, ShortCode, Tag } from ".";

export interface Blog extends MicroCMS {
  title: string;
  body: string;
  shortCode?: ShortCode[];
  image: Image;
  writer: Member;
  tags?: Tag[];
}
