<template>
  <div class="case-study">
    <div class="case-study__title">Our Products</div>
    <ProductsHeader
      :productCount="productCount"
      @onClickAddNewProduct="openModal"
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
    <CreateProductForm @onSubmit="onSubmitForm" @onClickCancel="hideModal" />
  </Modal>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useProductStore } from "../../stores/products";
import { IProduct } from "../../types/data.types";
const store = useProductStore();

const isVisibleModal = ref(false);

const productCount = computed(() => store.products.length);

const onSubmitForm = (formData: IProduct) => {
  store.addProduct(formData);
  hideModal();
};

const handleDeleteProduct = (key: number) => {
  store.deleteProduct(key);
};

const openModal = () => {
  isVisibleModal.value = true;
};

const hideModal = () => {
  isVisibleModal.value = false;
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
