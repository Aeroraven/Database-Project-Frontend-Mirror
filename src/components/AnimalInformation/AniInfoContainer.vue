<template>
    <div class="zms-animalinfo">
        <ani-info-query/>
    </div>
</template>

<script>
import AniInfoQuery from './AniInfoQuery.vue'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'

export default {
    name: 'AniInfoContainer',
     created(){
    },
    components:{
        AniInfoQuery,
        AlertMessagebox
    },data:()=>{
        return{
            tab:null,
        }
    }
  
}
</script>
<style scoped lang="scss">
    
</style>