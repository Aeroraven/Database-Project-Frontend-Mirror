<template>
    <div class="home">
        这里放动物医疗管理
    </div>
</template>

<script>

export default {
    name: 'AnimalCareManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.animalCare})
    }
  
}
</script>
<style scoped lang="scss">

</style>