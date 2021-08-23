<template>
  <div>
    <mc-v-top-bar/>

    <router-view></router-view>
  </div>
</template>

<script>
  import McVTopBar from './components/TopBar'
  import  {actionTypes} from "./store/modules/auth"

  export default {
    name: 'McVApp',
    components: {
      McVTopBar
    },
    mounted() {
      this.$store.dispatch(actionTypes.getCurrentUser)
    }

  }
</script>

<style></style>
