<!-- Components are rendered not as pages, but as part of pages -->
<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">Users</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<!--
<script>
export default {
  data() {
    return {
      name: 'Header'
    }
  }
}
</script>
-->

<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

.nav-items a {
  text-decoration: none;
  color: blue;
}

.nav-items a:hover,
.nav-items a:active {
  text-decoration: none;
  color: white;
}
</style>
