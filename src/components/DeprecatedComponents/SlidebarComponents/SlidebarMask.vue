<template>
    <div class="zms-slidebar-mask-wrapper">
        <transition name="zms-fade">
            <div class="zms-slidebar-mask" v-if="visible"
            @click="closeSlidebar">
                
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'SlidebarMask',
    data:()=>{
        return{
            
        }
    },
    computed:{
        visible(){
            return this.$store.state.sSlideBarLeft==this.$store.state.scSlideBarLeftInitial+this.$store.state.scSlideBarLeft;
        }
    },methods:{
        closeSlidebar(){
            this.$store.commit('calloutSlideBar');
        }
    }
}
</script>

<style scoped lang="scss">
    .zms-slidebar-mask{
        position: absolute;
        left: 0px;
        top:0px;
        right: 0px;
        bottom: 0px;
        z-index: 9999;
        background-color: rgba(75, 74, 74, 0.5);
        display: block;
    }
    .zms-fade-enter , .zms-fade-leave-to{
        opacity: 0;
    }
    .zms-fade-enter-active , .zms-fade-leave-active{
        transition:opacity .5s;
    }
</style>
