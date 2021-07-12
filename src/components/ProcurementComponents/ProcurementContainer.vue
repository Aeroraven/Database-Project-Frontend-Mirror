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
            
                <v-tabs-items v-model="tab" class="rounded-lg">
                
                    <v-tab-item  class="rounded-lg zms-vert-tabitem  zms-transparent-bg" :key="1">
                        <procurement-overview/>
                    </v-tab-item>
                    <v-tab-item  class="rounded-lg zms-vert-tabitem" :key="2">
                        
                    </v-tab-item>
                    <v-tab-item class="rounded-lg zms-vert-tabitem" :key="3">
                        
                    </v-tab-item>
                </v-tabs-items>
            </v-tabs>
        </template>
    </div>
</template>

<script>
import ProcurementOverview from './ProcurementOverview.vue'
export default {
    name: 'ProcurementContainer',
    created(){
    },
    methods:{
      
    },
    components:{
        ProcurementOverview
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