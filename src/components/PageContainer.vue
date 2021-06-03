<template>
  <div class="zms-wrapper" :style="slidebarStyle">
        <router-view :key="$route.fullpath"/>
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
        top:55px;
        transition:all .5s;
    }
</style>
