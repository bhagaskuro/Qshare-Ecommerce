<template>
  <main
    class="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0"
  >
    <div
      class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
      v-if="orders?.length <= 0"
    >
      <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <div class="max-w-md">
              <p class="text-5xl font-bold">Oops ..</p>
              <p class="py-6">
                Looks like you haven't got any orders yet. <br />
                You can add orders in add order page, or click button below
              </p>
              <button
                @click.prevent="$router.push('/add')"
                class="bg-gray-500 text-white active:bg-gray-800 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="font-bold text-4xl pb-5">DASHBOARD</p>
      <table class="table-auto w-full">
        <thead class="border-b">
          <tr class="bg-gray-100">
            <th class="text-left p-4 font-medium">Name</th>
            <th class="text-left p-4 font-medium">Price</th>
            <th class="p-4 font-medium text-center">Quantity</th>
            <th class="p-4 font-medium text-center">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, i) in orders"
            :key="i"
            class="border-b hover:bg-gray-50"
          >
            <td class="p-4">{{ order.name }}</td>
            <td class="p-4">{{ currency(order.price) }}</td>
            <td class="p-4 text-center">{{ order.quantity }}</td>
            <td class="p-4 text-center">
              {{ currency(order.quantity * order.price) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useOrderStore } from "../stores/orderStore";

export default {
  name: "DashboardPage",
  data() {
    return {};
  },

  methods: {
    ...mapActions(useOrderStore, ["fetchOrder"]),
  },
  created() {
    this.fetchOrder();
  },
  computed: {
    ...mapWritableState(useOrderStore, ["orders"]),
    currency() {
      return (price) => {
        return price?.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        });
      };
    },
  },
};
</script>

<style></style>
