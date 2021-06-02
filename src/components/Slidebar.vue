<template>
  <div class="zms-slidebar" :style="slidebarStyle">
      <slidebar-head-icon></slidebar-head-icon>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
      <slidebar-list-item></slidebar-list-item>
  </div>
</template>

<script>
import SlidebarListItem from './SlidebarListItem.vue'
import SlidebarHeadIcon from './SlidebarHeadIcon.vue'
export default {
  components: { SlidebarListItem,SlidebarHeadIcon },
    name: 'Slidebar',
    computed:{
        slidebarStyle(){
            return{
                width:this.$store.state.sSlideBarLeft+'px',
            }
        } 
    }
}
</script>s

<style scoped lang="scss">
    .zms-slidebar{
        position:fixed;
        left:0px;
        top:0px;
        bottom:0px;
        overflow-y:scroll;
        overflow-x:hidden;
        background-color:rgb(249, 251, 255);
        transition:all 1s;
         
    }
    .zms-slidebar::-webkit-scrollbar {
        width: 5px;     
        height: 1px;
    }
    .zms-slidebar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #979ca3;
    }
    .zms-slidebar::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 10px;
            background: #ededed;
    }
</style>
