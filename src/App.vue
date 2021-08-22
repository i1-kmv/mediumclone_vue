<template>
  <div>
    <mc-v-top-bar/>

    <router-view></router-view>
  </div>
</template>

<script>
  import McVTopBar from './components/TopBar'

  export default {
    name: 'McVApp',
    components: {
      McVTopBar
    },

  }
</script>

<style></style>
