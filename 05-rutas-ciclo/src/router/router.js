import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/modules/pokemon/pages/ListPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/modules/pokemon/pages/AboutPage"),
  },
  {
    path: "/pokemonid/:id",
    /*el hecho de tener el name puesto (es opcional)
      hace que si yo, cambio el path, por ej
      tenia un path:"/:id" y ahora lo cambio a este
      path: "/pokemonid/:id"

      los "router-link" no van a tener problema, van a seguir andando y van a 
      redireccionar bien, lo unico q hay q hacer es que apunten al name
      NO al path

      Esto seria un ejemplo de como esta aca en esta app en el navbar
        <router-link 
          :to="{ name: 'pokemon-id', params: { id: '12' } }"
        >
          Pokemon por id
        </router-link
    >
    */
    name: "pokemon-id",
    // OPCIONAL: si queremos que aparezca un nombre descriptivo en la pestaña de network del navegador
    // le ponemos esto /* webpackChunkName: "nombre del componente" */ LITERALMENTE
    // import(
    //   /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"
    // ),
    // esto es porque cuando vemos en la pestaña network el archivo js cargado lazyload,
    // aparece un numero que no te dice cual es el q se cargo (esto es solo un detalle)
    component: () => import("@/modules/pokemon/pages/PokemonPage"),
    // tmb puedo mandarle por aca al componente las props
    // solo con mandar (route)
    props: (route) => {
      // console.log(route);
      // const { id } = route.params;
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },
  // "/:pathMatch(.*)*" => comodin, cualquier url q no coincida con las
  // rutas definidas, pathMatch es una funcion que viene con
  // vue router
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/modules/shared/pages/NoPageFoundPage"),
  },

  /**
   * Ejemplo de un redirect
   */
  // {
  //   path: "/pathCualquiera",
  //   redirect: "/otropath"
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
