import { defineStore } from "pinia";
import { ref, computed, reactive, toRaw } from "vue";
import { IFilter, IProduct } from "../types/data.types";

export const useProductStore = defineStore("products", () => {
  const productsData = ref<IProduct[]>([]);

  const searchStr = ref("");

  const filters = reactive<IFilter>({
    tags: [],
    status: [],
  });

  const products = computed(() => {
    let filteredProducts = productsData.value
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

    return filteredProducts;
  });

  const addProduct = (product: IProduct) => {
    productsData.value.push(product);
  };

  const deleteProduct = (key: number) => {
    productsData.value = productsData.value.filter((item) => {
      return item.key !== key;
    });
  };

  const filterSelectAll = (key: string, options: Array<string>) => {
    filters[key as keyof IFilter] = options;
  };

  return {
    filters,
    products,
    searchStr,
    filterSelectAll,
    addProduct,
    deleteProduct,
  };
});
