import { VNode } from "vue";

export interface IDropdownItem {
  label: string;
  value: string;
}

export interface ISubItem {
  label: string;
  value: string;
}

export type CheckboxOptions = { label?: string; node?: VNode; value: string }[];
