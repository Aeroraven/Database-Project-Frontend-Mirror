<template>
    <div class="zms-anicare">
        <template>
            <v-tabs vertical background-color="primary"  dark v-model="tab">
                <v-tab :key="1">
                    <v-icon left>mdi-chart-bar</v-icon>统计分析
                </v-tab>
                <v-tab :key="2">
                    <v-icon left>mdi-note-text</v-icon>流水记录
                </v-tab>
                <v-tab :key="3">
                    <v-icon left>mdi-card-bulleted</v-icon>账户管理
                </v-tab>
                <v-tab :key="4">
                    <v-icon left>mdi-plus</v-icon>新增账目
                </v-tab>
                
                <v-tab-item color="transparent" class="rounded-lg zms-vert-tabitem  zms-transparent-bg" :key="1">
                    <flow-statistics/>

                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg zms-vert-tabitem" :key="2">
                    <flow-record/>
                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg zms-vert-tabitem" :key="3">
                    <bank-account-overview @searchRelatedTransactions="tackleRelatedTrans(arguments)"/>
                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg zms-vert-tabitem" :key="4">
                    <flow-add/>
                </v-tab-item>
            </v-tabs>
        </template>
    </div>
</template>

<script>
import EchartExample from '../DemoComponents/EchartExample.vue'
import EchartLineChartExample from '../DemoComponents/EchartLineChartExample.vue'
import BankAccountOverview from './BankAccountOverview.vue'
import FlowAdd from './FlowAdd.vue'
import FlowRecord from './FlowRecord.vue'
import FlowStatistics from './FlowStatistics.vue'
export default {
    name: 'FundContainer',
    created(){
        
    },
    methods:{
        tackleRelatedTrans(x){
            this.tab=1
        }
    },
    components:{
        EchartExample,
        EchartLineChartExample,
        BankAccountOverview,
        FlowRecord,
        FlowStatistics,
        FlowAdd
    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    .zms-vert-tabitem{
        margin-left:20px;
        margin-top:20px;
        //height: 500px;
    }
</style>