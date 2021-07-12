<template>
    <div class="home">
        这里放动物繁育管理
    </div>
</template>

<script>

export default {
    name: 'AnimalRecipeManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.animalReproduction})
    }
}
</script>
<style scoped lang="scss">

</style>