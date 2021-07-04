<template>
    <div>
        <v-chart class="chart" :theme='this.$vuetify.theme.dark?"dark":"light"' :option="option" autoresize />
    </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart,BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
    name: "EcWaterfallBarChart",
    components: {
        VChart
    },
    provide: {
        
    },
    props:{
        zmsChartTitle:String,
        zmsChartLegend:Array,
        zmsChartData:Array,
    },
    mounted(){
        let _this = this;
        window.onresize = function() {
            _this.option.resize()
            console.log("Triggered");
        }
    },
    methods:{
        applyChanges(){
            this.option.title.text=this.zmsChartTitle;
            this.option.legend.data=this.zmsChartLegend
            this.option.series[0].name=this.zmsChartTitle
            this.option.series[0].data=this.zmsChartData
        }
    },
    data() {
        return {
            option:{
                title: {
                    text: '阶梯瀑布图',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var tar;
                        if (params[1].value !== '-') {
                            tar = params[1];
                        }
                        else {
                            tar = params[0];
                        }
                        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                legend: {
                    data: ['支出', '收入']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    splitLine: {show: false},
                    data: function () {
                        var list = [];
                        for (var i = 1; i <= 11; i++) {
                            list.push('11月' + i + '日');
                        }
                        return list;
                    }()
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '辅助',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
                    },
                    {
                        name: '收入',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
                    },
                    {
                        name: '支出',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'bottom'
                        },
                        data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
                    }
                ]
            }
        };
    }
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>