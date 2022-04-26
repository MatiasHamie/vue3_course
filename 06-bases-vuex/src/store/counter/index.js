import getRandomInt from "@/helpers/getRandomInt";

/**
 * ATENCION: Cuando se crea este modulo de la store
 * hay que prestar atencion a que el state no ES REACTIVO
 * por default, si ponemos solamente por ejemplo:
 *
 * const counterStore = {
 *    state: { //... }
 *    //...
 * }
 *
 * Lo correcto seria
 *
 * const counterStore = {
 *    state: () => ({ //... })
 *    //...
 * }
 */

const counterStore = {
  namespaced: true,
  // state es igual al data(){
  //  return {}
  // }
  // lo q hace que sea reactivo
  state: () => ({
    count: 1, //listo, con esto ya tengo una variable estado dentro de la store
    lastMutation: "none",
    isLoading: false,
  }),
  // las mutaciones las podemos ver como "metodos"
  // que estan adentro de mutations q ayudan para hacer
  // cambios del state
  // SON SINCRONAS! no podes poner async - await
  mutations: {
    // las mutations reciben como PRIMER PARAMETRO
    // el state de la store, si quiero recibir otros
    // tengo que pasarlos a partir de la segunda
    // puedo recibir el state como parametro
    increment(state) {
      state.count++;
      state.lastMutation = "increment";
    },
    incrementBy(state, value) {
      state.count += value;
      state.lastMutation = "incrementBy";
    },
    setLoading(state, value) {
      state.isLoading = value;
      state.lastMutation = "setLoading";
    },
  },
  actions: {
    // recordemos q una accion NO modifica directamente el state
    // aca lo mismo, en lugar de recibir el state,
    // se recibe el context de la store
    async incrementRandomInt(context) {
      context.commit("setLoading", true);
      const randomInt = await getRandomInt();
      context.commit("setLoading", false);

      context.commit("incrementBy", randomInt);
    },
  },
  getters: {
    squareCount(state) {
      return state.count * state.count;
    },
  },
};

export default counterStore;
