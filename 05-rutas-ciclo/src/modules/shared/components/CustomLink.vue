<template>
  <a v-if="isExternalLink" class="normal-link" target="_blank" :href="link.to"
    >Link</a
  >

  <router-link :to="link.to" v-else v-slot="{ href, isActive }"
    ><a :class="isActive ? 'is-active' : 'normal-link'" :href="href"
      >Nuevo Link</a
    ></router-link
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
