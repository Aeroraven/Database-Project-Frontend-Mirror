<template>
    <div>
        <!--等待进度条-->
        <pending-progress-card :zmsShow="showPending" 
        :zmsPendingList="showPendingList" ref="pending"/>

        <!--分析选项-->
        <div class="zms-qtx-adjust">
            <v-icon color="primary">mdi-upload-multiple</v-icon>
            <span class="zms-query-titlex ">{{$t('fund.selectCond')}}</span><br/>
        </div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-combobox v-model="submitAccountList" clearable multiple :items="accountList"
                    :label="$t('fund.selectedAccounts')" prepend-icon="mdi-card"></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-menu v-model="menuBeginDate" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="submitBeginDate" :label="$t('fund.startDate')" v-bind="attrs" v-on="on"
                             prepend-icon="mdi-calendar" readonly >
                            </v-text-field>
                        </template>
                        <v-date-picker color="primary" width="400" v-model="submitBeginDate" @input="menuBeginDate = false"></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-menu v-model="menuEndDate" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="submitEndDate" :label="$t('fund.endDate')" v-bind="attrs" v-on="on"
                             prepend-icon="mdi-calendar" readonly >
                            </v-text-field>
                        </template>
                        <v-date-picker color="primary" width="400" v-model="submitEndDate" @input="menuEndDate = false"></v-date-picker>
                    </v-menu>
                </v-col>
                
            </v-row>
            <v-row>
                <v-spacer/>
                <v-col cols="12" sm="6" md="3">
                    <v-btn :disabled="submitStat" block class="zms-width"  color="success">
                        <v-icon>mdi-arrow-collapse-up</v-icon>&nbsp;&nbsp;{{$t('common2.filter')}}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-divider/>
        <!--分析结果-->
        <div class="zms-qtx-adjust">
            <v-icon color="primary">mdi-upload-multiple</v-icon>
            <span class="zms-query-titlex ">{{$t('fund.inexOverview')}}</span><br/>
        </div>
        <flow-statistics-pie-overview @zmsComplete="completeTask(0)"/>
        
        <br/><br/>
        <v-divider/>
        <div class="zms-qtx-adjust">
            <v-icon color="primary">mdi-upload-multiple</v-icon>
            <span class="zms-query-titlex ">{{$t('fund.balanceShift')}}</span><br/>
        </div>
        <div>
            <flow-statistics-balance-shift-trend @zmsComplete="completeTask(1)"/>
        </div>

        <br/><br/>
        <v-divider/>
        <div class="zms-qtx-adjust">
            <v-icon color="primary">mdi-upload-multiple</v-icon>
            <span class="zms-query-titlex ">{{$t('fund.balanceShiftPerAccount')}}</span><br/>
        </div>
        <div>
            <flow-statistics-balance-shift-details @zmsComplete="completeTask(2)"/>
        </div>
    </div>
</template>
<script>
import EcPieCharts from '../ChartComponents/EcPieCharts.vue'
import EcWaterfallBarChart from '../ChartComponents/EcWaterfallBarChart.vue'
import PendingProgressCard from '../CommonComponents/PendingProgressCard.vue'
import FlowStatisticsBalanceShiftDetails from './FlowStatisticsBalanceShiftDetails.vue'
import FlowStatisticsBalanceShiftTrend from './FlowStatisticsBalanceShiftTrend.vue'
import FlowStatisticsPieOverview from './FlowStatisticsPieOverview.vue'
export default{
    components: { EcPieCharts, FlowStatisticsPieOverview, EcWaterfallBarChart, FlowStatisticsBalanceShiftDetails, FlowStatisticsBalanceShiftTrend, PendingProgressCard },
    name:'FlowStatistics',
    data(){
        return {
            submitBeginDate:'2021-07-01',
            submitEndDate:'2021-07-02',
            menuBeginDate:0,
            menuEndDate:0,
            accountList:[],
            submitAccountList:null,
            submitStat:0,
            showPending:1,
            showPendingList:[
                this.$t('fund.fetchIncExpData'),
                this.$t('fund.fetchBalanceShift'),
                this.$t('fund.fetchBalanceShiftAc')
            ],
            showPendingCnt:0
        }
    },
    methods:{
        completeTask(x){
            this.$refs.pending.complete(x);
            console.log('complete')
            this.showPendingCnt++;
            if(this.showPendingCnt===3){
                this.showPending=0;
            }
        }
    }
}
</script>
<style scoped>
    .zms-qtx-adjust{
        margin-top:10px;
        margin-bottom:10px;
        display: block;
    }
</style>