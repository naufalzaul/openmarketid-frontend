<script setup>
import Footer from "./components/Footer.vue";
import HelloWorld from "./components/HelloWorld.vue";
import NavigationBar from "./components/NavigationBar.vue";
import Dashboard from "./views/pages/Dashboard.vue";
import Product from "./views/pages/Product.vue";
import Transaction from "./views/pages/Transaction.vue";
</script>

<template>
  <body class="relative min-h-screen">
    <NavigationBar />
    <!-- <Product /> -->
    <Transaction />
    <Footer />
  </body>
</template>

<style scoped>
body {
  background-color: rgba(226, 232, 240, 1);
}
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
