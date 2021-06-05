<template>
  <div>
    <homepage-container/>
  </div>
</template>

<script>
import HomepageContainer from '../components/HomepageComponents/HomepageContainer.vue'

  export default {
    name: 'Home',
    components: {
        HomepageContainer

    },created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.mainPage})
        this.axios.get('http://localhost:11451/zms-api-test/test.php')
    }
  }
</script>
