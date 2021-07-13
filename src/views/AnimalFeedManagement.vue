<template>
    <div class="home">
        <animal-feed-container/>
    </div>
</template>

<script>
import AnimalFeedContainer from '../components/AnimalFeed/AnimalFeedContainer.vue'
export default {
    name: 'AnimalFeedManagement',
    components:{AnimalFeedContainer},
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:this.$store.state.sPageName.animalFeed})
    }
}
</script>
<style scoped lang="scss">

</style>