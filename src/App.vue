<template>
  <LoadingPage :isLoading="isLoading" v-if="isLoading" />
  <router-view />
</template>

<script>
import LoadingPage from "./components/LoadingPage/LoadingPage.vue";
// import random from "lodash.random";

export default {
  components: {LoadingPage},
  data() {
    return {
      isLoading: true
    };
  },

  mounted() {
    const delay = 1500;
    setTimeout(() => {
      this.isLoading = false;
    }, delay);
  }
}
</script>


