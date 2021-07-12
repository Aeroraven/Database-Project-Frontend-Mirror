<template>
    <div class="home">
        <span class="zms-view-title zms-primary-color">
            <v-icon color="primary">el-icon-s-check</v-icon> 员工考核信息管理
        </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <v-btn light color="primary" @click="routerGo('/employeeManagement')">
            <v-icon>mdi-arrow-left</v-icon>返回员工管理
        </v-btn>
        <div class="zms-Employeeeitem">
            <test1/>
        </div>

         <div class="zms-Employeeeitem">
            <test2/>
        </div>
        
    </div>
</template>

<script>
import test1 from '../components/Test/test.vue'
import test2 from '../components/Test/test2.vue'
export default {
    name: 'ShowTicketManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.showTicketManagement})
    },
    components:{
      test1,test2
    },methods:{
        routerGo(x){
            this.$router.push(x);
        }
    }
  
}
</script>
<style scoped lang="scss">
    .zms-showticketinfo{
        margin-top:10px;
    }
    .zms-showticket-title{
        font-size:23px;
        font-weight: bold;
        letter-spacing: 1px;
    }
</style>