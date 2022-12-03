import { VNode } from "vue";

export interface IDropdownItem {
  label: string;
  value: string;
}

export interface ISubItem {
  label: string;
  value: string;
}

export type CheckboxOptions = {
  id: string;
  label?: string;
  node?: VNode;
  value: string;
}[];
