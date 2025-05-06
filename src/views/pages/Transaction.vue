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
      <div class="font-medium text-xl border-b pb-4 mb-5">
        <h1>Ini untuk list transaksi</h1>
      </div>

      <table
        class="w-full table-fixed text-sm text-center border rounded-lg overflow-hidden"
      >
        <thead class="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th class="py-3 px-4">Customer</th>
            <th class="py-3 px-4">Total Product</th>
            <th class="py-3 px-4">Total Amount</th>
            <th class="py-3 px-4">Status</th>
            <th class="py-3 px-4">Date</th>
            <th class="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody class="text-gray-600">
          <tr class="hover:bg-gray-50 transition-colors">
            <th class="py-3 px-4">Lorem ipsum dolor sit amet.</th>
            <td class="py-3 px-4">1961</td>
            <td class="py-3 px-4">196134245</td>
            <td class="py-3 px-4">
              <span
                class="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full"
              >
                PAID
              </span>
            </td>
            <td class="py-3 px-4">Lorem ipsum dolor</td>
            <td class="py-3 px-4">
              <button
                type="button"
                class="text-white bg-blue-600 hover:bg-blue-700 text-sm px-3 py-1 rounded-md shadow-sm"
              >
                Lihat Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
