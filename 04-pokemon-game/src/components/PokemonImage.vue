<template>
  <div class="pokemon-container">
    <img :src="imgSrc" alt="pokemon img" class="hidden-pokemon" />
    <img v-if="showPokemon" :src="imgSrc" alt="pokemon img" class="fade-in" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: { type: Number, required: true },
    showPokemon: { type: Boolean, required: true, default: false },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
/* scoped hace que sea local */
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 200px;
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
