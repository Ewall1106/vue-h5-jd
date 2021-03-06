import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Home",
    component: () => import("@/views/home"),
    meta: {
      title: "้ฆ้กต",
      showTab: true,
    },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/user"),
    meta: {
      title: "ๆ็",
      showTab: true,
    },
  },
];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
