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
import { IDropdownItem } from "../types/components.types";

interface Props {
  productCount: number;
}

defineProps<Props>();

const emit = defineEmits(["onChangeSortType", "onClickAddNewProduct"]);

const dropdownProps = {
  placeholder: "Sort By: ",
  items: [
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Description",
      value: "description",
    },
    {
      label: "Status",
      value: "status",
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
  background: #ffffff0d;
  border: 1px solid #ffffff0d;
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
