import {createRouter, createWebHistory} from "vue-router";
import AuthorizationView from "@/views/AuthorizationView"

const routes = [
  {
    path: "/",
    name: "authorization",
    component: AuthorizationView,
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("../views/RegistrationView"),
  },
  {
    path: "/authorization",
    name: "authorization",
    component: () => import("../views/AuthorizationView"),
  },
  {
    path: "/movies",
    name: "movies",
    component: () => import("../views/MoviesView"),
  },
  {
    path: "/audios",
    name: "audios",
    component: () => import("../views/AudiosView"),
  },
  {
    path: "/movie/:id",
    name: "chosenMovie",
    component: () => import("../views/ChosenMovieView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
