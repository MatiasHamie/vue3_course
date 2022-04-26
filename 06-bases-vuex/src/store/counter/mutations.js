// las mutations reciben como PRIMER PARAMETRO
// el state de la store, si quiero recibir otros
// tengo que pasarlos a partir de la segunda
// puedo recibir el state como parametro
export const increment = (state) => {
  state.count++;
  state.lastMutation = "increment";
};
export const incrementBy = (state, value) => {
  state.count += value;
  state.lastMutation = "incrementBy";
};
export const setLoading = (state, value) => {
  state.isLoading = value;
  state.lastMutation = "setLoading";
};
