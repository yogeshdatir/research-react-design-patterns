export interface ICard {
  title: string;
  price: IPrice;
  catchLine: string;
  features: string[];
  topics: string[];
}

export interface IPrice {
  value: number;
  currency: string;
}
