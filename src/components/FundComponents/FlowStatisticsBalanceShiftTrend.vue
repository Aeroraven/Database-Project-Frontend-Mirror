<template>
    <div>
        <alert-messagebox     
        :alertTitle="$t('common3.transactionFailTitle')"
        :alertBody="$t('common3.transactionFail')+errorInfo"
        :alertLevel="`error`"
        :alertOnlyConfirm="true"
        ref="error_done" />

        <ec-waterfall-bar-chart
        ref="ec_balance_shift"
        :zmsChartTitle="$t('fund.balanceShiftChartTitle')"
        :zmsChartXAxis="chartXAxis"
        :zmsChartData="chartData"/>
    </div>
</template>
<script>
import EcWaterfallBarChart from '../ChartComponents/EcWaterfallBarChart.vue'
import {getOverallBalanceShift} from '../../apis/fund'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
export default{
    components: { EcWaterfallBarChart, AlertMessagebox },
    name:'FlowStatisticsBalanceShift',
    data(){
        return {
            completeStat:0,
            chartXAxis:[],
            chartData:[]
        }
    },
    created(){
        this.loadData()
    },
    methods:{
        checkComplete(){
            if(this.completeStat===1){
                this.$emit('zmsComplete');
                console.log('emit')

            }
        },
        loadData(){
            this.completeStat=0;
            setTimeout(
                ()=>{
                    getOverallBalanceShift().then(response => {
                        this.chartXAxis.splice(0,this.chartXAxis.length)
                        this.chartData.splice(0,this.chartData.length)
                        let i=0
                        for(;i<response.data.date.length;i++){
                            this.chartXAxis.push(null)
                            this.$set(this.chartXAxis,i,response.data.date[i])
                        }
                        i=0
                        for(;i<response.data.values.length;i++){
                            this.chartData.push(null)
                            this.$set(this.chartData,i,response.data.values[i])
                        }
                        console.log("VVVVVVVVV")
                        console.log(this.chartData)
                        this.completeStat++;
                        this.checkComplete();
                        this.$refs.ec_balance_shift.applyChanges();
                    }).catch( err => {
                        this.completeStat++;
                        this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                        this.$refs.error_done.showAlert();
                        this.checkComplete();
                    });
                },1000
            )
        }
    }
}
</script>
<style scoped>

</style>