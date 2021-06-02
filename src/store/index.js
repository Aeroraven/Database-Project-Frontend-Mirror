import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store= new Vuex.Store({
  state: {
    //Resources
    sAsset_HamburgerImg:'assets/top-navigation-bar-hamburger.png',
    //Projects Definitions
    sProjectName:"ZMS 管理系统",
    //Style Control
    scSlideBarLeft:200,
    scSlideBarLeftInitial:40,
    scSlideBarCalloutStat:0,
    //Style Control Constants
    sSlideBarLeft:40,
  },
  mutations: {
    calloutSlideBar(){
      this.state.scSlideBarCalloutStat=1-this.state.scSlideBarCalloutStat;
      if(this.state.scSlideBarCalloutStat===1){
        this.state.sSlideBarLeft=this.state.scSlideBarLeftInitial+this.state.scSlideBarLeft;
      }else{
        this.state.sSlideBarLeft=this.state.scSlideBarLeftInitial;
      }
      
    }
  },
  actions: {

  },
  modules: {
  }
})
export default store;
