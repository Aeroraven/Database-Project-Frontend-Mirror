<template>
    <div>
        <alert-messagebox     
        :alertTitle="$t('common3.transactionFailTitle')"
        :alertBody="$t('common3.transactionFail')+errorInfo"
        :alertLevel="`error`"
        :alertOnlyConfirm="true"
        ref="error_done" />

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
                    <v-btn block class="zms-width"  color="success" 
                    @click="initiateFilter">
                        <v-icon>mdi-filter-plus</v-icon>&nbsp;&nbsp;{{$t('common2.filter')}}
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
        <flow-statistics-pie-overview 
        ref='flowstat_bk1'
        @zmsComplete="completeTask(0)"/>
        
        <br/><br/>
        <v-divider/>
        <div class="zms-qtx-adjust">
            <v-icon color="primary">mdi-upload-multiple</v-icon>
            <span class="zms-query-titlex ">{{$t('fund.balanceShift')}}</span><br/>
        </div>
        <div>
            <flow-statistics-balance-shift-trend 
            ref='flowstat_bk2'
            @zmsComplete="completeTask(1)"/>
        </div>

        <br/><br/>
        <v-divider/>
        <div class="zms-qtx-adjust">
            <v-icon color="primary">mdi-upload-multiple</v-icon>
            <span class="zms-query-titlex ">{{$t('fund.balanceShiftPerAccount')}}</span><br/>
        </div>
        <div>
            <flow-statistics-balance-shift-details
            ref='flowstat_bk3'
             @zmsComplete="completeTask(2)"/>
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
import {getAccountList} from '../../apis/fund'
export default{
    components: { EcPieCharts, FlowStatisticsPieOverview, EcWaterfallBarChart, FlowStatisticsBalanceShiftDetails, FlowStatisticsBalanceShiftTrend, PendingProgressCard },
    name:'FlowStatistics',
    mounted(){
        this.fetchAccountList()
    },
    
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
                this.$t('fund.fetchBalanceShiftAc'),
                this.$t('fund.findAccounts')
            ],
            showPendingCnt:0
        }
    },
    methods:{
        fetchAccountList(){
            setTimeout(
                ()=>{
                    getAccountList().then(response=>{
                        this.accountList.splice(0,this.accountList.length)
                        let i=0;
                        for(;i<response.data.length;i++){
                            this.accountList.push(null)
                            this.$set(this.accountList,i,'('+response.data[i].id+')'+response.data[i].name)
                        }
                        console.log("xxxxx")
                        console.log(this.accountList)
                        this.showPendingCnt++;
                        this.completeTask(4)
                    }).catch( err => {
                        this.showPendingCnt++;
                        this.completeTask(4)
                        this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                        this.$refs.error_done.showAlert();
                    });
                },1000
            )
        },
        submitFailTip(x){
            this.$store.dispatch('showToastNotify',{type:'error',info:x})
        },
        initiateFilter(){
            let year0=this.submitEndDate.split("-")[0];
            let month0=this.submitEndDate.split("-")[1]-1;
            let day0=this.submitEndDate.split("-")[2];
            let date0= new Date(year0,month0,day0)

            let year1=this.submitBeginDate.split("-")[0];
            let month1=this.submitBeginDate.split("-")[1]-1;
            let day1=this.submitBeginDate.split("-")[2];
            let date1= new Date(year1,month1,day1)
            let date2 = new Date()
            if(date1>date2){
                this.submitFailTip(this.$t('fund.DateAhead'))
                return 0;
            }
            if(date0>date2){
                this.submitFailTip(this.$t('fund.DateAhead'))
                return 0;
            }
            if(date1>date0){
                this.submitFailTip(this.$t('fund.endDateTooEarly'))
                return 0;
            }
            this.showPending=1
            this.showPendingCnt=0
            this.$refs.pending.reset();
            this.$refs.flowstat_bk1.loadData();
            this.$refs.flowstat_bk2.loadData();
            this.$refs.flowstat_bk3.loadData();
            this.fetchAccountList()
        },
        completeTask(x){
            this.$refs.pending.complete(x);
            console.log('complete')
            this.showPendingCnt++;
            if(this.showPendingCnt===4){
                this.showPending=0;
                this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('common2.transactionDone')})
            
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