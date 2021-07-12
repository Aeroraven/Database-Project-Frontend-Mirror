<template>
    <div class="home">
        <ani-info-container/>
    </div>
</template>

<script>
import  AniInfoContainer from  '../components/AnimalInformation/AniInfoContainer.vue'

export default {
    name: 'AnimalInfoManagement',
    components:{
        AniInfoContainer,
    }, created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.animalInfo})
    }
}
</script>
<style scoped lang="scss">

</style>
