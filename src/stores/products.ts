import { defineStore } from "pinia";
import { ref, computed, reactive, toRaw } from "vue";
import { IFilter, IProduct } from "../types/data.types";

let status: any = {
  completed: 1,
  "in-progress": 2,
  pending: 3,
};

export const useProductStore = defineStore("products", () => {
  const productsData = ref<IProduct[]>([]);

  const searchStr = ref("");
  const sortBy = ref(null);

  const filters = reactive<IFilter>({
    tags: [],
    status: [],
  });

  const products = computed(() => {
    let filteredProducts = productsData.value
      .filter((item) => item.name.includes(searchStr.value))
      .filter((item) => {
        if (filters.status.length > 0 && !filters.status.includes(item.status))
          return false;
        if (
          filters.tags.length > 0 &&
          !filters.tags.some((tag) => item.tags.includes(tag))
        )
          return false;

        return true;
      });

    if (sortBy.value) {
      if (sortBy.value === "status") {
        filteredProducts.sort((a, b) => status[a.status] - status[b.status]);
      } else {
        filteredProducts.sort((a, b) =>
          // @ts-ignore
          a[sortBy.value] > b[sortBy.value] ? 1 : -1
        );
      }
    }

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
    sortBy,
    filterSelectAll,
    addProduct,
    deleteProduct,
  };
});
