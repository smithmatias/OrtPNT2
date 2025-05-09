import { createRouter, createWebHistory } from "vue-router";
import ApiData from "../views/ApiData.vue";

// Importá tus vistas acá (de momento dejaremos una por defecto)
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/api-data",
    name: "ApiData",
    component: ApiData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
