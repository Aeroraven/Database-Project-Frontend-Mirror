<template>
  <div class="zms-top-navigation-bar-hamburger">
      <img :src="HamImg" :style="attachedRotation" @click="rotateHamburger"/>
  </div>
</template>

<script>
export default {
    name: 'Hamburger',
    data:()=>{
        return{
            HamImg:"",
            rotateDeg:0,
        } 
    },
    methods:{
        rotateHamburger(){
            this.rotateDeg=90-this.rotateDeg;
            this.$store.commit('calloutSlideBar');
        }
    },
    computed:{
        attachedRotation(){
            return{
                transform:'rotateZ('+this.rotateDeg+'deg)'
            }
        }
    },
    created(){
        let urlTemp = this.$store.state.sAsset_HamburgerImg;
        this.HamImg = require("@/"+urlTemp)
        this.rotateDeg=90;
    }
}
</script>

<style scoped lang="scss">
    .zms-top-navigation-bar-hamburger{
        display:inline-block;
        padding-left:20px;
        img{
            transition:all .5s;
        }
        cursor:pointer;
    }
</style>
