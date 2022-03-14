import { createRouter, createWebHashHistory } from "vue-router";

import AboutPage from "../modules/pokemon/pages/AboutPage.vue";
import ListPage from "../modules/pokemon/pages/ListPage.vue";
import PokemonPage from "../modules/pokemon/pages/PokemonPage.vue";

import NoPageFound from "../modules/shared/pages/NoPageFoundPage.vue";

const routes = [
  { path: "/", component: ListPage },
  { path: "/about", component: AboutPage },
  { path: "/id", component: PokemonPage },
  // "/:pathMatch(.*)*" => comodin, cualquier url q no coincida con las
  // rutas definidas, pathMatch es una funcion que viene con
  // vue router
  { path: "/:pathMatch(.*)*", component: NoPageFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
