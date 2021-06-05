<template>
    <div class="home">
        这里放采购管理
    </div>
</template>

<script>

export default {
    name: 'ProcurementManagement',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.procurement})
    }
}
</script>
<style scoped lang="scss">

</style>