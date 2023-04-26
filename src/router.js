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
      name: "Home",
      component: HomePage,
    },
    {
      path: "/history",
      name: "History",
      component: () => import("./modules/PageOverview.vue"),
    },
    {
      path: "/team",
      name: "Team",
      component: () => import("./modules/PageOverview.vue"),
      meta: {
        scrollToClimb: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    const climbContainer = document.querySelector("#climb--container");
    const climbCoords = climbContainer.getBoundingClientRect();
    if (to.meta.scrollToClimb)
      return window.scrollTo(climbCoords.left, climbCoords.top);

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
