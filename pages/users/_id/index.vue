<template>
  <h1>A single user, id = {{ $route.params.id }}</h1>
</template>

<script>
export default {
  data() {
    return {
      /* id: 'id' */
    }
  },
  validate(data) {
    console.log("##### Logging 'data'...")
    console.log(data)

    return /^\d+$/.test(data.params.id)
    // return true
  },
  layout: 'users'
}
</script>

<!--
<style scoped>

</style>
-->
