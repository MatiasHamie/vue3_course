import { createStore } from "vuex";
import counterStore from "./counter";

// para poder utilizarlo tenemos q agregar al main.js
// createApp(App).use(store).mount("#app");
// esto hace que cualquier elemento tenga acceso al store

export default createStore({
  modules: {
    counter: counterStore,
  },
});
