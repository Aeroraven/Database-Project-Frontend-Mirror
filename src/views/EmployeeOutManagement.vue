<template>
    <div class="home">
        <span class="zms-view-title zms-primary-color">
            <v-icon color="primary">el-icon-s-custom</v-icon> 离职员工信息
        </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <v-btn light color="primary" @click="routerGo('/EmployeeManagement')">
            <v-icon>mdi-arrow-left</v-icon>返回员工管理
        </v-btn>
        <div class="zms-employeeitem">
            <employee-out-item/>
        </div>
        
    </div>
</template>

<script>
import EmployeeOutItem from '../components/EmployeeComponents/EmployeeOutItem.vue'

export default {
    name: 'EmployeeOutItem',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.EmployeeOutItem})
    },components:{
        EmployeeOutItem,
    },methods:{
        routerGo(x){
            this.$router.push(x);
        }
    }
}
</script>
<style scoped lang="scss">
    .zms-employeeoutitem{
        margin-top:20px;
    }
</style>