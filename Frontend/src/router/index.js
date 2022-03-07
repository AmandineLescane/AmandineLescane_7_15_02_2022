import { createRouter, createWebHistory } from "vue-router";
import signin from "../views/signin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signin",
      component: () => import ('../views/signin.vue')
    },
    {
      path: "/",
      name: "login",
      component: () => import ('../views/login.vue')
    },
    {
      path: "/feed",
      name: "feed",
      component: () => import('../views/feed.vue'),
    },
    {
      path: "/user",
      name: "user",
      component: () => import('../views/user.vue'),
    },
  ],
});

export default router;
