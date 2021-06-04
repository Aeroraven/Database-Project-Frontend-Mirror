<template>
    <div class="zms-top-navigation-bar" :style="slidebarStyle">
        <hamburger></hamburger>
        <top-navigation-bar-title></top-navigation-bar-title>
    </div>
</template>

<script>
import TopNavigationBarTitle from "@/components/DeprecatedComponents/TopbarComponents/TopNavigationBarTitle.vue"
import Hamburger from "@/components/DeprecatedComponents/TopbarComponents/Hamburger.vue"
export default {
    name: 'TopNavigationBar',
    computed:{
        slidebarStyle(){
            return{
                //left:this.$store.state.sSlideBarLeft+'px',
                left:'0px',
            }
        }  
    },
    methods:{
        
    },
    components:{
        TopNavigationBarTitle,
        Hamburger
    }
}
</script>

<style scoped lang="scss">
    .zms-top-navigation-bar{
        box-shadow: darkgrey 3px -4px 20px 0.5px ;
        position:fixed;
        top:0px;
        right:0px;
        height:50px;
        padding-top:20px;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        font-weight: bold;
        font-size:19px;
        font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
        color:rgb(248, 248, 248);
        text-align: left;
        transition: all .5s;
        background-color:#3b6fcf;
    }
</style>
