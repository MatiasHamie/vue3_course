<template>
  <navbar />
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- este componente lo usamos directamente y ya esta el router -->
  <router-view />
</template>

<script>
// para usar lazyload es como el router 
// pero necesitamos usar la funcion extra que es
// defineAsynzComponent
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  components: {
    Navbar: defineAsyncComponent(() =>
      import("@/modules/shared/components/Navbar")
    ),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
