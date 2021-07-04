<template>
    <div>
        <ec-waterfall-bar-chart/>
    </div>
</template>
<script>
import EcWaterfallBarChart from '../ChartComponents/EcWaterfallBarChart.vue'
import {getAccountBalanceShift} from '../../apis/fund'
export default{
    components: { EcWaterfallBarChart },
    name:'FlowStatisticsBalanceShift',
    data(){
        return {
            completeStat:0,
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
            setTimeout(
                ()=>{
                    getAccountBalanceShift().then(response => {
                        this.completeStat++;
                        this.checkComplete();
                    })
                },2000
            )
        }
    }
}
</script>
<style scoped>

</style>