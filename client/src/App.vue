<template>
  <div
    :class="{
      flex: sideBar(),
      'min-h-screen w-full text-gray-800': sideBar(),
    }"
  >
    <sidebar v-if="sideBar()" />
    <RouterView />
  </div>
</template>

<script>
import sidebar from "./components/sidebar.vue";
export default {
  components: { sidebar },
  methods: {
    sideBar() {
      return this.$route.name !== "Login" && this.$route.name !== "Register";
    },
  },
};
</script>
