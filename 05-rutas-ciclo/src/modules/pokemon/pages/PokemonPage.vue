<template>
  <h1>Pokemon Page</h1>
  <h2>{{ id }}</h2>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
  <!-- tamb se puede acceder directamente aca -->
  <!-- <h2>{{ $route.params }}</h2> -->
</template>

<script>
export default {
  // TODO lo que no se defina en props, PERO
  // se le envie al componente por props
  // se acceden mediante el $attrs
  // son atributos no props
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((r) => r.json());
        console.log(pokemon);
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push("/");
        console.log("no hay nada que hacer aqui");
      }
    },
  },
  // unicamente se ejecuta la peticion http cuando
  // esta en el ciclo de created el componente
  // pero q pasa si cambia? no se vuelve a hacer,
  // asi q podemos ponerlo en el updated(){} o
  // ponemos un observable en watch con el nombre de
  // la variable que queremos estar pendientes, y llamamos a la peticion

  // es similar a ponerla en el [ ] del useEffect
  watch: {
    id() {
      this.getPokemon();
    },
  },
  created() {
    this.getPokemon();
  },
  // data() {
  //   return {
  //     id: null,
  //   };
  // },
  // created() {
  //   // asi de facil se accede a los datos del router,
  //   // direcatmente el this.$route
  //   // console.log(this.$route.params);

  //   const { id } = this.$route.params;
  //   this.id = id;
  // },
};
</script>

<style></style>
