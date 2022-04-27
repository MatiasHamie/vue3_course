<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
    <FabButton />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    FabButton: defineAsyncComponent(() =>
      import("../components/FabButton.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
