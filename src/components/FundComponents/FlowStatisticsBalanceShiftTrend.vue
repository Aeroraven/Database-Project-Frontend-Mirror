<template>
  <div>
    <alert-messagebox
      :alertTitle="$t('common3.transactionFailTitle')"
      :alertBody="$t('common3.transactionFail')"
      :alertLevel="`error`"
      :alertOnlyConfirm="true"
      ref="error_done"
    />

    <ec-waterfall-bar-chart
      ref="ec_balance_shift"
      :zmsChartTitle="$t('fund.balanceShiftChartTitle')"
      :zmsChartXAxis="chartXAxis"
      :zmsChartData="chartData"
    />
  </div>
</template>
<script>
import EcWaterfallBarChart from "../ChartComponents/EcWaterfallBarChart.vue";
import { getOverallBalanceShift } from "../../apis/fund";
import AlertMessagebox from "../CommonComponents/AlertMessagebox.vue";
export default {
  components: { EcWaterfallBarChart, AlertMessagebox },
  name: "FlowStatisticsBalanceShift",
  data() {
    return {
      completeStat: 0,
      chartXAxis: [],
      chartData: [],
    };
  },
  mounted() {
    this.loadData();
  },
  props:{
    bgDate:String,
    edDate:String,
  },
  methods: {
    checkComplete() {
      if (this.completeStat === 1) {
        this.$emit("zmsComplete");
        console.log("emit");
      }
    },
    loadData() {
      this.completeStat = 0;
      setTimeout(() => {
        //var cardArray1 = this.cardArray[0];
        //var cardArray2 = this.cardArray[1];
        getOverallBalanceShift({
          begin_date: this.beginDate,
          end_date: this.endDate,
          //card_array1: cardArray1,
          //card_array2: cardArray2,
        })
          .then((response) => {
            let r=response.data
            let i = 0;
            for(let i=0;i<response.data.length;i++){
              r[i].year=r[i].date.substring(0,4)
              r[i].month=r[i].date.substring(5,7)
              r[i].weight=parseInt(parseInt(r[i].year)*100+parseInt(r[i].month))
            }
            r=r.sort(
              (a,b)=>{
                console.log(a.weight+'/'+b.weight)
                return parseInt(a.weight)-parseInt(b.weight)
              }
            )
            console.log(r)
            console.log('QQQQQQQQQQQQQ')
            i=0

            this.chartXAxis.splice(0, this.chartXAxis.length);
            this.chartData.splice(0, this.chartData.length);
            
            for (; i < response.data.length; i++) {
              this.chartXAxis.push(null);
              this.$set(this.chartXAxis, i, r[i].date);
            }
            i = 0;
            let preq=0
            for (; i < response.data.length; i++) {
              preq=preq+r[i].values
              this.chartData.push(null);
              this.$set(this.chartData, i, preq);
            }

            console.log("VVVVVVVVV");
            console.log(this.chartData);
            this.completeStat++;
            this.checkComplete();
            this.$refs.ec_balance_shift.applyChanges();

          })
          .catch((err) => {
            this.completeStat++;
            this.$refs.error_done.updateBody(
              this.$t("common3.transactionFail") + err
            );
            this.$refs.error_done.showAlert();
            this.checkComplete();
          });
      }, 1000);
    },
  },
};
</script>
<style scoped>
</style>