<template>
    <div class="zms-checkbox" @click="clickHanler" :style="boxWidth"> 
        <span class="zms-checkbox-body">
            <transition name="zms-transition-fade">
                <template>
                    <svg-icon type="mdi" :path="mdiIconPath" :class="transparentTick"></svg-icon>
                </template>
            </transition>
        </span>
        <span class="zms-checkbox-text" :class="checkHideCompensation" v-html="this.caption">
        </span>
    </div>
    
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheckBold } from '@mdi/js'
export default {
    name: 'ZCheckBox',
    
    props: {
        caption:String
    },
    components:{
        SvgIcon
    },
    computed:{
        checkHideCompensation(){
            return{
                'zms-checkbox-text-compensation':!this.selectedStatus,
                'zms-checkbox-text-normal':this.selectedStatus
            }
        },
        transparentTick(){
            return{
                'zms-check-body-icon':this.selectedStatus,
                'zms-check-body-icon-transparent':!this.selectedStatus
            }
        },
        boxWidth(){
            return{
                'width':(this.caption.length*10+60)+'px'
            }
        }
    },
    data:()=>{
        return{
            mdiIconPath:mdiCheckBold,
            selectedStatus:true,
        }
    },
    created(){
        
    },
    methods:{
        toggleStatus(){
            this.selectedStatus=!this.selectedStatus;
        },
        clickHanler(){
            this.toggleStatus();
            if(this.selectedStatus){
                this.$emit('zmsselect');
            }else{
                this.$emit('zmsunselect');
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .zms-check-body-icon{
        position:relative;
        top:-6px;
        left:-4px;
        color:#3b6fcf;
        transition:all .2s;
    }
    .zms-check-body-icon-transparent{
        position:relative;
        top:-6px;
        left:-4px;
        color:#3b6fcf00;
        transition:all .2s;
    }
    .zms-checkbox-body{
        height:15px;
        width: 15px;
        display: inline-block;
        border: #222222 2px solid;
        margin-right:10px;
        position:relative;
    }
    .zms-checkbox-text{
        position: fixed;
        padding-top:2px;
        font-size:14px;
        font-weight: bold;
        letter-spacing: 1px;
        transition: color .5s;
    }
    .zms-checkbox-text:hover{
        color:#3b6fcf;
        transition: color .5s;
    }
    .zms-checkbox{
        position:relative;
        cursor: pointer;
        height:100px;
        display: inline-block;
    }
    .zms-transition-fade-enter{
        opacity: 0;
    }
    .zms-transition-fade-leave-to{
        opacity: 0;
    }
    .zms-transition-fade-enter-active{
        transition: opacity .5s;
    }
    .zms-transition-fade-leave-active{
        transition: opacity .5s;
    }
</style>
