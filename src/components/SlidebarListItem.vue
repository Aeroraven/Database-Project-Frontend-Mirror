<template>
    <div class="zms-slidebar-vlist-item" :class="getBaseClass" :style="slidebarStyle" @click="toggleCollapse">
        <slidebar-list-icon :itemPath="iconPath"></slidebar-list-icon>
        <span :class="getTextClass">{{itemName}}</span>
        <div :class="getArrowClass">
            <template>
                <svg-icon type="mdi" :path="mdiUpPath"></svg-icon>
            </template>
        </div>
    </div>
</template>

<script>
import SlidebarListIcon from './SlidebarListIcon.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronUp } from '@mdi/js'
export default {
    name: 'SlidebarListItem',
    props:{
        withIcon:Boolean,
        itemName:String,
        iconPath:String,
    },
    computed:{
        getTextClass(){
            return{
                'zms-slidebar-vlist-item-text':this.collapse,
                'zms-slidebar-vlist-item-text-activated':!this.collapse,
            }
        },
        getArrowClass(){
            return{
                'zms-slidebar-vlist-item-collapse':this.collapse,
                'zms-slidebar-vlist-item-collapse-activated':!this.collapse,
            }
        },
        getBaseClass(){
            return{
                'zms-slidebar-vlist-item-ext':this.collapse,
                'zms-slidebar-vlist-item-ext-activated':!this.collapse,
            }
        }
    },
    components:{
        SlidebarListIcon,
        SvgIcon,
    },
    data() {
        return {
            mdiUpPath: mdiChevronUp,
            collapse:true,
            extended:false,
        }
    },
    methods:{
        toggleCollapse(){
            this.collapse=!this.collapse;
            this.extended=!this.extended;
        }
    }
}
</script>

<style scoped lang="scss">
    .zms-slidebar-vlist-item-collapse{
        position:relative;
        display: inline-block;
        right:-80px;
        transition:all .5s;
    }
    .zms-slidebar-vlist-item-collapse-activated{
        position:relative;
        display: inline-block;
        right:-80px;
        transform:rotateZ(180deg);
        transition:all .5s
    }
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
        white-space: nowrap;
        position:relative;
        letter-spacing: 2px;
        color:#ffffff;
        font-weight: bold;
        font-size:14px;
    }
    .zms-slidebar-vlist-item-text{
        margin-left:30px;
        position:relative;
        top:-5px;
        color:#ffffff;
    }
     .zms-slidebar-vlist-item-text-activated{
        margin-left:30px;
        position:relative;
        top:-5px;
        color:#7ec5ff;
    }
    .zms-slidebar-vlist-item-ext:hover{
        background-color:#4b4b4b;
        color:#ffffff;
        transition: all .3s;
    }
    .zms-slidebar-vlist-item-ext:active{
        background-color:rgb(167, 167, 167);
        color:#ffffff;
        transition: all .3s;
    }
    .zms-slidebar-vlist-item-ext-activated:hover{
        background-color:rgb(63, 76, 87);
        color:#7ec5ff;
        transition: all .3s;
    }
    .zms-slidebar-vlist-item-ext-activated:active{
        background-color:#4e779c;
        color:#7ec5ff;
        transition: all .3s;
    }
</style>
