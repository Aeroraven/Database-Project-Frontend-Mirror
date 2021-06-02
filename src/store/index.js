import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store= new Vuex.Store({
  state: {
    //资源路径
    sAsset_HamburgerImg:'assets/top-navigation-bar-hamburger.png',
    sAsset_SlidebarHeadIcon:'assets/slide-bar-head-icon.png',

    //项目常量
    sProjectName:"ZMS 管理系统",
    sTopBarTitle:"首页",
    sProjectFunctions:[
      {name:'动物管理',route:'',icon:'assets/slide-bar-animal-manage.png',child:[
        {name:'医疗管理',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
        {name:'信息管理',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
      ]},
      {name:'票务管理',child:{},route:'',icon:'assets/slide-bar-ticket-manage.png'},
      {name:'场馆管理',child:{},route:'',icon:'assets/slide-bar-facility-manage.png'},
      {name:'资金管理',child:{},route:'',icon:'assets/slide-bar-asset-manage.png'},
      {name:'仓库管理',child:{},route:'',icon:'assets/slide-bar-storage-manage.png'},
      {name:'员工管理',child:{},route:'',icon:'assets/slide-bar-personnel-manage.png'},

    ],

    //CSS相关定义
    scSlideBarLeft:300,
    scSlideBarLeftInitial:0,
    scSlideBarCalloutStat:0,

    //CSS相关变量
    sSlideBarLeft:0,
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
