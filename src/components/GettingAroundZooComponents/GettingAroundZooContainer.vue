<template>
    <div class="zms-GettingAroundZoo">
        <template>
            <v-tabs fixed-tabs background-color="primary" class="rounded" dark v-model="tab">
                <v-tab :key="1">
                    园内交通信息概览
                </v-tab>
                <v-tab :key="2">
                    填报园内交通信息
                </v-tab>
                
            </v-tabs>
            <v-tabs-items v-model="tab" color="transparent" class="rounded-lg">
                <v-tab-item color="transparent" class="rounded-lg  zms-transparent-bg" :key="1">
                  <getting-around-zoo-query/>
                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg" :key="2">
                   <getting-around-zoo-create/>
               </v-tab-item>
                
            </v-tabs-items>
        </template>
    </div>
</template>

<script>
import GettingAroundZooCreate from './GettingAroundZooCreates.vue'
import GettingAroundZooQuery from './GettingAroundZooQuery.vue'

export default {
    name: 'GettingAroundZooContainer',
    created(){
    },
    methods:{
        
    },
    components:{
        GettingAroundZooQuery,
        GettingAroundZooCreate,
    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    
</style>