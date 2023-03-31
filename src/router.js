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
      component: () => import("./modules/PageOverview.vue"),
    },
    { path: "/team", component: () => import("./modules/PageOverview.vue") },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
        return { left: 0, top: 0 };
      }
    }
  },
});

export default router;
