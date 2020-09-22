import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import MainMap from "../views/Mainmap.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Welcome
    },
    {
      path: "/mainmap",
      component: MainMap
    }
  ]
});

export default router