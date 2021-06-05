<template>
    <div class="zms-anicare">
        <template>
            <v-tabs fixed-tabs background-color="primary" class="rounded" dark v-model="tab">
                <v-tab :key="1">
                    救护信息概览
                </v-tab>
                <v-tab :key="2">
                    填报救助信息
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
import AniCareQuery from './AniCareQuery.vue'
import AniCareCreate from '@/components/AnimalCareComponents/AniCareCreate.vue'
export default {
    name: 'AnicareContainer',
    created(){
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