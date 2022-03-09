import { MicroCMS, Image } from ".";

export interface CompanyResearch extends MicroCMS {
  name: string;
  formal_name: string;
  comment?: string;
  company_image: Image;
  company_url?: string;
  services?: string;
  point?: string;
  memo?: string;
  urls?: string;
  review?: string;
  rating: number;
}
