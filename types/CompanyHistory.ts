import { MicroCMS } from ".";

export interface CompanyHistory extends MicroCMS {
  year: string;
  month: number;
  context: string;
}
