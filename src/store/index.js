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
        sPageName:{
            animalCare:'动物医疗管理',
            animalFeed:'动物喂养管理',
            animalInfo:'动物信息管理',
            animalRecipe:'动物食谱管理',
            animalReproduction:'动物繁育管理'
        },
        sProjectFunctions:[
          {name:'动物管理',route:'',icon:'assets/slide-bar-animal-manage.png',child:[
            {name:'医疗管理',route:'/animalCareManagement',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'信息管理',route:'/animalInfoManagement',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'食谱管理',route:'/animalRecipeManagement',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'喂养管理',route:'/animalFeedManagement',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'繁育管理',route:'/animalReproductionManagement',icon:'assets/slide-bar-animal-manage.png',child:[]},
          ]},
          {name:'演出管理',route:'',icon:'assets/slide-bar-animal-manage.png',child:[
            {name:'信息管理',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'训练管理',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
          ]},
          {name:'票务管理',route:'',icon:'assets/slide-bar-ticket-manage.png',child:[
            {name:'表演票务',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'门票票务',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
          ]},
          {name:'场馆管理',child:[],route:'',icon:'assets/slide-bar-facility-manage.png'},
          {name:'财务管理',route:'',icon:'assets/slide-bar-asset-manage.png',child:[
            {name:'资金记录',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'采购管理',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
          ]},
          {name:'仓库管理',child:[],route:'',icon:'assets/slide-bar-storage-manage.png'},
          {name:'员工管理',route:'',icon:'assets/slide-bar-personnel-manage.png',child:[
            {name:'员工信息',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'员工考核',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
          ]},
          {name:'导游管理',child:[],route:'',icon:'assets/slide-bar-personnel-manage.png'},
          {name:'交通管理',child:[],route:'',icon:'assets/slide-bar-personnel-manage.png'},
          {name:'便民服务',child:[],route:'',icon:'assets/slide-bar-personnel-manage.png'},
          

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
          
        },
        alterTopNavTitle(state,param){
            state.sTopBarTitle=param.title;
        }
    },
    actions: {
        alterTopNavTitle({commit},param){
            commit('alterTopNavTitle',param)
        }
    },
    modules: {
    }
})
export default store;
