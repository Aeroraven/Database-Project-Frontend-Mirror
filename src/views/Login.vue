<template>
  <div>
    这里是登陆界面
  </div>
</template>

<script>

export default {
    name: 'Login',
    components: {

    },created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.login})
        //this.axios.get('http://localhost:11451/zms-api-test/test.php') //CORS Denied
    }
}
</script>
