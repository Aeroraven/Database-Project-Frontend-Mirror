<template>
    <div class="zms-traininginfo">
        <span class="zms-traininginfo-title zms-primary-color" color="primary">
            <v-icon color="primary">el-icon-tickets</v-icon> 训练信息管理
        </span>
        <training-container/>
            
        
    </div>
</template>

<script>
import TrainingContainer from '../components/TrainingComponents/TrainingContainer.vue'
export default {
    name: 'TrainingManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.trainingManagement})
    },
    components:{
      TrainingContainer,
    },methods:{
        routerGo(x){
            this.$router.push(x);
        }
    }
  
}
</script>
<style scoped lang="scss">
    .zms-traininginfo{
        margin-top:10px;
    }
    .zms-traininginfo-title{
        font-size:23px;
        font-weight: bold;
        letter-spacing: 1px;
    }
</style>