<template>
    <div>
        <ec-line-chart/>
    </div>
</template>
<script>
import EcLineChart from '../ChartComponents/EcLineChart.vue'
import {getOverallBalanceShift} from '../../apis/fund'
export default{
    components: { EcLineChart },
    name:'FlowStatisticsBalanceShiftDetails',
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
                    getOverallBalanceShift().then(response => {
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