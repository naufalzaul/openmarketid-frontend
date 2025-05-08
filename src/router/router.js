import Dashboard from "@/views/pages/Dashboard.vue"
import Login from "@/views/pages/Login.vue"
import { getToken } from "@/utils/handleToken";
import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import Product from "@/views/pages/Product.vue";
import ProductControl from "../views/pages/ProductControl.vue";

const routes = [
  {
    path: '/login',
    name: "Login",
    component: Login,
    meta: { hideLayout: true }
  },
  {
    path: '/',
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/product',
    name: "Product",
    component: ProductControl,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!getToken();
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});


export default router;