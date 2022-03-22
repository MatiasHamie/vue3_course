<template>
  <div class="navbar-container">
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link> -->
    <!-- este name: 'pokemon-id' esta configurado en router/routes.vue 
    hay muchas formas de hacer esto, en la doc∆ del router te explican
    bien-->
    <!-- <router-link :to="{ name: 'pokemon-id', params: { id: '12' } }"
      >Pokemon por id</router-link
    > -->
    <!-- <router-link :to="{ name: 'about' }">About</router-link> -->
    <custom-link v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  data() {
    return {
      links: [
        { to: "pokemon-home", name: "Pokemons" },
        { to: "pokemon-id", name: "Por ID", id: 151 },
        { to: "pokemon-about", name: "About" },
        { to: "https://google.com", name: "Google" },
        { to: "dbz-about", name: "DBZ-About" },
        { to: "dbz-characters", name: "DBZ-Characters" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
};
</script>

<style scoped>
.navbar-container {
  padding: 0 30px;
}

.navbar-container a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

.navbar-container .router-link-exact-active {
  color: #42b983;
}
</style>
