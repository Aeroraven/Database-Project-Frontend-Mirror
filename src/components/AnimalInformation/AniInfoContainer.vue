<template>
    <div class="zms-animalinfo">
        <template>
            <ani-info-query/>
        </template>
    </div>
</template>

<script>
import AniInfoQuery from './AniInfoQuery.vue'
export default {
    name: 'AniInfoContainer',
     created(){
    },
    components:{
        AniInfoQuery,
    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    
</style>