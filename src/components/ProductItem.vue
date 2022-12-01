<template>
  <div class="product-item">
    <div class="product-item__content">
      <div class="product-item__product-properties">
        <div class="product-item__title">
          {{ name }}
        </div>
        <StatusTag :type="status" />
        <div class="product-item__tags">
          <div
            v-for="(item, index) in tags"
            :key="index"
            class="product-item__tags-item"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="product-item__description">
        {{ description }}
      </div>
    </div>
    <Button label="Delete" type="secondary" @onClick="handleClickDelete" />
  </div>
</template>

<script setup lang="ts">
import { IProduct } from "../utils/types";

const props =
  defineProps<{
    item: IProduct;
  }>();

const emit = defineEmits(["onClickDelete"]);

const { name, description, tags, status } = props.item;

const handleClickDelete = () => {
  emit("onClickDelete");
};
</script>

<style lang="scss">
.product-item {
  padding: 22px 16px 22px 22px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__content {
    max-width: 842px;
  }

  &__product-properties {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 20px;
    color: #ffffff;
    margin-right: 15px;
  }

  &__tags {
    display: flex;
    align-items: center;
    margin-left: 20px;

    &-item {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 4px;
      padding: 2px 8px;
      margin-right: 8px;
      font-weight: 400;
      line-height: 18px;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.65);
  }
}
</style>
