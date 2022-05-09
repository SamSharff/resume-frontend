import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import LogOut from "../views/LogOut.vue";
import IndexResume from "../views/IndexResume.vue";
import NewResume from "../views/NewResume.vue";
import ShowResume from "../views/ShowResume.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/SignUp",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/LogIn",
    name: "login",
    component: LogIn,
  },
  {
    path: "/LogOut",
    name: "logout",
    component: LogOut,
  },
  {
    path: "/Resumes",
    name: "resume-index",
    component: IndexResume,
  },
  {
    path: "/resumes/new",
    name: "resumes-new",
    component: NewResume,
  },
  {
    path: "/resumes/:id",
    name: "resumes-show",
    component: ShowResume,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
