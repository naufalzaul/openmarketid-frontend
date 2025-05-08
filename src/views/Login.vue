<script setup>
import { ref } from "vue";
import { login } from "../service/authService";
import { createToken } from "../utils/handleToken";
import router from "../router/router";

const email = ref("admin@gmail.com");
const password = ref("admin");
const errorMessage = ref("");
const handleLogin = async () => {
  try {
    const { data } = await login(email.value, password.value);
    createToken(data.token);
    alert("Login berhasil!");
    router.push("/");
  } catch (error) {
    errorMessage.value = error.message;
    console.error(error);
  }
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            placeholder="••••••••"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
        <p v-if="errorMessage" class="text-red-500 text-sm text-center">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </div>
</template>
