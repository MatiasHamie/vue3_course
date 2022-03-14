import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/modules/pokemon/pages/ListPage"),
  },
  {
    path: "/about",
    component: () => import("@/modules/pokemon/pages/AboutPage"),
  },
  {
    path: "/id",
    // OPCIONAL: si queremos que aparezca un nombre descriptivo en la pestaña de network del navegador
    // le ponemos esto /* webpackChunkName: "nombre del componente" */ LITERALMENTE
    // import(
    //   /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"
    // ),
    // esto es porque cuando vemos en la pestaña network el archivo js cargado lazyload,
    // aparece un numero que no te dice cual es el q se cargo (esto es solo un detalle)
    component: () => import("@/modules/pokemon/pages/PokemonPage"),
  },
  // "/:pathMatch(.*)*" => comodin, cualquier url q no coincida con las
  // rutas definidas, pathMatch es una funcion que viene con
  // vue router
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/modules/shared/pages/NoPageFoundPage"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
