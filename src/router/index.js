import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [{
    path: '/add/payment:category',
    name: "addPayment",
    component: () => import('../components/AddPaymentForm.vue')
  }, {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard/:page",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/notfound",
    name: "notfound",
    component: NotFound,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const userAuth = true;

router.beforeEach((to, from, next) => {
  if (to.name !== "notfound" && !userAuth) {
    next({
      name: "notfound",
    });
  } else {
    next();
  }
});

const getTitleByRoutes = (routeName) => {
  return {
    dashboard: "Cтраница трат",
    about: "Страница о сервисе",
    notfound: "Страница не найдена",
  } [routeName];
};

router.afterEach((to) => {
  document.title = getTitleByRoutes(to.name);
});

export default router;