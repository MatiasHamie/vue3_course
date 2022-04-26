<template>
  <h1>Counter - Vuex</h1>
  <!-- De esta forma se accede al store -->
  <!-- directamente -->
  <!-- <h2>Direct Access: {{ $store.state.count }}</h2> -->
  <!-- si hay un modulo $store.state.nombreStoreModulo.count-->
  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
  <!-- usando una computada -->
  <h2>Computed: {{ countComputed }}</h2>
  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <button @click="incrementFromComponent">Increment + 1</button>
  <button @click="incrementFromComponentBy">Increment + 5</button>
  <!-- recordar que el :algo es un shorcut de v-bind:algo -->
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

  <h2>Direct getter: {{ $store.getters["counter/squareCount"] }}</h2>
</template>

<script>
// Lo que hace mapState es traer propiedades computadas del store
import { mapState, mapActions } from "vuex";
export default {
  name: "CounterComponent",
  computed: {
    countComputed() {
      // Ojo que aca va el this para poder acceder a la store!!!
      return this.$store.state.count;
    },
    // Esto es como el useSelector(), le pedis q traiga del state
    // del store el state q se llame count
    // esta es 1 forma
    // SIN modulo de la store
    // ...mapState(["count", "lastMutation", "isLoading"]),
    // CON modulo de la store
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),
    // esta es otra
    // ...mapState({
    //   count: (state) => state.count,
    //   count: "count", tmb es valido
    //   counter: (state) => state.count, NO es necesario
    //   que tenga el mismo nombre que el state de redux
    //   en el caso de que haya un modulo de la store
    //   count: (state) => state.nombreModuloStore.count,
    //   count: (state) => state.counter.count,
    //   lastMutation: (state) => state.lastMutation,
    // }),
    // otro ejemplo con modulo de la store
    // ...mapState("nombreModulo", {
    //    count: "count"
    // })
    // ...mapState("counter", {
    //    count: "count"
    // })
  },
  methods: {
    // mutations
    incrementFromComponent() {
      // MODULO: si llamo a una mutation de un modulo de la store
      // le agrego nombreModuloStore/mutation
      // si no, lo hago directo
      // this.$store.commit("increment");
      this.$store.commit("counter/increment");
    },
    incrementFromComponentBy() {
      this.$store.commit("counter/incrementBy", 5);

      // esto es un ejemplo de que en un metodo
      // quiera llamar a una action
      // this.incrementRandomInt();
    },
    // actions
    // incrementFromComponentByRandom() {
    //   this.$store.dispatch("incrementRandomInt");
    // },
    // con esto, ya las puedo invocar directamente
    // idem como con los state
    // SIN modulos de la store
    // ...mapActions(["incrementRandomInt"]),
    // CON modulos de la store
    // ...mapActions("nombreModuloStore", ["incrementRandomInt"]),
    ...mapActions("counter", ["incrementRandomInt"]),
    //  otro ejemplo
    // ...mapActions({
    //    randomInt: "incrementRandomInt",
    // }),
    // o tambien si hay modulo de la store
    // ...mapActions("nombreModuloStore", {
    //    randomInt: "incrementRandomInt",
    // }),
  },
};
</script>

<style></style>
