import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./modules/PageHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/history",
      component: () => import("./modules/PageHistory.vue"),
    },
    { path: "/team", component: () => import("./modules/PageTeam.vue") },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
