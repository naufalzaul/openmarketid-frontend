<script setup>
import { ref } from "vue";
import { getAllTransactions } from "@/service/transactionService";
import { useRouter } from "vue-router";
import decodeToken from "@/utils/decodeToken";

const router = useRouter();
const transactions = ref([]);

decodeToken();
const getData = async () => {
  try {
    const { data } = await getAllTransactions();
    transactions.value = data;
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
    <div class="bg-white p-5 rounded-lg shadow-lg">
      <div class="flex justify-between pb-4 mb-4">
        <h1 class="text-xl font-medium">Daftar Transaction</h1>
        <button
          @click="router.push({ name: 'Transaction Create Form' })"
          class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
        >
          Create
        </button>
      </div>

      <div class="overflow-x-auto">
        <!-- <table
          class="w-full table-fixed text-center border rounded-lg overflow-hidden"
        >
          <thead class="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th class="py-3 px-4">No</th>
              <th class="py-3 px-4">Nama Produk</th>
              <th class="py-3 px-4">Harga Asli</th>
              <th class="py-3 px-4">Pajak</th>
              <th class="py-3 px-4">Total Pajak</th>
              <th class="py-3 px-4">Harga</th>
              <th class="py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody class="text-gray-600">
            <tr
              v-for="(product, index) in products"
              :key="index"
              class="hover:bg-gray-50 transition-colors"
            >
              <td class="py-3 px-4">{{ index + 1 }}</td>
              <td class="py-3 px-4">{{ product.name }}</td>
              <td class="py-3 px-4">{{ priceFormat(product.price) }}</td>
              <td class="py-3 px-4">{{ product.taxDescriptions }}</td>
              <td class="py-3 px-4">{{ product.totalTaxPercentage }}</td>
              <td class="py-3 px-4">
                {{ priceFormat(product.priceAfterTax) }}
              </td>
              <td class="py-3 px-4 space-x-2">
                <button
                  @click="
                    productStore.setProduct(product);
                    router.push({ name: 'Product Update Form' });
                  "
                  class="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded-md shadow-sm"
                >
                  Update
                </button>
                <button
                  @click="handleDelete(product.id)"
                  class="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md shadow-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table> -->

        <div
          v-if="transactions.length === 0"
          class="text-center py-10 text-gray-500"
        >
          Tidak ada data transaction.
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
