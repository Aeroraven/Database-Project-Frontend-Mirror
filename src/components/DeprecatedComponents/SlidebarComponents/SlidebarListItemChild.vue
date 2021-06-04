<template>
    <div class="zms-slidebar-vlist-item-child" @click="collapseSlideBar();routerDirect();"> 
        {{props.name}}
    </div>
</template>

<script>
export default {
    name: 'SlidebarListItemChild',
    props:{
        withIcon:Boolean,
        itemName:String,
        iconPath:String,
        props:Object,
    },
    methods:{
        collapseSlideBar(){
            this.$store.commit('calloutSlideBar');
        },
        routerDirect(){
            this.$router.push(this.props.route);
            //this.$store.dispatch('alterTopNavTitle',{title:this.props.name})
        }
    }
}
</script>

<style scoped lang="scss">
    .zms-slidebar-vlist-item-child{
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
        padding-left:100px;
        white-space: nowrap;
        position:relative;
        letter-spacing: 2px;
        color:#2a78b8;
        font-weight: bold;
        font-size:14px;
    }
    .zms-slidebar-vlist-item-child:hover{
        background-color:#afaeae;
        color:#2a78b8;
        transition: all .3s;
    }
    .zms-slidebar-vlist-item-child:active{
        background-color:rgb(204, 202, 202);
        color:#4092d4;
        transition: all .3s;
    }
</style>
