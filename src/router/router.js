import Dashboard from "@/views/pages/Dashboard.vue"
import Login from "@/views/pages/Login.vue"
import { getToken } from "@/utils/handleToken";
import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import Product from "@/views/pages/Product.vue";
import ProductControl from "@/views/pages/ProductControl.vue";
import ProductCreateForm from "@/components/ProductCreateForm.vue";
import ProductUpdateForm from "@/components/ProductUpdateForm.vue";
import CustomerControl from "@/views/pages/CustomerControl.vue";
import CustomerCreateForm from "@/components/CustomerCreateForm.vue";
import CustomerUpdateForm from "@/components/CustomerUpdateForm.vue";

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
    path: '/products',
    name: "Product",
    component: ProductControl,
    meta: { requiresAuth: true }
  },
  {
    path: '/products/create',
    name: "Product Create Form",
    component: ProductCreateForm,
    meta: { requiresAuth: true },
  },
  {
    path: '/products/update',
    name: "Product Update Form",
    component: ProductUpdateForm,
    meta: { requiresAuth: true },
  },
  {
    path: '/customers',
    name: "Customer",
    component: CustomerControl,
    meta: { requiresAuth: true },
  },
  {
    path: '/customers/create',
    name: "Customer Create Form",
    component: CustomerCreateForm,
    meta: { requiresAuth: true },
  },
  {
    path: '/customers/update',
    name: "Customer Update Form",
    component: CustomerUpdateForm,
    meta: { requiresAuth: true },
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