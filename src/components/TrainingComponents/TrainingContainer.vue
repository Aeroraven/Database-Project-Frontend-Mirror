<template>
    <div class="zms-training">
        <template>
            <v-tabs fixed-tabs background-color="primary" class="rounded" dark v-model="tab">
                <v-tab :key="1">
                    训练信息概览
                </v-tab>
                <v-tab :key="2">
                    填报训练信息
                </v-tab>
                
            </v-tabs>
            <v-tabs-items v-model="tab" color="transparent" class="rounded-lg">
                <v-tab-item color="transparent" class="rounded-lg  zms-transparent-bg" :key="1">
                  <training-query/>
                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg" :key="2">
                   <training-create/>
               </v-tab-item>
                
            </v-tabs-items>
        </template>
    </div>
</template>

<script>
import TrainingCreate from './TrainingCreates.vue'
import TrainingQuery from './TrainingQuery.vue'

export default {
    name: 'TrainingContainer',
    created(){
    },
    methods:{
        
    },
    components:{
        TrainingQuery,
        TrainingCreate,
    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    
</style>