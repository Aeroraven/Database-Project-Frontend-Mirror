<template>
    <div class="zms-VehicleManagement">
        <template>
            <v-tabs fixed-tabs background-color="primary" class="rounded" dark v-model="tab">
                <v-tab :key="1">
                    交通信息概览
                </v-tab>
                <v-tab :key="2">
                    填报交通信息
                </v-tab>
                
            </v-tabs>
            <v-tabs-items v-model="tab" color="transparent" class="rounded-lg">
                <v-tab-item color="transparent" class="rounded-lg  zms-transparent-bg" :key="1">
                  <vehicle-management-query/>
                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg" :key="2">
                   <vehicle-management-create/>
               </v-tab-item>
                
            </v-tabs-items>
        </template>
    </div>
</template>

<script>
import VehicleManagementCreate from './VehicleManagementCreates.vue'
import VehicleManagementQuery from './VehicleManagementQuery.vue'

export default {
    name: 'VehicleManagementContainer',
    created(){
    },
    methods:{
        
    },
    components:{
        VehicleManagementQuery,
        VehicleManagementCreate,
    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    
</style>