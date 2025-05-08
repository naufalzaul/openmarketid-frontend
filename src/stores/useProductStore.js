import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore(
  'product',
  () => {
    const product = ref(null);

    const setProduct = (data) => {
      product.value = data;
    };

    const clearProduct = () => {
      product.value = null;
    };

    return { product, setProduct, clearProduct };
  },
  {
    persist: true,
  }
);
