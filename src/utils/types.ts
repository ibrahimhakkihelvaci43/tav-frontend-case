export interface IDropdownItem {
  label: string;
  value: string;
}

export type ProductStatus = "completed" | "pending" | "in-progress";

export interface IProduct {
  name: string;
  description: string;
  status: ProductStatus;
  tags: Array<string>;
}
