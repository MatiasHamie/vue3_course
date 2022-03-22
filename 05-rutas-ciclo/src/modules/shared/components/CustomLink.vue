<template>
  <a
    v-if="isExternalLink"
    class="normal-link"
    target="_blank"
    :href="link.to"
    >{{ link.name }}</a
  >

  <!-- la key q esta en params es la misma q esta configurada
  en el router como en este caso /nombre-ruta/:id -->
  <router-link :to="route" v-else v-slot="{ href, isActive }"
    ><a :class="isActive ? 'is-active' : 'normal-link'" :href="href">{{
      link.name
    }}</a></router-link
  >
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
    route() {
      return this.link.id === undefined
        ? { name: this.link.to }
        : { name: this.link.to, params: { id: this.link.id } };
    },
  },
};
</script>

<style scoped>
.is-active {
  color: #42b983;
}
.normal-link {
  color: #c6c5c5;
}
</style>
