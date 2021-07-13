<template>
    <div class="zms-animal-feed">

        <v-container>
            <v-row>
                <v-col class="recipe-info" cols=12 sm=6>
                    <div class="zms-fixed-height">
                        <animal-recipes-info/>
                    </div>
                </v-col>
                <v-col class="feed-info" cols=12 sm=6 position:fixed>
                    <div class="zms-fixed-height">
                        <animal-feed-info/>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import AnimalRecipesInfo from './AnimalRecipesInfo.vue'
import AnimalFeedInfo from './AnimalFeedInfo.vue'
export default{
    name: 'AnimalFeedContainer',
    components:{
        AnimalRecipesInfo,
        AnimalFeedInfo
    }
   
}
</script>
<style>
    .zms-fixed-height{
        position:fixed;
        width:45%;
        bottom: 0px;
        top:95px;
        overflow: scroll;
    }
</style>