<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola Mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      // Ojo con poner aca que redirija a "daybook",
      // poner directamente el nombre del hijo que quiero
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
