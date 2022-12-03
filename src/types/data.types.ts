export interface IProduct {
  key: number;
  name: string;
  description: string;
  status: string;
  tags: Array<string>;
}

export interface IFilter {
  tags: Array<string>;
  status: Array<string>;
}
