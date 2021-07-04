<template>
    <div class="home">
        <span class="zms-view-title zms-primary-color">
            <v-icon color="primary">mdi-database</v-icon> 员工信息录入
        </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <v-btn light color="primary" @click="routerGo('/employeeManagement')">
            <v-icon>mdi-arrow-left</v-icon>返回员工管理
        </v-btn>
        
        <div class="zms-wareitem">
            <warehouse-flow/>
            <!--<warehouse-info/>-->
        </div>
        
    </div>
</template>

<script>
import WarehouseFlow from '../components/EmployeeComponents/WarehouseFlow.vue'
export default {
    name: 'WarehouseFlowManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.employeeManagement_flowRecord})
    },methods:{
        routerGo(x){
            this.$router.push(x);
        }
    },components:{
        WarehouseFlow,
    }
}
</script>
<style scoped lang="scss">
    .zms-wareitem{
        margin-top:20px;
    }
</style>