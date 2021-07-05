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
        <div :class="getWrapClass" >
            <particles-bg 
            class="zms-particle-bg"
            type="square"
            num=10 
            :bg="true"/>
                    
            <vue-particles
                color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="50"
                shapeType="star"
                :particleSize="4"
                linesColor="#777777"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.5"
                :linesDistance="150"
                :moveSpeed="1"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
            >
            </vue-particles>
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
        },
        getWrapClass(){
            return{
                'zms-wrapper-background-sec':!this.$vuetify.theme.dark,
                'zms-wrapper-background-sec-dark':this.$vuetify.theme.dark,
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
       transition: background-image 1s;

       width:100%;
    }
    .zms-wrapper-background-sec-dark{
       z-index: -1;
       position:fixed;
       left:0px;
       right:0px;
       top:0px;
       bottom:0px;
       background-image: linear-gradient(0deg, #2020209f, #202020,90%,#202020); 
       transition: background-image 1s;

       height:100%;
       width:100%;
    }
</style>
