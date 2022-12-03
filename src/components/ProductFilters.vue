<template>
  <div class="product-filters">
    <Filter v-bind="statusList" v-model:value="store.filters.status" />
    <Filter v-bind="tags" v-model:value="store.filters.tags" />
  </div>
</template>

<script setup lang="ts">
import { createVNode } from "vue";
import StatusTag from "./StatusTag.vue";
import { useProductStore } from "../stores/products";

const store = useProductStore();

const tags = {
  key: "tags",
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
};

const statusList = {
  key: "status",
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
};
</script>

<style lang="scss">
.product-filters {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
</style>
