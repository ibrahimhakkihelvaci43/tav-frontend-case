import { VNode } from "vue";

export interface IListItem {
  label: string;
  value: string;
}

export type CheckboxOptions = {
  id: string;
  label?: string;
  node?: VNode;
  value: string;
}[];
