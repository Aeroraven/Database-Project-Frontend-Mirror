<template>
  <div class="zms-wrapper" :style="slidebarStyle">
        <transition 
        enter-active-class="animate__animated animate__fadeIn animate__delay-1s"
        leave-active-class="animate__animated animate__fadeOut ">
            <router-view :key="$route.fullpath"/>
        </transition>
        
  </div>
</template>

<script>

export default {
    components: {},
    name: 'PageContainer',
    computed:{
        slidebarStyle(){
            return{
                //left:this.$store.state.sSlideBarLeft+'px',
                left:'0px',
            }
        }  
    },
}
</script>

<style scoped lang="scss">
    .zms-wrapper{
        z-index:1;
        position:fixed;
        right:0px;
        bottom:0px;
        top:55px;
        transition:all .5s;
        text-align: left;
        padding-left:50px;
        padding-right:50px;
        padding-top:10px;
        background-color: #f0f0f0;
    }
</style>
