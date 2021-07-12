<template>
    <div class="zms-ConvenienceService">
        <template>
            <v-tabs fixed-tabs background-color="primary" class="rounded" dark v-model="tab">
                <v-tab :key="1">
                    便民服务信息概览
                </v-tab>
                <v-tab :key="2">
                    填报便民服务信息
                </v-tab>
                
            </v-tabs>
            <v-tabs-items v-model="tab" color="transparent" class="rounded-lg">
                <v-tab-item color="transparent" class="rounded-lg  zms-transparent-bg" :key="1">
                  <convenience-service-query/>
                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg" :key="2">
                   <convenience-service-create/>
               </v-tab-item>
                
            </v-tabs-items>
        </template>
    </div>
</template>

<script>
import ConvenienceServiceCreate from './ConvenienceServiceCreates.vue'
import ConvenienceServiceQuery from './ConvenienceServiceQuery.vue'

export default {
    name: 'ConvenienceServiceContainer',
    created(){
    },
    methods:{
        
    },
    components:{
        ConvenienceServiceQuery,
        ConvenienceServiceCreate,
    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    
</style>