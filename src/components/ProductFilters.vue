<template>
  <div class="product-filters">
    <Filter
      v-for="(item, index) in filters"
      v-bind="item"
      v-model:value="store.filters[item.filterKey as keyof IFilter]"
      @onClickSelectAll="handleClickSelectAll"
    />
  </div>
</template>

<script setup lang="ts">
import { createVNode } from "vue";
import StatusTag from "./StatusTag.vue";
import { useProductStore } from "../stores/products";
import { IFilter } from "../types/data.types";

const store = useProductStore();

const filters = [
  {
    filterKey: "status",
    title: "Status",
    options: [
      {
        id: "filter__in-progress",
        node: createVNode(StatusTag, { type: "in-progress" }),
        value: "in-progress",
      },
      {
        id: "filter__completed",
        node: createVNode(StatusTag, { type: "completed" }),
        value: "completed",
      },
      {
        id: "filter__pending",
        node: createVNode(StatusTag, { type: "pending" }),
        value: "pending",
      },
    ],
  },
  {
    filterKey: "tags",
    title: "Tags",
    options: [
      {
        id: "filter__frontent",
        label: "Frontend",
        value: "frontend",
      },
      {
        id: "filter__ux",
        label: "UX",
        value: "ux",
      },
      {
        id: "filter__ui",
        label: "UI",
        value: "ui",
      },
      {
        id: "filter__bug",
        label: "Bug",
        value: "bug",
      },
    ],
  },
];

const handleClickSelectAll = (key: string) => {
  const optionList = filters
    .find((item) => item.filterKey === key)
    ?.options.map((item) => item.value);

  store.filterSelectAll(key, optionList as Array<string>);
};
</script>

<style lang="scss">
.product-filters {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
</style>
