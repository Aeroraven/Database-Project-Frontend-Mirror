<template>
    <v-chart class="chart" :option="option" autoresize />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
    name: "HelloWorld",
    components: {
        VChart
    },
    provide: {
        [THEME_KEY]: "light"
    },
    mounted(){
        let _this = this;
        window.onresize = function() {
            _this.option.resize()
            console.log("Triggered");
        }
    },
    data() {
        return {
            option: {
                title: {
                    text: "Traffic Sources",
                    left: "center"
                },
                legend: {
                    orient: "vertical",
                    x:'right',      //可设定图例在左、右、居中
                    y:'center',     //可设定图例在上、下、居中
                    data: ['招商银行', '浦发银行', '广发银行', '上海银行']
                },
                tooltip: {
                    trigger: 'axis'   // axis   item   none三个值
                },
                xAxis: {
                    type: 'category',   // 还有其他的type，可以去官网喵两眼哦
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],   // x轴数据
                    name: '日期',   // x轴名称
                    // x轴名称样式
                    nameTextStyle: {
                        fontWeight: 600,
                        fontSize: 18
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '纵轴名称',   // y轴名称
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