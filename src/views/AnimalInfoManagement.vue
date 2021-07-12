<template>
    <div class="home">
        <ani-info-container/>
    </div>
</template>

<script>

export default {
    name: 'AnimalInfoManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.animalInfo})
    }
}
</script>
<style scoped lang="scss">

</style>
