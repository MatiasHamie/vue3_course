<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input class="form-control" type="text" placeholder="Buscar Entrada" />

      <div class="entry-scrollable-area">
        <h2 v-for="item in 100" :key="item"><entry /></h2>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  components: { Entry: defineAsyncComponent(() => import("./Entry.vue")) },
};
</script>

<style scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollable-area {
  height: calc(100vh - 120px);
  overflow: scroll;
}
</style>
