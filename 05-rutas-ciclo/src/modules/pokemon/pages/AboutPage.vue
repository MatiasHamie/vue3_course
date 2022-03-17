<template>
  <h1>About Page</h1>
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Change Name</button>
</template>

<script>
export default {
  // lo q esta aca es reactivo
  data() {
    return {
      name: "Matias",
    };
  },
  methods: {
    onChangeName() {
      this.name = this.name === "Nahuel" ? "Matias" : "Nahuel";
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>

<style></style>
