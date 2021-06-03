<template>
    <div class="zms-homepage-float-box" :style="getOverallStyle" :class="getShadowClass">
        <div class="zms-homepage-float-box-title-container">
            <span class="zms-homepage-float-box-title" v-html="title">
            </span>
        </div>
        <slot></slot>
    </div>
    
</template>

<script>
export default {
    name: 'HomepageFloatBox',
    props:{
        title:String,
        type:String,
        shadow:Boolean,
    },
    computed:{
        getOverallStyle(){
            let x=100;
            if(this.type==='half'){
                x=40;
            }
            return{
                'width':x+'%',
            }
        },
        getShadowClass(){
            return{
                'zms-homepage-float-box2':this.shadow,
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .zms-homepage-float-box2{
        box-shadow: rgb(207, 206, 206) 3px 4px 15px 0.5px ;
    }
    .zms-homepage-float-box{
        display: inline-block;
        border:#ffffff 1px solid;
        vertical-align:top;
        padding-left:15px;
        padding-right:15px;
        padding-top:15px;
        padding-bottom:10px;
        border-radius:4px;
        letter-spacing: 1px;
        font-size:15px;
        margin-right:15px;
    }
    .zms-homepage-float-box-title{
        color:#3b6fcf;
        font-size:18px;
        font-weight: bold;
    }
    .zms-homepage-float-box-title-container{
        margin-bottom:10px;
    }
</style>
