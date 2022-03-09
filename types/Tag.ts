import { MicroCMS } from ".";

export interface Tag extends MicroCMS {
  name: string;
  count?: number;
}
