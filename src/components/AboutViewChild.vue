<template>
      <div v-for="(chef,index) in chefs" :key="index" class="cadre">
        <img :src="chef.image">
        <h2>{{chef.name}}</h2>
        <p>{{chef.p}}</p>
      </div>
      
</template>

<script>
export default {
  name: "AboutViewChild",
  data() {
    return {
      chefs: [
        {
          id:1,
          name: "Farah",
          image: require("../assets/images/pngegg.png"),
          p:"The Michelin-starred chef, a master of Mediterranean cuisine",
        },
        {
          id:2,
          name: "Nizar",
          image: require("@/assets/images/pngegg (1).png"),
          p:"The grill master, a charismatic chef, impresses with his mastery of fire",
        },
        {
          id:3,
          name: "Nour",
          image: require("@/assets/images/pngegg (2).png"),
          p:"A passionate chef specializing in contemporary Asian cuisine",
        },
        {
          id:4,
          name: "Anis",
          image: require("@/assets/images/pngegg (3).png"),
          p:"The virtuoso pastry chef, renowned for bold sweet creations",
        },
      ],
    };
  },
};
</script>
