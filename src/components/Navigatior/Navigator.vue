<template>
  <div class="zms-navigator-container" style="transition:all .5s">
      <slidebar-head-icon></slidebar-head-icon>
      <v-divider></v-divider>
      <div class="zms-navigator-body">
        <v-list dense nav class="zms-bold">
          <v-list-group v-haptic v-for="item in getNavigatorPrimaryItems" :key="item.name" app link nav >
            <template v-slot:activator   app link nav>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content >
                  <v-list-item-title class="font-weight-bold">{{ item.name }}</v-list-item-title>
                </v-list-item-content>
            </template>
            <v-list-item v-for="item2 in item.child" :key="item2.name" app link nav @click="routerGo(item2.route)">
              <v-list-item-content>
                <v-list-item-title><span class="zms-nav-padding">{{ item2.name }}</span></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>{{ item2.icon }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list>
        <hr/>
        <div class="zms-halfwidth zms-inlb">
          <v-btn outlined block class="zms-fullwidth"  color="" style="border-color:#AAAAAA">
            <v-icon>mdi-refresh</v-icon>重载
          </v-btn>
          
        </div>
        <div class="zms-halfwidth zms-inlb">
          <v-btn outlined block class="zms-fullwidth"  color="" style="border-color:#AAAAAA">
            <v-icon>mdi-cog</v-icon>设置
          </v-btn>
        </div>
        
      </div>
  </div>
</template>

<script>
import SlidebarHeadIcon from './SlidebarHeadIcon.vue';

export default {
  components: { SlidebarHeadIcon },
  name: 'Navigator',
  props:{
      drawer:Boolean,
  },
  data: () => ({
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' },
    ],
    placeholders:[SlidebarHeadIcon],
  }),
  computed:{
    getNavigatorPrimaryItems(){
      return this.$store.state.sProjectFunctions;
    }
  },
  methods:{
    routerGo(x){
      this.$router.push(x);
    }
  }
};
</script>

<style scoped lang="scss">
  .zms-navigator-container{
    height:100%;
    overflow:overlay;
    padding-bottom:300px;
  }
  .zms-navigator-pri-item{
    border-radius:15px;
    font-size:15px;
    font-weight: bold;
  }
</style>