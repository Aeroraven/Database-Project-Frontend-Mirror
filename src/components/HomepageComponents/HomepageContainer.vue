<template>
    <div class="zms-home-container">
        <v-container fluid class="fill-height justify-center">
            <v-row align="center" class="mx-0">
                <v-col cols="12" lg="6" xl="6" class="zms-top-align">
                    <homepage-welcome/>
                </v-col>
                <v-col cols="12" lg="6" xl="6" class="zms-top-align">
                    <homepage-account-overview/>
                    <homepage-overview/>
                </v-col>
                <v-col cols="12" md="6" class="align-self-stretch">
                    <homepage-notice/>
                </v-col>
                <v-col cols="12" md="6" class="align-self-stretch">
                    <homepage-quick-launch/>
                </v-col>
                <v-col cols="12" md="6" class="align-self-stretch">
                    <homepage-task-overview/>
                </v-col>
                <v-col cols="12" md="6" class="align-self-stretch">
                    <homepage-task-overview/>
                </v-col>
                <!--<v-col cols="12" md="6" class="align-self-stretch">
                    <homepage-work-overview/>
                </v-col>-->
                
            </v-row>
      </v-container>
      
      
  </div>
</template>

<script>
import HomepageWelcome from './HomepageWelcome.vue'
import HomepageNotice from './HomepageNotice.vue';
import HomepageOverview from './HomepageOverview.vue';
import HomepageWorkOverview from './HomepageWorkOverview.vue'
import HomepageQuickLaunch from './HomepageQuickLaunch.vue';
import HomepageAccountOverview from './HomepageAccountOverview.vue';
import HomepageTaskOverview from './HomepageTaskOverview.vue';
import DisintegrateButton from '../Gadgets/DisintegrateButton.vue';
export default {
  components: {HomepageWelcome,HomepageNotice, HomepageOverview ,HomepageWorkOverview, HomepageQuickLaunch, HomepageAccountOverview, HomepageTaskOverview, DisintegrateButton },
  name: 'HomepageContainer',
  props:{
      drawer:Boolean,
  },
  data: () => ({
    
  }),
  computed:{
   
  },
  methods:{
    
  }
};
</script>

<style scoped lang="scss">
    .zms-top-align{
        vertical-align: top;
    }
</style>