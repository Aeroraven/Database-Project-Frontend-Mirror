<template>
    <div class="zms-slidebar-vlist-item-icon" >
        <img :src="iconImg"/>
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
        img{
            height:30px;
        }
    }
</style>
