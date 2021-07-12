<template>
    <div class="zms-ConvenienceService">
        <span class="zms-ConvenienceService-title zms-primary-color" color="primary">
            <v-icon color="primary">el-icon-tickets</v-icon> 便民信息服务管理
        </span>
        <convenience-service-container/>
            
        
    </div>
</template>

<script>
import ConvenienceServiceContainer from '../components/ConvenienceServiceComponents/ConvenienceServiceContainer.vue'
export default {
    name: 'ConvenienceServiceManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.convenienceService})
    },
    components:{
      ConvenienceServiceContainer,
    },methods:{
        routerGo(x){
            this.$router.push(x);
        }
    }
  
}
</script>
<style scoped lang="scss">
    .zms-ConvenienceService{
        margin-top:10px;
    }
    .zms-ConvenienceService-title{
        font-size:23px;
        font-weight: bold;
        letter-spacing: 1px;
    }
</style>