<template>
    <div class="zms-button" :class="getStyleClass" 
        @click="this.$emit('zmsclick')" @mouseover="this.$emit('zmsmouseover')"
        @mouseleave="this.$emit('zmsmouseleave')" v-ripple>

        <span class="zms-button-icon" v-if="showIcon">
            <template>
                <svg-icon type="mdi" :path="mdiIconPath"></svg-icon>
            </template>
        </span>
        <span class="zms-button-text" :class="getTextStyleClass">
            <span v-html="caption"></span>
        </span>
    </div>
    
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import {
     mdiCardsHeart,
     mdiCheckBold,
     mdiCloseThick,
     mdiTools,
     mdiFilterPlus,
     } from '@mdi/js'
export default {
    name: 'ZButton',
    props: {
        styleType: String,
        caption:String,
        icon:String,
        type:String,
    },
    components:{
        SvgIcon,
    },
    computed:{
        getStyleClass(){
            return{
                'zms-button-dark':(this.activeType==="dark"),
                'zms-button-confirm':(this.activeType==='confirm'),
                'zms-button-reject':(this.activeType==='reject'),
                'zms-button-romance':(this.activeType==='romance'),
                'zms-button-royal':(this.activeType==='royal'),
                
            }
        },
        getTextStyleClass(){
            return {
                'zms-button-no-icon-compensation':!this.showIcon,
            }
        },
        mdiIconPath(){
            return this.iconSet[this.icon];
        }
    },
    data:()=>{
        return{
            iconSet:{
                'heart':mdiCardsHeart,
                'check':mdiCheckBold,
                'cross':mdiCloseThick,
                'tool':mdiTools,
                'filter-plus':mdiFilterPlus
            },
            activeIcon:'heart', 
            activeType:'dark',
            showIcon:true,  
        }
    },
    created(){
        if(this.icon!=undefined&&this.icon!=""){
            this.activeIcon=this.icon;
        }else{
            this.showIcon=false;
        }

        if(this.type!=undefined&&this.type!=""){
            this.activeType=this.type;
        }
    }
}
</script>

<style scoped lang="scss">
    .zms-button-icon{
        margin-right:10px;
    }
    .zms-button-text{
        position:relative;
        top:-5px;
        letter-spacing: 1px;
    }
    .zms-button{
        margin-left:4px;
        margin-right:4px;
        display:inline-block;
        position:relative;
        height:20px;
        padding-left: 20px;
        padding-right:20px;
        padding-top:9px;
        padding-bottom:15px;
        border-radius:6px;
        font-size:14px;
        font-weight: bold;
        transition: all .5s;
        cursor:pointer;
    }
    .zms-button-no-icon-compensation{
        top: 5px;
    }

    .zms-button-dark{
        color:#ffffff;
        background-color:#4b4b4b;
        border-color:#555555;
        border-width: 1px;
    }
    .zms-button-dark:hover{
        background-color:#646464;
        transition: all .5s;
    }

    .zms-button-confirm{
        color:#ffffff;
        background-color:#43A047;
        border-color:#43A047;
        border-width: 1px;
    }
    .zms-button-confirm:hover{
        color:#ffffff;
        background-color:#4db953;
        border-color:#4db953;
        border-width: 1px;
        transition: all .5s;
    }

    .zms-button-reject{
        color:#ffffff;
        background-color:#e75353;
        border-color:#e75353;
        border-width: 1px;
    }
    .zms-button-reject:hover{
        color:#ffffff;
        background-color:#FF6060;
        border-color:#FF6060;
        border-width: 1px;
        transition: all .5s;
    }

    .zms-button-romance{
        color:#ffffff;
        background-color:#e25d90;
        border-color:#e25d90;
        border-width: 1px;
    }
    .zms-button-romance:hover{
        color:#ffffff;
        background-color:#f16da0;
        border-color:#f16da0;
        border-width: 1px;
        transition: all .5s;
    }

    .zms-button-royal{
        color:#ffffff;
        background-color:#3b6fcf;
        border-color:#3b6fcf;
        border-width: 1px;
    }
    .zms-button-royal:hover{
        color:#ffffff;
        background-color:#477de2;
        border-color:#477de2;
        border-width: 1px;
    }
</style>
