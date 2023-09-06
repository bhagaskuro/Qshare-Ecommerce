import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "../views/DashboardPage.vue";
import AddPage from "../views/AddPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: DashboardPage,
    },
    {
      path: "/add",
      name: "Add",
      component: AddPage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.access_token;
  if ((to.name === "Dashboard" || to.name === "Add") && !isLogin) {
    next({ name: "Login" });
  } else if ((to.name === "Login" || to.name === "Register") && isLogin) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
