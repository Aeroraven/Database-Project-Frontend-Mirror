<template>
    <div class="zms-anishow">
        <template>
            <v-tabs fixed-tabs background-color="primary" class="rounded" dark v-model="tab">
                <v-tab :key="1">
                    演出信息概览
                </v-tab>
                <v-tab :key="2">
                    填报演出信息
                </v-tab>
                
            </v-tabs>
            <v-tabs-items v-model="tab" color="transparent" class="rounded-lg">
                <v-tab-item color="transparent" class="rounded-lg  zms-transparent-bg" :key="1">
                <!--    <ani-show-temp/> -->

                  <ani-show-info-query/> 
                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg" :key="2">
                   <ani-show-info-create/>
               </v-tab-item>
               <v-tab-item color="transparent" class="rounded-lg" :key="2">
               
               </v-tab-item>

            </v-tabs-items>
        </template>
    </div>
</template>

<script>
import AniShowInfoCreate from './AniShowInfoCreates.vue'
import AniShowInfoQuery from './AniShowInfoQuery.vue'

export default {
    name: 'AniShowInfoContainer',
    created(){
    },
    methods:{
        
    },
    components:{
        AniShowInfoQuery,
        AniShowInfoCreate,
      //  AniShowTemp,

    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    
</style>