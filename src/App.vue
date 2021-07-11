<template>
  <v-app>
    <v-fab-transition>
      <div class="wrap" v-if="showLoadingComponent">
        <dynamic-title/>
      </div>
    </v-fab-transition>
    <v-navigation-drawer :class="rejectMouse" v-model="drawer" absolute temporary app style="width:350px">
      <navigator :lock="locked"></navigator>
    </v-navigation-drawer>
    <v-app-bar app color="primary" v-if="showTopNavbar" transition="slide-x-transition"> 
      <v-app-bar-nav-icon color="white"  @click="switchDrawer"></v-app-bar-nav-icon>
      
      <vue-typing 
      :text="$t(getAppbarTitle)" 
      :rewrite="true"  
      class="zms-wider-letterspacing zms-app-barx"  
      :class="getAppbarStyleClass"  
      :framerate="2" :cursorOptions="zmsVueTypingCursor" />
      
      <appbar-ext @lockPress="switchLock()"
       class="zms-right"></appbar-ext>
    </v-app-bar>
    <v-main>
      <div class="wrap" :class="zmsLock">
        <disintegrate-button 
        @disbtn_complete_all="unlockLockBtn"
        @disbtn_complete="switchLock2"
        ref="disint_btn" class="zms-lock-screen " />
      </div>
      
      <v-container fluid>
        <!--<embedded-frame path="/live2d-gadget.html" v-if="this.$store.state.bUseL2D"/>-->
        <page-container/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getList } from './apis/debug'
import AppbarExt from './components/AppBar/AppbarExt.vue';
import EmbeddedFrame from './components/Gadgets/EmbeddedFrame.vue';
import Navigator from './components/Navigatior/Navigator.vue';
import PageContainer from './components/PageContainer.vue';
import DisintegrateButton from './components/Gadgets/DisintegrateButton.vue';
import DynamicTitle from './components/Gadgets/DynamicTitle.vue';
import VueTyping from 'vue-typing'
export default {
  name: 'App',
  components:{
    Navigator,
    AppbarExt,
    PageContainer,
    EmbeddedFrame,
    DynamicTitle,
    DisintegrateButton,
    VueTyping
  },
    EmbeddedFrame,
  data: () =>{
    return{
      drawer: false,
      allowL2D:true,
      locked:false,
      lockStatus:false,
      showLoadingComponent:true,
      zmsVueTypingCursor:{ blinking: true, cursor: "|", color: "black", framerate: 5},
    }
  },
  computed:{
    rejectMouse(){
      return{
        'zms-reject-mouse':this.locked
      }
    },
    zmsLock(){
        return{
          'zms-hidden':this.locked==false
        }
      },
    getAppbarTitle(){
      return this.$store.state.sTopBarTitle;
    },
    getAppbarStyleClass(){
      return {
        'zms-white':true
      }
    },
    showTopNavbar(){
      if(this.$route.path.toLowerCase()!='/login'){
        return true;
      }
      return false
    }
  },
  created(){
    //Apply Dark Mode
    let darkMode = localStorage.getItem('zmsAppearance.darkMode')
    if(isNaN(darkMode)||darkMode==''||darkMode==='false'){
      this.$vuetify.theme.dark=false;
    }
    if(darkMode==='true'){
      this.$vuetify.theme.dark=true
    }
    //Default Lang Setting
    let defLang=localStorage.getItem('zmsAppearance.lang')
    if(!isNaN(defLang)&&defLang!=''&&!isNaN(parseInt(defLang))){
      this.$store.state.defaultLang=parseInt(defLang)
      console.log(defLang)
      console.log(this.$store.state.defaultLang)
      if(Object.prototype.hasOwnProperty.call(this.$store.state.langOpts[this.$store.state.defaultLang],'cd')){
        this.$i18n.locale=this.$store.state.langOpts[this.$store.state.defaultLang].cd
      }else{
        this.$i18n.locale='en-US'
      }
      
      console.log('AAAAAAAAAAAA')
      console.log(this.$i18n.locale)
    }
    //Hide Loading Wrapper
    setTimeout(
      ()=>{
        this.showLoadingComponent=false
      },5000
    )
  },
  methods:{
    switchDrawer(){
      if(this.locked){
        return 0;
      }
      this.drawer=!this.drawer;
    },
    switchLock(){
      if(this.lockStatus){
        return;
      }
      this.lockStatus=true
      if(this.locked===false){
        console.log("CALL A")
        this.locked=!this.locked;
        this.$refs.disint_btn.switchState()
      }else{
        console.log("CALL B")
        this.$refs.disint_btn.switchState()
      }
    },
    switchLock2(){
      this.locked=!this.locked;
      console.log("Changed Lock")
    },
    unlockLockBtn(){
      this.lockStatus=false;
    }
    
  },
  mounted(){
    //getList();
  }
};
</script>
<style scoped lang="scss">
  $body-font-family: 'PTSans','HanSans';
  .v-application {
      font-family: $body-font-family, sans-serif !important;
  }
  .zms-right{
    position: fixed;
    right:20px;
  }
  .zms-hidden{
    display: none;
  }
  .wrap{
    position: absolute;
    bottom:0px;
    top:0px;
    left:0px;
    right:0px;
    z-index: 99999999;
    overflow: hidden;
  }
  #app{
    user-select: none;
  }
  .zms-app-barx{
    font-size:21px;
  }
</style>
