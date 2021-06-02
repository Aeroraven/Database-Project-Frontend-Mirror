<template>
    <div class="zms-slidebar-vlist-item" :style="slidebarStyle">
        <slidebar-list-icon :itemPath="iconPath"></slidebar-list-icon>
        <span class="zms-slidebar-vlist-item-text">{{itemName}}</span>
    </div>
</template>

<script>
import SlidebarListIcon from './SlidebarListIcon.vue'
export default {
    name: 'SlidebarListItem',
    props:{
        withIcon:Boolean,
        itemName:String,
        iconPath:String,
    },
    components:{
        SlidebarListIcon,
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
        padding-top:10px;
        padding-bottom:10px;
        cursor:pointer;
        transition: all .3s;
        text-align:left;
        padding-left:30px;
        color:#ffffff;
        white-space: nowrap;
        position:relative;
        letter-spacing: 2px;
    }
    .zms-slidebar-vlist-item-text{
        margin-left:30px;
        position:relative;
        top:-5px;
    }
    .zms-slidebar-vlist-item:hover{
        background-color:#4b4b4b;
        color:#ffffff;
        transition: all .3s;
    }
    .zms-slidebar-vlist-item:active{
        background-color:rgb(167, 167, 167);
        color:#ffffff;
        transition: all .3s;
    }
</style>
