<template>

    <div>
        <v-tabs fixed-tabs background-color="primary" class="rounded" dark v-model="tab">
            <v-tab :key="1">
                繁育信息记录
            </v-tab>
            <v-tab :key="2">
                繁育信息上报
            </v-tab>
            
        </v-tabs>
        <v-tabs-items v-model="tab" color="transparent" class="rounded-lg">
            <v-tab-item class="rounded-lg " :key="1">
                <animal-breed-info/>
            </v-tab-item>
            <v-tab-item  class="rounded-lg" :key="2">
                <create-new-born-info/>
            </v-tab-item>
        </v-tabs-items>
    </div><!--
    <div class="zms-animalbreed">
        <v-container fluid class="fill-height justify-center">
            <v-row align="center" class="mx-0">
                 <v-col cols="12" md="12" class="align-self-stretch">
                <animal-breed-info/>
                </v-col>
            </v-row>
            <v-row align="center" class="mx-0">
                <create-new-born-info/>
            </v-row>
        </v-container>
    </div>-->
</template>
<script>
import AnimalBreedInfo from './AnimalBreedInfo.vue'
import CreateBirthInfo from './CreateBirthInfo.vue'
import CreateNewBornInfo from './CreateNewBornInfo.vue'

export default {
    name: 'AnimalBreedContainer',
     created(){
    },
    components:{
        AnimalBreedInfo,
        CreateBirthInfo,
        CreateNewBornInfo
    },data:()=>{
        return{
            tab:0
        }
    }
  
}
</script>