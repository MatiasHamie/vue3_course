<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Cual es este pokemon?</h1>
    <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <!-- el evento que nos interesa escuchar del hijo
    lo consumimos como si fuese un evento comun del dom
    con el @

    cuando llamamos al metodo q va a usar la respuesta del hijo
    (en este caso es checkAnswer), ese metodo puede recibir parametros
    como siempre una funcion comun lo hace, y cuando queremos usar el valor
    (si es q manda) que nos vmanda el hijo cuando emite el evento
    usamos el $event, eso nos da ese parametro q nos manda el hijo

    si la funcion checkAnswer NO recibe argumentos, hace falta ponerle los
    parentesis en el @selection bla bla
     -->
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />
    <!-- para no usar un div al pedo, 
    <div v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </div>

    usamos un template -->
    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: { PokemonImage, PokemonOptions },
  // data es reactivo, va a estar pendiente de los cambios
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[randomInt];
    },
    checkAnswer(pokemonIdSelected) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (pokemonIdSelected === this.pokemon.id) {
        this.message = `Correcto ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style></style>
