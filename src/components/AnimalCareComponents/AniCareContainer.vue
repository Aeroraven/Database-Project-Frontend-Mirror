<template>
    <div class="zms-anicare">
        <template>
            <v-tabs fixed-tabs background-color="primary" class="rounded" dark v-model="tab">
                <v-tab :key="1">
                    {{$t('animalCareMain.infoOverview')}}
                </v-tab>
                <v-tab :key="2">
                    {{$t('animalCareMain.initiateRequest')}}
                </v-tab>
                
            </v-tabs>
            <v-tabs-items v-model="tab" color="transparent" class="rounded-lg">
                <v-tab-item color="transparent" class="rounded-lg  zms-transparent-bg" :key="1">
                    <ani-care-query/>
                </v-tab-item>
                <v-tab-item color="transparent" class="rounded-lg" :key="2">
                    <ani-care-create/>
                </v-tab-item>
                
            </v-tabs-items>
        </template>
    </div>
</template>

<script>
import AniCareCreate from './AniCareCreates.vue'
import AniCareQuery from './AniCareQuery.vue'

export default {
    name: 'AniCareContainer',
    created(){
    },
    methods:{
        
    },
    components:{
        AniCareQuery,
        AniCareCreate,
    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    
</style>