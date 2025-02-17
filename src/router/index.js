import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import Products from "@/views/ProductsPage.vue";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import ConnectUs from "@/views/ConnectUs.vue";
import AboutUs from "@/views/AboutUs.vue";


const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/Products/:name",
    name: "Products",
    component: Products,
    props: true
  },
  {
    path: "/ProductView",
    name: "ProductView",
    component: ProductView,
  },
  {
    path: "/CartView",
    name: "CartView",
    component: CartView,
  },
  {
    path: "/ConnectUs",
    name: "ConnectUs",
    component: ConnectUs,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
