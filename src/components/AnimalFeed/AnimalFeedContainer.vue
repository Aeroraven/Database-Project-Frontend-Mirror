<template>
    <div class="zms-animal-feed">

        <!--<v-container>
            <v-row no-gutters>
                <v-col class="recipe-info" >
                    <div class="zms-fixed-height">
                        <animal-recipes-info/>
                    </div>
                </v-col>
                <v-col class="feed-info" >
                    <div class="zms-fixed-height">
                        <animal-feed-info/>
                    </div>
                </v-col>
            </v-row>
        </v-container>-->
        <table>
            <tr>
                <td >
                    <div class="zms-fixed-height">
                        <animal-recipes-info/>
                    </div>
                </td>
                <td valign="top">
                    <div class="zms-fixed-height">
                        <animal-feed-info/>
                    </div>
                </td>
            </tr>
        </table>
        
            
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
<style scoped lang="scss">
    .zms-fixed-height{
        //position:fixed;
        width:95%;
        margin-right:20px;
        bottom: 0px;
        top:95px;
        overflow: scroll;
        display: inline-block;
    }
    table{
        width:100%;
    }
    table, td,tr{
        table-layout : fixed
    }
    td{
        width:50%;
        vertical-align:top;
    }
</style>