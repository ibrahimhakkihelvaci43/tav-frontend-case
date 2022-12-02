<template>
  <div class="products-header">
    <div class="products-header__content">
      <div class="products-header__count">{{ productCount }} Products</div>
      <Dropdown v-bind="dropdownProps" @onClickItem="handleClickDropdownItem" />
    </div>
    <div class="products-header__action">
      <Button label="Add new product" @onClick="handleClickButton" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IDropdownItem } from "../utils/types";

interface Props {
  productCount: string;
}

defineProps<Props>();

const emit = defineEmits(["onChangeSortType", "onClickAddNewProduct"]);

const dropdownProps = {
  title: "Sort By: Status",
  items: [
    {
      label: "In Progress",
      value: "in-progress",
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "Pending",
      value: "pending",
    },
  ],
};

const handleClickDropdownItem = (item: IDropdownItem) => {
  emit("onChangeSortType", item);
};

const handleClickButton = () => {
  emit("onClickAddNewProduct");
};
</script>

<style lang="scss">
.products-header {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 13px 16px 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__content {
    display: flex;
    align-items: center;
  }

  &__count {
    font-weight: 600;
    font-size: 24px;
    line-height: 20px;
    color: #fff;
    margin-right: 16px;
  }
}
</style>
