<template>
  <div class="zms-wrapper" :style="slidebarStyle">
        <div class="zms-wrapper-inside">
            <transition 
            enter-active-class="animate__animated animate__fadeIn animate__faster zms-anim-shorter-delays animate__delay-1s "
            leave-active-class="animate__animated animate__fadeOut  animate__faster ">
                <router-view :key="$route.fullpath"/>
            </transition>
        </div>
        <div class="zms-wrapper-background" :style="getBg">

        </div>
        <div class="zms-wrapper-background-sec" >

        </div>
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
        },
        getProjectName(){
            return this.$store.state.sProjectName;
        },
        getBg(){
            return{
                background:'url('+this.HeadImg+')  no-repeat bottom right ',
                'background-size':'cover',
            }
        }
    },
    created(){
        let urlTemp = this.$store.state.sAsset_PageBackground;
        this.HeadImg = require("@/"+urlTemp)
    },data:()=>{
        return{
            HeadImg:null,
        }
    }
}
</script>

<style scoped lang="scss">
    .zms-anim-shorter-delays{
        --animate-delay: 0.5s;
    }
    .zms-wrapper{
        z-index:2;
        position:fixed;
        right:0px;
        bottom:0px;
        top:55px;
        transition:all .5s;
        text-align: left;
        padding-left:50px;
        padding-right:50px;
        padding-top:30px;
        background-color: #f0f0f0;
        overflow-y :scroll;
    }
    .zms-wrapper-background{
       z-index: -2;
       position:fixed;
       left:0px;
       right:0px;
       top:0px;
       bottom:0px;
       background-size:cover;
       height:100%;
       width:100%;
       background-position: bottom right;
    }
    .zms-wrapper-background-sec{
       z-index: -1;
       position:fixed;
       left:0px;
       right:0px;
       top:0px;
       bottom:0px;
       background-image: linear-gradient(0deg, #f0f0f09f, #f0f0f0,90%,#f0f0f0); 
       height:100%;
       width:100%;
    }
</style>
