import { defineStore } from "pinia";
import { ref, computed, reactive, toRaw } from "vue";
import { IProduct } from "../types/data.types";

export const useProductStore = defineStore("products", () => {
  const productsData = ref<IProduct[]>([]);
  const searchStr = ref("");
  const filters = reactive<{
    tags: Array<string>;
    status: Array<string>;
  }>({
    tags: [],
    status: [],
  });

  const products = computed(() => {
    const selectedFilters = Object.fromEntries(
      Object.entries(filters).filter(([key, value]) => value.length > 0)
    );

    let searchedProducts = productsData.value
      .filter(
        (item) =>
          item.description.includes(searchStr.value) ||
          item.name.includes(searchStr.value)
      )
      .filter((item) => {
        if (filters.status.length > 0 && !filters.status.includes(item.status))
          return false;
        if (
          filters.tags.length > 0 &&
          !filters.tags.some((ai) => item.tags.includes(ai))
        )
          return false;

        return true;
      });
    console.log("searchedProducts", searchedProducts);
    return searchedProducts;
  });

  const addProduct = (product: IProduct) => {
    productsData.value.push(product);
  };

  const deleteProduct = (key: number) => {
    productsData.value = productsData.value.filter((item) => {
      return item.key !== key;
    });
  };

  return { filters, products, searchStr, addProduct, deleteProduct };
});
