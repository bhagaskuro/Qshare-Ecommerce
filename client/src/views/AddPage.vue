<template>
  <main
    class="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0"
  >
    <p class="font-bold text-4xl">ADD NEW ORDER</p>
    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px]">
        <form @submit.prevent="inputOrder">
          <div class="mb-5">
            <label
              for="productName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              placeholder="Smart TV 50 Inci"
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-5">
            <label
              for="price"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="5000"
              v-model="price"
              min="0"
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-5">
            <label
              for="stock"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="5"
              v-model="quantity"
              min="0"
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button
              type="submit"
              class="bg-gray-500 text-white active:bg-gray-800 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "pinia";
import { useOrderStore } from "../stores/orderStore";
export default {
  data() {
    return {
      name: "",
      price: "",
      quantity: "",
    };
  },
  methods: {
    ...mapActions(useOrderStore, ["createOrder"]),
    inputOrder() {
      this.createOrder({
        name: this.name,
        price: this.price,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style></style>
