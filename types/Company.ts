import { MicroCMS, Member } from ".";

export interface Company extends MicroCMS {
  name: string;
  address: string;
  capital: string;
  accountingDate: string;
  numberOfEmployees: string;
  directors: Member[];
}
