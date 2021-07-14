<template>
    <div>
        <v-chart v-if="showX" class="chart" :theme='this.$vuetify.theme.dark?"dark":"light"' :option.sync="option" autoresize />
    </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
    name: "ECPieCharts",
    components: {
        VChart
    },
    provide: {
        
    },
    props:{
        zmsChartTitle:String,
        zmsChartLegend:Array,
        zmsChartData:Array,
        zmsChartXAxis:Array,
    },
    mounted(){
        
    },
    methods:{
        setResize(){
            let _this = this;
            window.onresize = function() {
                _this.option.resize()
                console.log("Triggered");
            }
        },
        applyChanges(){
            console.log('=====ZMS Legend======')
            console.log(this.zmsChartLegend)
            console.log('=====ZMS zmsChartData======')
            console.log(this.zmsChartData)

            this.option.title.text=this.zmsChartTitle;
            //this.option.series=this.zmsChartData

            this.option.series.splice(0,this.option.series.length)
            for(let i=0;i<this.zmsChartData.length;i++){
                this.$set(this.option.series,i,this.zmsChartData[i])
            }

            this.option.legend.data.splice(0,this.option.legend.data.length)
            for(let i=0;i<this.option.legend.data.length;i++){
                this.$set(this.option.legend.data,i,this.zmsChartLegend[i])
            }
            //this.option.legend.data=this.zmsChartLegend
            this.option.xAxis.data=this.zmsChartXAxis
            
            this.showX=true
        }
    },
    data() {
        return {
            showX:false,
            option: {
                title: {
                    text: "Traffic Sources",
                    left: "center"
                },
                legend: {
                    orient: "horizontal",
                    x:'center',      //可设定图例在左、右、居中
                    y:'bottom',     //可设定图例在上、下、居中
                    data: ['招商银行', '浦发银行', '广发银行', '上海银行']
                },
                tooltip: {
                    trigger: 'axis'   // axis   item   none三个值
                },
                xAxis: {
                    type: 'category',   // 还有其他的type，可以去官网喵两眼哦
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],   // x轴数据
                    name: 'Date',   // x轴名称
                    // x轴名称样式
                    nameTextStyle: {
                        fontWeight: 600,
                        fontSize: 18
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '金额',   // y轴名称
                    // y轴名称样式
                    nameTextStyle: {
                        fontWeight: 600,
                        fontSize: 18
                    },
                   
                },
                series: [
                    {
                        name: '招商银行',
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    },
                    {
                        name: '浦发银行',
                        data: [620, 711, 823, 934, 1445, 1456, 1178],
                        type: 'line'
                    },
                    {
                        name: '广发银行',
                        data: [612, 920, 1140, 1160, 1190, 1234, 1321],
                        type: 'line'
                    },
                    {
                        name: '上海银行',
                        data: [234, 320, 453, 567, 789, 999, 1200],
                        type: 'line'
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