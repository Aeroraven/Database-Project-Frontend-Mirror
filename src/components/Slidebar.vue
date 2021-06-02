<template>
  <div class="zms-slidebar" :style="slidebarStyle">
      
  </div>
</template>

<script>
export default {
    name: 'Slidebar',
    computed:{
        slidebarStyle(){
            return{
                width:this.$store.state.sSlideBarLeft+'px',
            }
        } 
    }
}
</script>

<style scoped lang="scss">
    .zms-slidebar{
        position:fixed;
        left:0px;
        top:0px;
        bottom:0px;
        overflow: hidden;
        background-color:rgb(61, 117, 223);
        transition:all 1s;
    }
</style>
