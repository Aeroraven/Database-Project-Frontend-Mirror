<template>
 
    <div class="zms-anicare" :class="nmNightClass">
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
               
                <v-container>
                    
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="场馆编号" placeholder="请输入场馆编号" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="场馆名称" placeholder="请输入场馆名称" prepend-icon="mdi-tag"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="场馆位置" placeholder="请输入场馆位置" prepend-icon="mdi-form-textbox"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="场馆开放状态" placeholder="请输入场馆开放状态" prepend-icon="mdi-account-key"  />
                        </v-col>
                        
                    </v-row>
                  
                </v-container>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="error" @click="fetchItemInfo" >
                                <v-icon>mdi-filter-minus</v-icon>&nbsp;&nbsp;删除过滤条件
                            </v-btn>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;查找场馆
                            </v-btn>
                        </v-col>
                        
                        
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col>
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
                                        {{$t('warehouse.item.alter')}}
                                    </span>
                                </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['area_id']" :label="$t('venue.item.area_id')"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['name']" :label="$t('venue.item.name')"></v-text-field>
                                            </v-col>
                        
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['zone']" :label="$t('venue.item.zone')"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['location']" :label="$t('venue.item.location')"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['current_tourist_cnt']" :label="$t('venue.item.current_tourist_cnt')"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['telephone']" :label="$t('venue.item.telephone')"></v-text-field>
                                            </v-col>
                                             <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['capacity']" :label="$t('venue.item.capacity')"></v-text-field>
                                            </v-col>
                                             <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['status']" :label="$t('venue.item.status')"></v-text-field>
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
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('venue.item.delete')}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{$t('venue.item.delete_content')}}</span><br/><br/>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="updateItemInfo()">
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
import { getvenueItemInfo, updatevenueItemInfo } from '../../apis/venue';

export default {
    name: 'venueItemOverview',
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
        headers:[
            {text: '场馆编号', value: 'area_id'},
            {text: '场馆名称', value: 'name'},
            {text: '场馆简介', value: 'instruction'},
            {text: '所属园区', value: 'zone'},
            {text: '场馆位置', value: 'location'},
            
            {text: '额外票价', value: 'additional_fee'},
            //{text: '目标', value: 'target'},
            {text: '当前游客数量', value: 'current_tourist_cnt'},
            //{text: '储存条件', value: 'cond'}, //数据表字段名错误
            //{text: '使用方法', value: 'usage_method'},
            {text: '场馆管理电话', value: 'telephone'},
              {text: '场馆游客最大容量', value: 'capacity'},
                {text: '场馆开放状态', value: 'status'},
            //{text: '备注', value: 'remark'},
            { text: '操作', value: 'actions', sortable: false }
            
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
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
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
                    getvenueItemInfo().then(response => {
                        this.queryData = response.data
                        this.queryLoaderDialog=false;
                        if(this.queryData.length>0){
                            this.$store.dispatch('showToastNotify',{type:'success',info:'信息查询成功'})
                        }else{
                            this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('animalCare.emptyInfo')})
                        }
                        
                    })
                },2000
            )
        },
        updateItemInfo(){
            this.queryLoaderDialog2=true;
            setTimeout(
                ()=>{
                    updatevenueItemInfo().then(response => {
                        this.queryLoaderDialog2=false;
                        if(response.data.statcode!=0){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('warehouse.Info.generalError')
                            this.errorReturn=true;
                            return 0;
                        }
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息查询成功'})
                        this.close();
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
        deleteItem (item) {
            this.delIndex = this.queryData.indexOf(item)
            this.delItem = Object.assign({}, item)
            //this.dialog = true
            this.deleteDialog=true
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
    .zms-anicare{
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