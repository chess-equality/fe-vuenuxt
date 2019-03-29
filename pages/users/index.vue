<template>
  <div>
    <!--<h1>The users' view</h1>-->
    <input v-model="userId" type="text" />
    <button @click="onLoadUser">Load User</button>
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
  }
}
</script>

<!--
<style scoped>

</style>
-->
