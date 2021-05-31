import { IArticle } from "./IArticle";

export interface IBottle {
  id: number;
  brandName: string;
  name: string;
  articles: IArticle[];
  descriptionText?: string;
}
