<template>
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
    </div>
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
         
        }
    }
  
}
</script>