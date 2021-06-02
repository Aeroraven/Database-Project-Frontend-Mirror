<template>
  <div class="zms-wrapper" :style="slidebarStyle">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
  </div>
</template>

<script>

export default {
    components: {},
    name: 'PageContainer',
    computed:{
        slidebarStyle(){
            return{
                left:this.$store.state.sSlideBarLeft+'px',
            }
        }  
    },
}
</script>

<style scoped lang="scss">
    .zms-wrapper{
        position:fixed;
        right:0px;
        bottom:0px;
        top:35px;
        transition:all .5s;
    }
</style>
