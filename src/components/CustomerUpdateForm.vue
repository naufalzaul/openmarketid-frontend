<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { updateCustomer } from "../service/customerService";
import { useCustomerStore } from "@/stores/useCustomerStore";

const router = useRouter();
const formRef = ref(null);
const customerStore = useCustomerStore();
const { customer } = customerStore;

const handleSubmit = async () => {
  const formData = new FormData(formRef.value);
  const values = Object.fromEntries(formData.entries());
  console.log();

  try {
    const response = await updateCustomer({ ...values, id: customer.id });
    console.log(response);

    if (response.status === 200) {
      router.push("/customers");
    }
  } catch (error) {
    console.error("Error creating customer:", error);
  }
};
</script>
<template>
  <div class="p-10 pt-32">
    <form class="w-1/2" ref="formRef" @submit.prevent="handleSubmit">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            User Information
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Fill out the user's information.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="name" class="block text-sm font-medium text-gray-900"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                v-model="customer.name"
                :placeholder="!customer.name ? 'Enter full name' : ''"
                class="mt-2 block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm sm:text-sm"
              />
            </div>

            <div class="sm:col-span-3">
              <label for="email" class="block text-sm font-medium text-gray-900"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                v-model="customer.email"
                :placeholder="!customer.email ? 'Enter email' : ''"
                class="mt-2 block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm sm:text-sm"
              />
            </div>

            <div class="sm:col-span-3">
              <label
                for="birth-date"
                class="block text-sm font-medium text-gray-900"
                >Birth Date</label
              >
              <input
                type="date"
                id="birth-date"
                name="birthDate"
                v-model="customer.birthdate"
                :placeholder="!customer.birthdate ? 'Enter birth date' : ''"
                class="mt-2 block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm sm:text-sm"
              />
            </div>

            <div class="sm:col-span-3">
              <label
                for="birth-place"
                class="block text-sm font-medium text-gray-900"
                >Birth Place</label
              >
              <input
                type="text"
                id="birth-place"
                name="birthPlace"
                v-model="customer.birthplace"
                :placeholder="!customer.birthplace ? 'Enter birth place' : ''"
                class="mt-2 block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            @click="router.back()"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
