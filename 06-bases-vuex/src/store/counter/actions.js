import getRandomInt from "@/helpers/getRandomInt";

// recordemos q una accion NO modifica directamente el state
// aca lo mismo, en lugar de recibir el state,
// se recibe el context de la store
export const incrementRandomInt = async (context) => {
  context.commit("setLoading", true);
  const randomInt = await getRandomInt();
  context.commit("setLoading", false);

  context.commit("incrementBy", randomInt);
};
