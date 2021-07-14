<template>
    <div class="zms-convenienceService" :class="nmNightClass">
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
                 <v-container>
                   <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('convenienceService.name')" v-model="submit_name" :placeholder="$t('common.pleaseInput')+$t('convenienceService.name')" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                         <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('convenienceService.ID')" v-model="submit_ID" :placeholder="$t('common.pleaseInput')+$t('convenienceService.ID')" prepend-icon="el-icon-link" />
                        </v-col>
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('convenienceService.position')" v-model="submit_position" :placeholder="$t('common.pleaseInput')+$t('convenienceService.position')" prepend-icon="el-icon-location-information"  />
                        </v-col>          -->
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('convenienceService.intro')" v-model="submit_intro" :placeholder="$t('common.pleaseInput')+$t('convenienceService.intro')" prepend-icon="mdi-information"  />
                        </v-col>  -->
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="error" @click="deleteItemInfo" >
                                <v-icon>mdi-filter-minus</v-icon>&nbsp;&nbsp;删除过滤条件
                            </v-btn>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col>
                        
                        
                       <!-- <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col>  -->
                    </v-row>
                </v-container>
                
            </div>
        </div>
        <v-divider/>
        <div class="zms-query-result">
            <v-icon color="primary">mdi-note-search</v-icon> <span class="zms-query-title">查询结果</span>
            <div class="zms-query-result-table">
                <v-data-table
                    :headers="headers"
                    :items="queryData"
                    :page.sync="page"
                    :items-per-page="5"
                    hide-default-footer
                    @page-count="pageCount = $event"
                    class="elevation-1"
                >
                <template v-slot:top>
                    <v-toolbar flat >
                        <v-toolbar-title>查询结果</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="600px" persistent>
                            <v-card :ripple="{class:null}">
                                <v-card-title class=" zms-strip-bg text-h5 text--white primary " color="warning">
                                    <v-icon color="white">mdi-pen</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">
                                        {{$t('convenienceService.itemAlter')}}
                                    </span>
                                </v-card-title>

                                     <v-card-text>
                                        <v-container>
                                        <v-row>
                                        <!-- <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['ID']" :label="$t('convenienceService.ID')"></v-text-field>
                                        </v-col> -->
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field disabled v-model="editedItem['name']"  :label="$t('convenienceService.name')"></v-text-field>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['position']" :label="$t('convenienceService.position')"></v-text-field>
                                        </v-col> -->
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['intro']" :label="$t('convenienceService.intro')"></v-text-field>
                                        </v-col>
                                        
                                        </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="close()">
                                            <v-icon>mdi-close</v-icon>{{$t('common.cancel')}}
                                        </v-btn>
                                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="success" @click="updateItemInfo()">
                                            <v-icon>mdi-check</v-icon>{{$t('common.confirm')}}
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small class="mr-2" @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
            </div>
            <div class="zms-query-pagination">
                <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
        </div>
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
        <v-dialog persistent v-model="queryLoaderDialog2" width="300">
            <v-card color="">
                <v-card-title>正在提交</v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    请稍后<br/><br/>
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

        <v-dialog v-model="deleteDialog" persistent width="600" >
            <v-card color="" :ripple="{class:null}" >
                <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3 " color="warning">
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('convenienceService.delete')}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{$t('convenienceService.delete_content')}}</span><br/><br/>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="deleteItemconfirm()">
                        <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="error" @click="close()">
                        <v-icon>mdi-arrow-left</v-icon>{{$t('common.cancel')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>

</template>

<script>
import { getConvenienceServiceData, updateConvenienceServiceInfo ,deleteConvenienceServiceInfo} from '../../apis/convenienceService';

export default {
    name: 'ConvenienceServiceQuery',
    created(){
        if(this.$route.params.id!=undefined){
            this.fetchItemInfo();
        }
    },computed:{
        cardNightClass(){
            return{
                'zms-cardcolor-light':!this.$vuetify.theme.dark,
                'zms-cardcolor-dark':this.$vuetify.theme.dark,
                
            }
        },
        nmNightClass(){
            return{
                'zms-background-nm-dark':this.$vuetify.theme.dark,
                
            }
        },
    },data:()=>{
        return{
        submit_name:null,
        // submit_ID:null,
        // submit_position:null,
        submit_intro:null,

        headers:[
            // {text: '便民服务编号', value: 'ID'},
            {text: '便民服务名称', value: 'name'},
            // {text: '位置', value: 'position'},
            {text: '简介', value: 'intro'},
            {text: '操作', value: 'actions', sortable: false }
         
        ],
        queryLoaderDialog:false,
        pageCount:0,
        page:1,
        dialog:false,
        queryData:[],
        editedIndex: -1,
        delIndex: -1,
        queryLoaderDialog2:false,
        deleteDialog:false,
        errorReturn:false,
        errorTitle:'',
        errorInfo:'',
        editedItem: {
            name: '',
            intro: 0,
        },
        delItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        }}
        
    },methods:{
        fetchItemInfo(){
            this.queryLoaderDialog=true;
            setTimeout(
                ()=>{
                    getConvenienceServiceData(
                        {
                            name:this.submit_name,  
                            // ID:this.submit_ID,
                            // position:this.submit_position,
                            intro:this.submit_intro,
                        }

                    ).then(response => {
                       
                        this.queryData = response.data
                        this.queryLoaderDialog=false;
                        if(this.queryData.length>0){
                            this.$store.dispatch('showToastNotify',{type:'success',info:'信息查询成功'})
                        }else{
                            this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('未找到符合条件的选项')})
                        }
                        
                    }).catch(err=>{
                        this.queryLoaderDialog=false;
                        this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('信息查询失败')}) 
                        console.log(err);
                    })
                },2000
            )
        },
        updateItemInfo(){
            this.queryLoaderDialog2=true;
            setTimeout(
                ()=>{
                    updateConvenienceServiceInfo(
                        {
                            name:this.editedItem['name'],
                            // ID:this.editedItem['name'],
                            // position:this.editedItem['position'],
                            intro:this.editedItem['intro'],
                        }
                    ).then(response => {
                        this.queryLoaderDialog2=false;
                        this.dialog=false;
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息更新成功'})
                        this.close();

                         getConvenienceServiceData(
                                        {
                                            name:this.submit_name,  
                                            // ID:this.submit_ID,
                                            // position:this.submit_position,
                                            intro:this.submit_intro,
                                        }
                                ).then(response => {
                                   
                                this.queryData = response.data
                                }).catch( err =>{
                                })

                    }).catch(err=>{
                        console.log(err)
                        this.queryLoaderDialog=false;      
                        this.queryLoaderDialog2=false;
                        this.$store.dispatch('showToastNotify',{type:'error',info:err})
                    })
                },2000
            )
        },
        deleteItemInfo(){
            this.submit_name=null;
            // this.submit_ID=null;
            // this.submit_position=null;
            this.submit_intro=null;
        },
        deleteItem (item) {
            this.delIndex = this.queryData.indexOf(item)
            this.delItem = Object.assign({}, item)
            //this.dialog = true
            this.deleteDialog=true
        },    
        deleteItemconfirm(){
            this.deleteDialog=true
            setTimeout(
                ()=>{
                        deleteConvenienceServiceInfo(
                        {
                                name:this.delItem['name'],
                                    // ID:this.editedItem['name'],
                                    // position:this.editedItem['position'],
                                // intro:this.editedItem['intro'],
                        }
                    ).then(response=>{
                        this.deleteDialog=false;
                    
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息删除成功'})
                        this.close();

                         getConvenienceServiceData(
                                        {
                                            name:this.submit_name,  
                                            // ID:this.submit_ID,
                                            // position:this.submit_position,
                                            intro:this.submit_intro,
                                        }
                                ).then(response => {
                                   
                                this.queryData = response.data
                                }).catch( err =>{
                                })

                    }).catch(err=>{
                        this.queryLoaderDialog=false;
                        this.$store.dispatch('showToastNotify',{type:'error',info:'信息删除失败'})
                        console.log(err);
                    })
                },2000
            )
        }, 
        close () {
            this.dialog = false
            this.deleteDialog=false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            this.delIndex = -1
            this.delItem = Object.assign({}, this.defaultItem)
            })
        },
        editItem (item) {
            this.editedIndex = this.queryData.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
      
    }
  
}
</script>
<style scoped lang="scss">
    .zms-query-pagination{
        margin-top:10px;
        transition: all .5s;
    }
    .zms-query-result{
        margin-top:20px;
    }
    .zms-convenienceService{
        padding-left:50px;
        padding-right:50px;
        padding-top:20px;
        padding-bottom:20px;
        background-color: #fafafa;
    }
    .zms-query-title{
        font-weight: bold;
        letter-spacing: 1px;
        position:relative;
        top:3px;
    }
    .zms-query-result-table{
        margin-top:10px;
    }
</style>
