<template>
  <div>
    <Header />
    <header>
      USERS' SECTION
    </header>
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  },
  data() {
    return {
      name: 'users'
    }
  }
}
</script>

<!--
<style>

</style>
-->
