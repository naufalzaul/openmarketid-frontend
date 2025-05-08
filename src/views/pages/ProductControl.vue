<script setup>
import { ref } from "vue";
import { getAllProducts } from "../../service/ProductService";
import priceFormat from "../../utils/priceFormat";
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

      <div class="overflow-auto mt-5">
        <table class="min-w-full table-auto border border-gray-200">
          <thead
            class="bg-gray-100 text-left text-sm font-semibold text-gray-700"
          >
            <tr>
              <th class="px-4 py-2 border">No</th>
              <th class="px-4 py-2 border">Nama</th>
              <th class="px-4 py-2 border">Harga</th>
              <th class="px-4 py-2 border">Diskon</th>
              <th class="px-4 py-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(product, index) in products"
              :key="index"
              class="border-b text-sm text-gray-800"
            >
              <td class="px-4 py-2 border">{{ index + 1 }}</td>
              <td class="px-4 py-2 border">{{ product.name }}</td>
              <td class="px-4 py-2 border">{{ priceFormat(product.price) }}</td>
              <td class="px-4 py-2 border">
                {{ priceFormat(product.discountedPrice) }}
              </td>
              <td class="px-4 py-2 border">
                <div class="flex gap-2">
                  <button
                    class="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                    @click="handleEdit(product)"
                  >
                    Update
                  </button>
                  <button
                    class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    @click="handleDelete(product.id)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          v-if="products.length === 0"
          class="text-center py-10 text-gray-500"
        >
          Tidak ada data produk.
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
