<template>
  <HomePage></HomePage>
  <AboutHomePage></AboutHomePage>
  <timeView></timeView>
  <DishesView></DishesView>
  <Information></Information>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage/HomePage.vue";
import AboutHomePage from "@/components/HomePage/AboutHomePage.vue";
import timeView from "@/components/HomePage/timeView.vue";
import DishesView from "@/components/HomePage/DishesView.vue";
import Information from "@/components/HomePage/Information.vue";

export default {
  name: "HomeView",
  components: {
    HomePage,
    AboutHomePage,
    timeView,
    DishesView,
    Information,
  },
};
</script>

<style>
</style>