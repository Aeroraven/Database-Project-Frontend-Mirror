<template>
    <div class="zms-popup-window-wrapper" v-if="visible">
        <div class="zms-popup-window">
            <div class="zms-popup-title">
                {{title}}
                <div class="zms-popup-title-close" @click="visible=false;">
                    <template>
                        <svg-icon type="mdi" :path="mdiClosePath" class="zms-popup-title-close-main"></svg-icon>
                    </template>
                </div>
            </div>
            <div class="zms-popup-body"><slot></slot></div>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'
export default {
    name: 'ZPopupWindow',
    props: {
        title: String
    },
    components:{
        SvgIcon,
    },
    data:()=>{
        return{
            mdiClosePath:mdiClose,
            visible:true,
        }
    }
}
</script>

<style scoped lang="scss">
    .zms-popup-window-wrapper{
        position: absolute;
        left: 0px;
        top:0px;
        right: 0px;
        bottom: 0px;
        z-index: 99999;
        background-color: rgba(75, 74, 74, 0.5);
        display: block;//None
    }
    .zms-popup-window{
        position: relative;
        top:30%;
        left:50%;
        transform: translateX(-50%);
        text-align: center;
        height:40%;
    }
    .zms-popup-title{
        position:relative;
        display: inline-block;
        height: 30px;
        width:50%;
        background-color: #3b6fcf;
        color:#ffffff;
        text-align: left;
        padding-top:10px;
        padding-left:15px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 4px;
    }
    .zms-popup-title-close{
        float:right;
        margin-right: 10px;
        cursor: pointer;
    }
    .zms-popup-title-close-main:hover{
        transform: rotateZ(180deg);
        transition:.5s;
    }
    .zms-popup-body{
        position:relative;
        display: inline-block;
        top:-2px;
        width:50%;
        background-color: #3e3e3f;
        color:#ffffff;
        text-align: left;
        padding-top:10px;
        padding-left:15px;
        font-size:13px;
        height:50%;
        border-radius: 2px;
    }
</style>
