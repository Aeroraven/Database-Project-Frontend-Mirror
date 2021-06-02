<template>
  <div class="zms-slidebar-vlist-item" :style="slidebarStyle">
      HelloWorld
  </div>
</template>

<script>
export default {
    name: 'SlidebarListItem',
    computed:{
        
    }
}
</script>

<style scoped lang="scss">
    .zms-slidebar-vlist-item{
        margin-left:5px;
        margin-right:5px;
        margin-top:5px;
        margin-bottom:5px;
        border-radius:3px;
        color:#ffffff;
        padding-top:15px;
        padding-bottom:15px;
        cursor:pointer;
        transition: all .3s;
        text-align:left;
        padding-left:50px;
        color:#1f7fec;
    }
    .zms-slidebar-vlist-item:hover{
        background-color:#1f7fec;
        color:#ffffff;
        transition: all .3s;
    }
    .zms-slidebar-vlist-item:active{
        background-color:#78afee;
        color:#ffffff;
        transition: all .3s;
    }
</style>
