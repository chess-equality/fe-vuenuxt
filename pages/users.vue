<template>
  <div>
    <!--<h1>The users' view</h1>-->
    <input v-model="userId" type="text" />
    <button @click="onLoadUser">Load User</button>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* name: 'users' */
      userId: ''
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push('/users/' + this.userId)
    }
  },
  layout: 'users' // Will look for users.vue in "layouts" folder
}
</script>

<!--
<style scoped>

</style>
-->
