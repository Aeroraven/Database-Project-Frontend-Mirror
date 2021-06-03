<template>
  <div class="zms-slidebar" :style="slidebarStyle">
        <slidebar-head-icon></slidebar-head-icon>
        <slidebar-list-item v-for="i in getMenuItems().length" :key="i" 
            :itemName="getMenuItems()[i-1].name" :iconPath="getMenuItems()[i-1].icon"
            :childs="getMenuItems()[i-1].child"></slidebar-list-item>
        <hr/>
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
        },
        
    },
    methods:{
        getMenuItems(){
            return this.$store.state.sProjectFunctions;
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
        background-color:rgb(47, 47, 47);
        transition:all .5s;
        hr{
            border:rgb(87, 87, 87) 0.5px solid;
            border-bottom:none;
            margin-right:20px;
            margin-left:20px;

        }
         
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
