<template>
  <navBar></navBar>
  <router-view />
  <contact></contact>
</template>
<script>
import navBar from "@/components/navBar.vue";
import contact from "@/components/footer.vue";

export default {
  name: "app",
  components: {
    navBar,
    contact,
  },
  data() {
    return {
      
    }
  },
  methods: {
  },
  computed: {
},
};
</script>

