import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import("@/modules/pokemon/layouts/PokemonLayout"),
    children: [
      {
        path: "",
        name: "pokemon-home",
        component: () => import("@/modules/pokemon/pages/ListPage"),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () => import("@/modules/pokemon/pages/AboutPage"),
      },
      {
        path: "pokemonid/:id",
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
      {
        path: "",
        redirect: { name: "pokemon-about" },
      },
    ],
  },
  // DBZ Layout
  {
    path: "/dbz",
    name: "dbz-layout",
    // aca ponemos todos los guardianes y aplica para todas las rutas hijas
    // obviamente.
    // se va a ejecutar el/los guards cuando venga desde una pagina
    // con pathname diferente, pero si estamos navegando entre ruta
    // hija a ruta hija, no se ejecuta
    beforeEnter: [isAuthenticatedGuard],
    component: () => import("@/modules/dbz/layouts/DragonBallLayout"),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () => import("@/modules/dbz/pages/Characters"),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () => import("@/modules/dbz/pages/About"),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
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

// Guard Global -Sincrono
// router.beforeEach((to, from, next) => {
//   console.log(to, from, next);

//   const random = 50;

//   if (random > 50) {
//     console.log("auth ok");
//     next();
//   } else {
//     console.log("auth failed");
//     next({ name: "pokemon-home" });
//   }
// });

// const canAcces = () => {
//   return new Promise((resolve) => {
//     const random = 51;

//     if (random > 50) {
//       console.log("auth ok");
//       resolve(true);
//     } else {
//       console.log("auth failed");
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAcces();

//   authorized ? next() : next({ name: "pokemon-home" });
// });

export default router;
