<template>
    <div class="home">
        这里放动物信息管理
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