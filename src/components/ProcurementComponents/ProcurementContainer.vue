<template>
    <div class="zms-anicare">
        <template>
            <v-tabs vertical background-color="primary"  dark v-model="tab">
                <v-tab :key="1">
                    <v-icon left>mdi-magnify</v-icon>采购总览
                </v-tab>
                <v-tab :key="2">
                    <v-icon left>mdi-arrow-collapse-up</v-icon>发起采购
                </v-tab>
                <v-tab :key="3">
                    <v-icon left>mdi-checkbox-marked-circle-outline</v-icon>采购审批
                </v-tab>
                <!--
                <v-tab :key="4">
                    <v-icon left>mdi-key-variant</v-icon>权限管理
                </v-tab>-->
            
                <!--<v-tabs-items v-model="tab" color="transparent" class="rounded-lg">-->
                
                    <v-tab-item color="transparent" class="rounded-lg zms-vert-tabitem  zms-transparent-bg" :key="1">
                        <echart-example/>
                        <echart-line-chart-example/>
                    </v-tab-item>
                    <v-tab-item color="transparent" class="rounded-lg zms-vert-tabitem" :key="2">
                        <flow-record/>
                    </v-tab-item>
                    <v-tab-item color="transparent" class="rounded-lg zms-vert-tabitem" :key="3">
                        <bank-account-overview/>
                    </v-tab-item>
                    <v-tab-item color="transparent" class="rounded-lg zms-vert-tabitem" :key="4">
                        4
                    </v-tab-item>
                <!--</v-tabs-items>-->
            </v-tabs>
        </template>
    </div>
</template>

<script>

export default {
    name: 'ProcurementContainer',
    created(){
    },
    methods:{
      
    },
    components:{
        
    },data:()=>{
         return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    .zms-vert-tabitem{
        margin-left:20px;
        margin-top:20px;
        //height: 500px;
    }
</style>