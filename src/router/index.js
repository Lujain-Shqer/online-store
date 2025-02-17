import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import ProductCategories from "@/views/ProductCategories.vue";
import Products from "@/views/ProductsPage.vue";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";


const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/ProductCategories",
    name: "ProductCategories",
    component: ProductCategories,
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
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
