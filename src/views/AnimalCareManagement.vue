<template>
    <div class="zms-anicare">
        <span class="zms-anicare-title zms-primary-color">
            <v-icon color="primary">mdi-needle</v-icon> 动物医疗管理
        </span>
        <ani-care-container/>
    </div>
</template>

<script>
import AniCareContainer from '../components/AnimalCareComponents/AniCareContainer.vue'

export default {
    name: 'AnimalCareManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.animalCare})
    },
    components:{
        AniCareContainer,
    }
  
}
</script>
<style scoped lang="scss">
    .zms-anicare{
        margin-top:10px;
    }
    .zms-anicare-title{
        font-size:23px;
        font-weight: bold;
        letter-spacing: 1px;
    }
</style>