<template>
  <div class="zms-home-notice">
        <span>下方列出了园区内所有的仓库</span>
        <v-btn color="primary" text @click="newDialog=true">{{$t('warehouse.Info.create')}}</v-btn>

        <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in warehouseDetail" :key="item.id" class="align-self-stretch">
                    <v-card :ripple="{ class: null }" class="mx-auto" max-width="400">
                        <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-card-title>{{item.storage_name}}</v-card-title>
                        </v-img>
                        <v-card-subtitle class="pb-0"><b>编号</b> {{item.id}}</v-card-subtitle>
                        <v-card-text class="text--primary pb-0">
                            <div><b>位置</b></div>
                            <div>{{item.storage_location}}</div>
                        </v-card-text>
                        
                        <v-card-actions>
                            <!--<v-btn color="primary" text>查看信息</v-btn>-->
                            <v-btn color="primary" text @click="openDialog(item.sid)">编辑仓库信息</v-btn>
                        </v-card-actions>
                    </v-card>
                    
                </v-col>
            </v-row>
            
        </v-container>

        <v-dialog v-model="newDialog" persistent  max-width="600px">
            <v-card :ripple="{class:null}">
                <v-card-title class=" zms-strip-bg text-h5 text--white primary " color="warning">
                    <v-icon color="white">mdi-plus-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('warehouse.Info.new')}}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" lg="12">
                                <v-text-field v-model="alterItem.id" :label="$t('warehouse.Info.wareid')"></v-text-field>
                            </v-col>
                            <v-col cols="12" lg="12">
                                <v-text-field v-model="alterItem.storage_name"  :label="$t('warehouse.Info.wareName')"></v-text-field>
                            </v-col>
                            <v-col cols="12" lg="12">
                                <v-text-field v-model="alterItem.storage_location" :label="$t('warehouse.Info.wareLocation')"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="newDialog=false;">
                        <v-icon>mdi-close</v-icon>{{$t('common.cancel')}}
                    </v-btn>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="success" @click="updateInfo()">
                        <v-icon>mdi-check</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="alterDialog" persistent  max-width="600px">
            <v-card :ripple="{class:null}">
                <v-card-title class=" zms-strip-bg text-h5 text--white primary " color="warning">
                    <v-icon color="white">mdi-pen</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('warehouse.Info.alter')}}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" lg="12">
                                <v-text-field v-model="alterItem.id" disabled :label="$t('warehouse.Info.wareid')"></v-text-field>
                            </v-col>
                            <v-col cols="12" lg="12">
                                <v-text-field v-model="alterItem.storage_name"  :label="$t('warehouse.Info.wareName')"></v-text-field>
                            </v-col>
                            <v-col cols="12" lg="12">
                                <v-text-field v-model="alterItem.storage_location" :label="$t('warehouse.Info.wareLocation')"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="alterDialog=false;">
                        <v-icon>mdi-close</v-icon>{{$t('common.cancel')}}
                    </v-btn>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="success" @click="updateInfo()">
                        <v-icon>mdi-check</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog persistent v-model="queryLoaderDialog" width="300">
            <v-card color="">
                <v-card-title>正在查找</v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    请稍后<br/><br/>
                    <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog persistent v-model="submitStat" width="300">
            <v-card >
                <v-card-title>{{$t('animalCare.Submitting')}}</v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    {{$t('animalCare.PleaseWait')}}<br/><br/>
                    <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="errorReturn" persistent width="500" >
            <v-card color="" :ripple="{class:null}" >
                <v-card-title class=" zms-strip-bg text-h5 text--white red " color="warning">
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{errorTitle}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{errorInfo}}</span><br/><br/>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="errorReturn=false;">
                        <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {getWarehouseInfo, updateWarehouseInfo} from '../../apis/warehouse.js'
export default {
    components: {  },
    name: 'WarehouseInfo',
    props:{
        drawer:Boolean,
       
    },
    data:()=>{
        return{
            queryLoaderDialog:true,
            warehouseDetail:[],
            alterDialog:false,
            alterId:-1,
            alterItem:{},
            submitStat:false,
            errorReturn:false,
            newDialog:false,
            errorTitle:'',
            errorInfo:'',
        }
    },
    created(){
        this.fetchWarehouseInfo();
    },
    methods:{
        openDialog(id){
            this.alterDialog=true;
            this.alterId=id;
            this.alterItem=this.warehouseDetail[id]
        },
        updateInfo(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    updateWarehouseInfo().then(response => {
                        if(response.data.statcode!=0){
                            this.submitStat=false;
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('warehouse.Info.generalError')
                            this.errorReturn=true;
                            return 0;
                        }
                        this.submitStat=false;
                        this.alterDialog=false,
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('warehouse.Info.alterDone')})
                    })
                },1000
            )
                
        },
        fetchWarehouseInfo(){
            this.queryLoaderDialog=true;
            setTimeout(
                ()=>{
                    getWarehouseInfo().then(response => {
                        this.warehouseDetail=response.data
                        this.queryLoaderDialog=false;
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('warehouse.Info.queryDone')})
                        let i=0;
                        for(;i< this.warehouseDetail.length;i++){
                            this.warehouseDetail[i].dialogOpen=false;
                            this.warehouseDetail[i].sid=i;
                        }
                    })
                },1000
            )
           
        },
    }
};
</script>

<style scoped lang="scss">
    .zms-stat{
        font-family: 'benderregular';
        font-size:25px;
    }
    .zms-home-notice{
        margin:0px 20px 0px 20px;
        padding-top:10px;
        padding-bottom: 10px;
        
    }
    .zms-home-center{
        text-align: center;
    }
    .zms-card-noborder{
        border-width: 0px;
    }
    .zms-home-title2{
        font-size:18px;
        font-weight: bold;
        display:block;
    }
    .zms-home-body{
        margin-left:7%;
        margin-right: 7%;
        padding-top:10px;
        padding-bottom: 10px;
    }
    .zms-home-body2{
        margin-left:5%;
        margin-right: 5%;
        padding-top:20px;
        padding-bottom: 10px;
    }
</style>