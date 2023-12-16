import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodMenu from "../views/FoodMenu.vue";
import Reservation from "../views/Reservation.vue";
import admin from "../views/admine/admin.vue";
import diagramm from '@/views/admine/diagramm.vue';
import orderList from '@/views/admine/orderList.vue';


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/FoodMenu",
    name: "FoodMenu",
    component: FoodMenu,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Reservation",
    name: "Reservation",
    component: Reservation,
  },
  {
    path: "/admine/admin",
    name: "admin",
    component: admin,
  },
  {
    path: '/admine/diagramm', 
    component: diagramm, 
    name: 'diagramm'
  },
  {
    path: '/admine/orderList', 
    component: orderList, 
    name: 'orderList'
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
