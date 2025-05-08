<script setup>
import { ref } from "vue";
import { getAllProducts } from "../service/productService";
import priceFormat from "../utils/priceFormat";
const products = ref([]);

const getData = async () => {
  try {
    const { data } = await getAllProducts();
    products.value = data;
    console.log(data);
  } catch (error) {
    errorMessage.value = error.message;
    console.error(error);
  }
};

getData();
</script>

<template>
  <div class="min-h-screen header pt-40 p-10">
    <h1 class="text-5xl font-medium">Lorem ipsum dolor sit amet.</h1>
    <p class="text-lg mt-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
      provident?
    </p>
  </div>
  <div class="min-h-screen p-10">
    <div class="bg-white p-5 mb-20 rounded-lg shadow-lg">
      <div class="font-medium text-xl border-b pb-4">
        <h1>Ini untuk list produk</h1>
      </div>
      <div class="grid grid-cols-4 gap-5 py-4">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="shadow-sm"
        >
          <div>
            <img
              class="object-cover"
              src="@/assets/images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg"
              alt="Product Image"
            />
          </div>
          <div class="p-4">
            <p>{{ product.name }}</p>
            <div class="flex items-center justify-between mt-2">
              <span>{{ priceFormat(product.price) }}</span>
              <span>{{ product.discountedPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: #2a7b9b;
  background: linear-gradient(
    177deg,
    rgba(42, 123, 155, 1) 0%,
    rgba(226, 232, 240, 1) 64%
  );
}
</style>
