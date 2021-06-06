<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary app style="overflow:hidden;width:300px">
      <navigator></navigator>
    </v-navigation-drawer>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon color="white"  @click="switchDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title :class="getAppbarStyleClass" v-html="getAppbarTitle" class="zms-wider-letterspacing"></v-app-bar-title>
      <appbar-ext class="zms-right"></appbar-ext>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <page-container/>
      </v-container>
    </v-main>

    <!--<v-footer app>
    </v-footer>-->
  </v-app>
</template>

<script>
import { getList } from './apis/debug'
import AppbarExt from './components/AppBar/AppbarExt.vue';
import Navigator from './components/Navigatior/Navigator.vue';
import PageContainer from './components/PageContainer.vue';

export default {
  name: 'App',
  components:{
    Navigator,
    AppbarExt,
    PageContainer,
  },
    
  data: () =>{
    return{
      drawer: false,
    }
  },
  computed:{
    getAppbarTitle(){
      return this.$store.state.sTopBarTitle;
    },
    getAppbarStyleClass(){
      return {
        'zms-white':true
      }
    }
  },
  created(){
    return 0;
  },
  methods:{
    switchDrawer(){
      this.drawer=!this.drawer;
    }
  },
  mounted(){
    //getList();
  }
};
</script>
<style scoped lang="scss">
  .zms-right{
    position: fixed;
    right:20px;

  }
  #app{
    user-select: none;
  }
</style>
