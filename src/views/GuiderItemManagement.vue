<template>
    <div class="home">
        <span class="zms-view-title zms-primary-color">
            <v-icon color="primary">el-icon-stopwatch</v-icon> 导游信息管理
        </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <v-btn light color="primary" @click="routerGo('/')">
            <v-icon>mdi-arrow-left</v-icon>返回主页
        </v-btn>
        <div class="zms-guideitem">
            <guide-item/>
        </div>
         <div class="zms-guideitem">
            <guide-item-Overview/>
        </div>
        
    </div>
</template>

<script>
import guideItem from '../components/GuideComponents/GuideItem.vue'
//import guideItemOverview from '../components/GuideComponents/GuideItemOverview.vue'

export default {
    name: 'guideItemManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.GuideItemManagement_item})
    },components:{
        guideItem
    },methods:{
        routerGo(x){
            this.$router.push(x);
        }
    }
}
</script>
<style scoped lang="scss">
    .zms-guideitem{
        margin-top:20px;
    }
</style>