<template>
    <div class="zms-slidebar-vlist-item-icon" :style="{'backgroundImage':'url(' + iconImg + ');'}">
        <img :src="iconImg" :class="{'zms-slidebar-vlist-item-icon-activated':this.activated}"/>
    </div>
</template>

<script>

export default {
    name: 'SlidebarListIcon',
    data:()=>{
        return{
            iconImg:null,
        }
    },
    props:{
        itemPath:String,
        activated:Boolean,
    },
    computed:{

    },
    created(){
        let urlTemp = this.itemPath;
        this.iconImg = require("@/"+urlTemp)
    }
}
</script>

<style scoped lang="scss">
    .zms-slidebar-vlist-item-icon{
        display: inline-block;
        height:30px;
        width:30px;
        img{
            height:30px;
            transition:all .3s;
        }
        
    }
    .zms-slidebar-vlist-item-icon-activated{
        filter:invert(73%) sepia(57%) saturate(1004%) hue-rotate(178deg) brightness(150%);
        transition:all .3s;
    }
</style>
