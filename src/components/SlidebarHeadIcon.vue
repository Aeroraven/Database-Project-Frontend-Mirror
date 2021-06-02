<template>
    <div class="zms-slidebar-headicon" >
        <img :src="HeadImg"/><br/>
        <div class="zms-slidebar-headicon-text">
            {{getProjectName}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'SlidebarHeadIcon',
    data:()=>{
        return{
            HeadImg:"",
            rotateDeg:0,
        } 
    },
    computed:{
        getProjectName(){
            return this.$store.state.sProjectName;
        }
    },
    created(){
        let urlTemp = this.$store.state.sAsset_SlidebarHeadIcon;
        this.HeadImg = require("@/"+urlTemp)
    }
}
</script>

<style scoped lang="scss">
    .zms-slidebar-headicon{
        background-color:rgb(59, 116, 190);
        height:200px;
        position:relative;
        img{
            height:50%;
            margin-top:30px;
        }
    }
    .zms-slidebar-headicon-text{
        position:relative;
        color:#ffffff;
        display:inline-flex;
        text-align: center;
        font-size:25px;
        white-space:nowrap;
        letter-spacing: 2px;
        font-weight: bold;
    }
    
    
</style>
