<template>
  <div class="zms-home-notice">
        <span>下方列出了园区内所有的仓库</span>
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
                            <v-btn color="primary" text>查看信息</v-btn>
                            <v-btn color="primary" text>编辑</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            
        </v-container>
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
  </div>
</template>

<script>
import {getWarehouseInfo} from '../../apis/warehouse.js'
export default {
    components: {  },
    name: 'WarehouseInfo',
    props:{
        drawer:Boolean,
       
    },
    data:()=>{
        return{
            queryLoaderDialog:true,
            warehouseDetail:[]
        }
    },
    created(){
        this.fetchWarehouseInfo();
    },
    methods:{
        fetchWarehouseInfo(){
            this.queryLoaderDialog=true;
            setTimeout(
                ()=>{
                    getWarehouseInfo().then(response => {
                        this.warehouseDetail=response.data
                        this.queryLoaderDialog=false;
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('warehouse.Info.queryDone')})
                    })
                },2000
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