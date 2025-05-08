<script setup>
import { useRoute } from "vue-router";
import Footer from "@/components/Footer.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { computed } from "vue";

const route = useRoute();
const showLayout = computed(() => !route.meta.hideLayout);
</script>

<template>
  <body class="relative min-h-screen">
    <NavigationBar v-if="showLayout" />
    <router-view />
    <Footer v-if="showLayout" />
  </body>
</template>

<style scoped>
body {
  background-color: rgba(226, 232, 240, 1);
}
</style>
