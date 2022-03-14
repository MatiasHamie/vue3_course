<template>
  <div class="navbar-container">
    <router-link to="/">Pokemon List</router-link>
    <router-link to="/id">Pokemon por id</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
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
