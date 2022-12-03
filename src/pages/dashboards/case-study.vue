<template>
  <div class="case-study">
    <div class="case-study__title">Our Products</div>
    <ProductsHeader
      :productCount="productCount"
      @onClickAddNewProduct="handleClickAddNewProduct"
    />
    <div class="case-study__products">
      <ProductItem
        v-for="(item, index) in store.products"
        :key="item.key"
        :item="item"
        @onClickDelete="handleDeleteProduct"
      />
    </div>
  </div>
  <Modal title="Add New Product" v-model:visible="isVisibleModal">
    <CreateProductForm @onSubmit="onSubmitForm" @onClickCancel="onHideModal" />
  </Modal>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCounterStore } from "../../stores/products";
import { IProduct } from "../../types/data.types";
const store = useCounterStore();

const isVisibleModal = ref(false);

const handleClickAddNewProduct = () => {
  isVisibleModal.value = true;
};

const productCount = computed(() => store.products.length);

const onHideModal = () => {
  isVisibleModal.value = false;
};

const onSubmitForm = (formData: IProduct) => {
  store.addProduct(formData);
  isVisibleModal.value = false;
};

const handleDeleteProduct = (key: number) => {
  store.deleteProduct(key);
};
</script>

<style lang="scss">
.case-study {
  &__title {
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 24px;
  }

  &__products {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
