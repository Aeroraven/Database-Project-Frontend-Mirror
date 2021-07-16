<template>
    <div class="zms-showticket">
        <template>
            <v-tabs fixed-tabs background-color="primary" class="rounded" dark v-model="tab">
                <v-tab :key="1">
                    演出票流水查询
                </v-tab>
                <v-tab :key="2">
                    修改演出票信息
                </v-tab>
                
            </v-tabs>
            <v-tabs-items v-model="tab" color="transparent" class="rounded-lg">
                <v-tab-item color="transparent" class="rounded-lg  zms-transparent-bg" :key="1">
                  <show-ticket-query/>
                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg" :key="2">
                 <!--  <show-ticket-create/> -->
                  <show-ticket-motify/>
               </v-tab-item>
                
            </v-tabs-items>
        </template>
    </div>
</template>

<script>
import ShowTicketCreate from './ShowTicketCreates.vue'
import ShowTicketQuery from './ShowTicketQuery.vue'
import ShowTicketMotify from './ShowTicketMotify.vue'

export default {
    name: 'ShowTicketContainer',
    created(){
    },
    methods:{
        
    },
    components:{
        ShowTicketQuery,
        ShowTicketCreate,
        ShowTicketMotify,

    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    
</style>