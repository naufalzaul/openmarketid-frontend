<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="relative inline-block text-left">
    <div @click="toggleDropdown" class="cursor-pointer">
      <slot name="button" />
    </div>

    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
    >
      <slot name="menu">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >Default Item</a
        >
      </slot>
    </div>
  </div>
</template>
