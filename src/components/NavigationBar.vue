<script setup lang="ts">
import Dropdown from "./Dropdown.vue";
import { removeToken } from "@/utils/handleToken";
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 flex items-center justify-center gap-2 backdrop-blur-2xl bg-transparent px-10 py-4"
  >
    <div class="flex items-center justify-center bg-white rounded">
      <svg
        class="text-orange-400"
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="46"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zm1.838-6.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727"
        />
      </svg>
    </div>
    <div class="flex items-center justify-center grow">
      <ul
        class="flex items-center justify-center gap-5 bg-white px-2.5 py-2 rounded-lg text-[15px]"
      >
        <router-link
          to="/"
          class="px-2.5 py-1 rounded"
          active-class="bg-red-200"
        >
          Dashboard
        </router-link>
        <router-link
          to="/products"
          class="px-2.5 py-1 rounded"
          active-class="bg-red-200"
        >
          Product
        </router-link>
        <router-link
          to="/customers"
          class="px-2.5 py-1 rounded"
          active-class="bg-red-200"
        >
          Customer
        </router-link>
        <!-- <router-link
          to="/transactions"
          class="px-2.5 py-1 rounded"
          active-class="bg-red-200"
        >
          Transaction
        </router-link>
        <router-link
          to="/payments"
          class="px-2.5 py-1 rounded"
          active-class="bg-red-200"
        >
          Payment
        </router-link> -->
      </ul>
    </div>
    <div class="flex items-center justify-center gap-3 rounded-full">
      <div class="p-1 bg-slate-200 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3.23 9.827q0-1.923.767-3.578t2.084-2.857l.675.735q-1.173 1.062-1.85 2.525t-.675 3.175zm16.54 0q0-1.711-.677-3.185q-.676-1.473-1.849-2.534l.675-.716q1.318 1.202 2.084 2.857t.766 3.578zM5 18.769v-1h1.616V9.846q0-1.96 1.24-3.447T11 4.546V4q0-.413.293-.707T12 3t.707.293T13 4v.546q1.904.365 3.144 1.853t1.24 3.447v7.923H19v1zm7 2.616q-.671 0-1.143-.473q-.472-.472-.472-1.143h3.23q0 .672-.472 1.144t-1.143.47M7.616 17.77h8.769V9.846q0-1.823-1.281-3.104T12 5.462t-3.104 1.28t-1.28 3.104z"
          />
        </svg>
      </div>
      <div class="p-1 bg-slate-200 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zm1.838-6.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727"
          />
        </svg>
      </div>
      <Dropdown>
        <template #button>
          <img
            width="40"
            class="rounded-full"
            src="../assets/images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg"
            alt="Profile"
          />
        </template>

        <template #menu>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Settings</a
          >
          <router-link
            to="/login"
            @click="removeToken()"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-t-gray-300"
          >
            Logout
          </router-link>
        </template>
      </Dropdown>
    </div>
  </div>
</template>
