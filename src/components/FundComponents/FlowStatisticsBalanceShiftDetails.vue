<template>
  <div>
    <alert-messagebox
      :alertTitle="$t('common3.transactionFailTitle')"
      :alertBody="$t('common3.transactionFail') + errorInfo"
      :alertLevel="`error`"
      :alertOnlyConfirm="true"
      ref="error_done"
    />

    <ec-line-chart
      ref="ec_balance_shift_acc"
      :zmsChartData="chartData"
      :zmsChartTitle="$t('fund.balanceShiftChartTitle')"
      :zmsChartXAxis="chartXAxis"
      :zmsChartLegend="chartLegends"
    />
  </div>
</template>
<script>
import EcLineChart from "../ChartComponents/EcLineChart.vue";
import { getAccountBalanceShift } from "../../apis/fund";
export default {
  components: { EcLineChart },
  name: "FlowStatisticsBalanceShiftDetails",
  data() {
    return {
      completeStat: 0,
      chartData: [],
      chartLegends: [],
      chartXAxis: [],
    };
  },
  created() {
    this.loadData();
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
        getAccountBalanceShift({
          begin_date: this.beginDate,
          end_date: this.endDate,
          //card_array1: cardArray1,
          //card_array2: cardArray2,
        })
          .then((response) => {
            this.chartXAxis.splice(0, this.chartXAxis.length);
            this.chartData.splice(0, this.chartData.length);
            this.chartLegends.splice(0, this.chartData.chartLegends);
            let i = 0;
            for (; i < response.data.date.length; i++) {
              this.chartXAxis.push(null);
              this.$set(this.chartXAxis, i, response.data.date[i]);
            }
            i = 0;
            for (; i < response.data.values.length; i++) {
              this.chartData.push(null);
              this.$set(this.chartData, i, response.data.values[i]);
              this.chartLegends.push(null);
              this.$set(this.chartLegends, i, response.data.values[i].name);
            }
            this.completeStat++;
            this.checkComplete();
            this.$refs.ec_balance_shift_acc.applyChanges();
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