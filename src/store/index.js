import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store= new Vuex.Store({
    state: {
        //资源路径
        sAsset_HamburgerImg:'assets/top-navigation-bar-hamburger.png',
        sAsset_SlidebarHeadIcon:'assets/slide-bar-head-icon.png',
        sAsset_WelcomeIcon:'assets/welcome-icon.png',
        sAsset_PageBackground:'assets/background-trial.jpg',

        //项目常量
        sProjectName:"ZMS 管理系统",
        sTopBarTitle:'topbar.default',
        sPageName:{
            login:'topbar.login',
            mainPage:'topbar.mainPage',
            animalCare:'topbar.animalCare',
            animalFeed:'topbar.animalFeed',
            animalInfo:'topbar.animalInfo',
            animalRecipe:'topbar.animalRecipe',
            animalReproduction:'topbar.animalReproduction',
            warehouseManagement:'topbar.warehouseManagement',
            warehouseManagement_item:'topbar.warehouseManagement_item',
            warehouseManagement_info:'topbar.warehouseManagement_info',
            warehouseManagement_flowRecord:'topbar.warehouseManagement_flowRecord',
            fundManagement:'topbar.fundManagement',
            procurement:'topbar.procurement',
            employeeManagement:'员工管理',
            employeeManagement_flowRecord:'新增员工信息',
            employeeManagement_info:'员工信息管理',
            EmployeeItemManagement_item:'员工部门信息管理',
            EmployeeManagement_check:'员工考核'
        },
        sProjectFunctions:[
          //{name:'组件示例',route:'',icon:'mdi-puzzle',child:[
          //  {name:'组件示例',route:'/componentView',icon:'mdi-puzzle',child:[]}
          //]},
          {name:'navbar.animalManage',route:'',icon:'mdi-cat',child:[
            {name:'navbar.anicareManage',route:'/animalCareManagement',icon:'mdi-needle',child:[]},
            {name:'navbar.aniinfoManage',route:'/animalInfoManagement',icon:'mdi-information-outline',child:[]},
            {name:'navbar.anirecpManage',route:'/animalRecipeManagement',icon:'mdi-food',child:[]},
            {name:'navbar.anifeedManage',route:'/animalFeedManagement',icon:'mdi-food-variant',child:[]},
            {name:'navbar.anibreedManage',route:'/animalReproductionManagement',icon:'mdi-baby-bottle-outline',child:[]},
          ]},
          {name:'navbar.anishowManage',route:'',icon:'mdi-radio',child:[
            {name:'navbar.anishowinfManage',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'navbar.anitrainManage',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
          ]},
          {name:'navbar.ticketManage',route:'',icon:'mdi-ticket',child:[
            {name:'navbar.shwtckMan',route:'/ticketManagement/AdmissionTickets',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'navbar.admtckMan',route:'',icon:'assets/slide-bar-animal-manage.png',child:[]},
          ]},
          {name:'navbar.faclMan',child:[],route:'',icon:'mdi-home'},
          {name:'navbar.fundMan',route:'',icon:'mdi-sack',child:[
            {name:'navbar.assetMan',route:'/fundManagement',icon:'mdi-sack',child:[]},
            {name:'navbar.procMan',route:'/procurementManagement',icon:'mdi-cart',child:[]},
          ]},
          {name:'navbar.wareMan',route:'',icon:'mdi-database',child:[
            {name:'navbar.wareMan',route:'/warehouseManagement',icon:'mdi-database',child:[]}
          ]},
          {name:'navbar.perMan',route:'',icon:'mdi-account-cog',child:[
            {name:'navbar.perinfMan',route:'/employeeManagement',icon:'assets/slide-bar-animal-manage.png',child:[]},
            {name:'navbar.perChkMan',route:'/employeeManagement/check',icon:'assets/slide-bar-animal-manage.png',child:[]},
          ]},
          {name:'navbar.guidMan',child:[],route:'',icon:'mdi-account-voice'},
          {name:'navbar.trafMan',child:[],route:'',icon:'mdi-car-hatchback'},
          {name:'navbar.servMan',child:[],route:'',icon:'mdi-bus-stop-covered'},
        ],

        //CSS相关定义
        scSlideBarLeft:300,
        scSlideBarLeftInitial:0,
        scSlideBarCalloutStat:0,

        //CSS相关变量
        sSlideBarLeft:0,

        bUseL2D:false,
        langOpts:[
          {sw:'简体中文(zh-CN)',cd:'zh-CN',id:0},
          {sw:'English(en-US)',cd:'en-US',id:1}
        ],
        defaultLang:1,
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
        },
        showToastNotify(state,param){
            let toastConfig={
              position: "top-center",
              timeout: 1400,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: true,
              hideProgressBar: false,
              closeButton: true,
              icon: true,
              rtl: false
            };
            if(param.type=="error"){
              this._vm.$toast.error(param.info,toastConfig);
            }
            if(param.type=="success"){
              this._vm.$toast.success(param.info,toastConfig);
            }
            if(param.type=="warning"){
              this._vm.$toast.warning(param.info,toastConfig);
            }
            if(param.type=="default"){
              this._vm.$toast(param.info,toastConfig);
            }
        }
    },
    actions: {
        alterTopNavTitle({commit},param){
            commit('alterTopNavTitle',param)
        },
        showToastNotify({commit},param){
            commit('showToastNotify',param)
        }
    },
    modules: {
    }
})
export default store;
