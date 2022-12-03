import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";
import { IProduct } from "../types/data.types";

export const useCounterStore = defineStore("products", () => {
  const productsData = ref<IProduct[]>([]);

  const products = computed(() => {
    return productsData.value;
  });

  const addProduct = (product: IProduct) => {
    productsData.value.push(product);
  };

  const deleteProduct = (key: number) => {
    productsData.value = productsData.value.filter((item) => {
      return item.key !== key;
    });
  };

  return { products, addProduct, deleteProduct };
});
