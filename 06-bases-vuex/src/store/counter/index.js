import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

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
  // esto es para cuando pueden llegar a haber metodos de otros modulos
  // de la store, que se llamen igual a otros metodos de otros modulos
  namespaced: true,
  // state es igual al data(){
  //  return {}
  // }
  // lo q hace que sea reactivo
  // state: state,
  state,
  // las mutaciones las podemos ver como "metodos"
  // que estan adentro de mutations q ayudan para hacer
  // cambios del state
  // SON SINCRONAS! no podes poner async - await
  // mutations: mutations,
  mutations,
  // actions: actions,
  actions,
  // getters: getters,
  getters,
};

export default counterStore;
