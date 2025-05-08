<script setup>
import { computed, ref } from "vue";
import { getAllTaxes } from "@/service/taxService";
import { createProduct } from "@/service/ProductService";
import { useRouter } from "vue-router";

const formRef = ref(null);

const taxes = ref([]);
const selectedTaxes = ref([]);

const router = useRouter();

const getDataTaxes = async () => {
  try {
    const { data } = await getAllTaxes();
    taxes.value = data;
  } catch (error) {
    console.error("Error fetching taxes:", error);
  }
};

const addTax = (event) => {
  const selectedTaxId = typeof event === "string" ? event : event.target.value;

  const tax = taxes.value.find((t) => t.id === selectedTaxId);

  if (tax && !selectedTaxes.value.some((t) => t.id === selectedTaxId)) {
    selectedTaxes.value.push(tax);
  }
};

const removeTax = (taxId) => {
  selectedTaxes.value = selectedTaxes.value.filter((t) => t.id !== taxId);
};

const handleSubmit = async (event) => {
  const formData = new FormData(formRef.value);
  const values = Object.fromEntries(formData.entries());

  try {
    const response = await createProduct({
      name: values.productName,
      price: values.productPrice,
      availableQuantity: values.productStock,
      taxIds: selectedTaxes.value.map((tax) => tax.id),
    });

    if (response.status === 201) {
      router.push("/product");
    }
  } catch (error) {
    console.error("Error creating product:", error);
  }
};
getDataTaxes();
</script>

<template>
  <div class="p-10 pt-32">
    <h1 class="text-xl font-semibold mb-4">Create New Product</h1>
    <form class="w-1/2" ref="formRef" @submit.prevent="handleSubmit">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Product Information
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Fill out the details of the product you want to list.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-2">
              <label
                for="product-name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Product Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="productName"
                  id="product-name"
                  :placeholder="'Enter product name'"
                  class="block w-full rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="price"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Price ($)</label
              >
              <div class="mt-2">
                <input
                  type="number"
                  name="productPrice"
                  id="product-price"
                  :placeholder="'Enter product price'"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="product-stock"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Stock</label
              >
              <div class="mt-2">
                <input
                  type="number"
                  name="productStock"
                  id="product-stock"
                  :placeholder="'Enter product stock'"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="product-tax"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Add Tax</label
              >
              <div class="mt-2">
                <select
                  id="product-tax"
                  name="productTax"
                  class="block w-full rounded-md bg-white py-1.5 pl-3 pr-8"
                  @change="addTax"
                >
                  <option disabled selected value="">Select Tax</option>
                  <option v-for="tax in taxes" :key="tax.id" :value="tax.id">
                    {{ tax.description }}
                  </option>
                </select>

                <div class="mt-4 space-y-2">
                  <div
                    v-for="tax in selectedTaxes"
                    :key="tax.id"
                    class="flex justify-between items-center bg-gray-100 p-2 rounded"
                  >
                    <span>{{ tax.description }} ({{ tax.percentage }}%)</span>

                    <button
                      @click="removeTax(tax.id)"
                      class="text-red-500 hover:text-red-700 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            @click="router.back()"
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
