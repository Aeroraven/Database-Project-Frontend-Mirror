<template>
    <div>
        <v-card :ripple="{class:null}">
            <v-tabs v-model="sortTypeTab">
                <v-tabs-slider/>
                <v-tab href="#tab-1">
                    {{$t('fund.byAccounts')}}
                    <v-icon>mdi-account</v-icon>
                </v-tab>
                <v-tab href="#tab-2">
                    {{$t('fund.byCategory')}}
                    <v-icon>mdi-tag</v-icon>
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="sortTypeTab">
                <v-tab-item :value="`tab-1`">
                    <v-container>
                        <v-row>
                            <v-col>
                                <div class="zms-qtx-adjust">
                                    
                                    <span class="zms-query-titlex primary--text">{{$t('fund.accIncome')}}</span><br/>
                                </div>
                                <ec-pie-charts/>
                            </v-col>
                            <v-divider vertical class="zms-vert-divider-adjust"/>
                            <v-col>
                                <div class="zms-qtx-adjust">
                                    
                                    <span class="zms-query-titlex primary--text">{{$t('fund.accExpense')}}</span><br/>
                                </div>
                                <ec-pie-charts/>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tab-item>
                <v-tab-item :value="`tab-2`">
                    <v-container>
                        <v-row>
                            <v-col>
                                <div class="zms-qtx-adjust">
                                    
                                    <span class="zms-query-titlex primary--text">{{$t('fund.cateIncome')}}</span><br/>
                                </div>
                                <ec-pie-charts/>
                            </v-col>
                            <v-divider vertical/>
                            <v-col>
                                <div class="zms-qtx-adjust">
                                    
                                    <span class="zms-query-titlex primary--text">{{$t('fund.cateExpense')}}</span><br/>
                                </div>
                                <ec-pie-charts/>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>
<script>
import EcPieCharts from '../ChartComponents/EcPieCharts.vue'
import {getAccountIncomesOverview,getAccountExpenseOverview} from '../../apis/fund'
export default{
    components: { EcPieCharts },
    name:'FlowStatisticsPieOverview',
    data(){
        return {
            sortTypeTab:'tab-1',
            completeStat:0,
        }
    },
    created(){
        this.loadData()
    },
    methods:{
        checkComplete(){
            if(this.completeStat===2){
                this.$emit('zmsComplete');
                console.log('emit')

            }
        },
        loadData(){
            setTimeout(
                ()=>{
                    getAccountIncomesOverview().then(response => {
                        this.completeStat++;
                        this.checkComplete();
                    })
                },5000
            )
            setTimeout(
                ()=>{
                    getAccountExpenseOverview().then(response => {
                        this.completeStat++;
                        this.checkComplete();
                    })
                },5000
            )
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
    .zms-vert-divider-adjust{
        position:relative;
        padding-right:20px !important;
    }
</style>