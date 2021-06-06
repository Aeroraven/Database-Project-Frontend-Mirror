<template>
    <div class="zms-anicare">
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="动物编号" placeholder="请输入动物编号" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="疾病类型" placeholder="请输入疾病类型" prepend-icon="mdi-heart-pulse"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="兽医名称" placeholder="请输入兽医名称" prepend-icon="mdi-doctor"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="date" label="患病日期" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="date" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                        
                    </v-row>
                </v-container>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="error" >
                                <v-icon>mdi-filter-minus</v-icon>&nbsp;&nbsp;删除过滤条件
                            </v-btn>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchCareInfo()" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;查找负责项目
                            </v-btn>
                        </v-col>

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
                        
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchCareInfo()">
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
                
            </div>
        </div>
        <v-divider/>
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
                    <v-toolbar flat color="white">
                        <v-toolbar-title>查询结果</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" persistent max-width="500px">
                        
                        <v-card :ripple="{class:null}">
                            <v-card-title>
                            <span class="headline">{{$t('animalCare.itemAlter')}}</span>
                            </v-card-title>

                            <v-card-text>
                            <v-container>
                                <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['id']" disabled :label="$t('animalCare.animalId')"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['disease_name']" disabled :label="$t('animalCare.diseaseName')"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['veterinary_name']" :label="$t('animalCare.vetName')"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['drug']" :label="$t('animalCare.drugName')"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['treatment_progress']" :label="$t('animalCare.treatProg')"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-checkbox v-model="editedItem['current_state']" class="mx-2" :label="$t('animalCare.currentStateW')"></v-checkbox>
                                </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">{{$t('common.cancel')}}</v-btn>
                                <v-btn color="blue darken-1" text @click="submitCareInfo(editedItem)">{{$t('common.save')}}</v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <!--<v-icon small class="mr-2">
                            mdi-delete
                        </v-icon>-->
                    </template>
                </v-data-table>
            </div>
            <div class="zms-query-pagination">
                <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import {getCareData, updateCareInfo} from '../../apis/animalCare'
export default {
    name: 'AnicareQuery',
    methods:{
        fetchCareInfo(){
            this.queryLoaderDialog=true;
            setTimeout(
                ()=>{
                    getCareData().then(response => {
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
        close () {
            this.dialog = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },
        editItem (item) {
            this.editedIndex = this.queryData.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        submitCareInfo(item){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    updateCareInfo().then(response => {
                        
                        this.submitStat=false;
                        if(response.data.statcode!=0){
                            this.errorReturn=true;
                        }
                        if(response.data.statcode==1){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('animalCare.NonexistentAniID')
                            return 0;
                        }
                        if(response.data.statcode==2){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('animalCare.NonexistentTypeID')
                            return 0;
                        }
                        if(response.data.statcode==3){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('animalCare.NonexistentVetId')
                            return 0;
                        }
                        this.submitSuccTip(this.$t('animalCare.SubmitComplete2'))
                        this.close()
                    })
                },2000
            )
        },
        submitSuccTip(x){
            this.$store.dispatch('showToastNotify',{type:'success',info:x})
        },
        submitFailTip(x){
            this.$store.dispatch('showToastNotify',{type:'error',info:x})
        },
    },

    created(){
    },data:()=>{
        return{
        queryLoaderDialog:false,
        headers:[
            {text: '动物编号', value: 'id'},
            {text: '疾病名称', value: 'disease_name'},
            {text: '兽医名称', value: 'veterinary_name'},
            {text: '药物名称', value: 'drug'},
            {text: '治疗过程', value: 'treatment_progress'},
            {text: '当前状态', value: 'current_state'},
            {text: '患病时间', value: 'date_ill'},
            {text: '治愈时间', value: 'date_cure'},
            { text: '操作', value: 'actions', sortable: false }
            
        ],
        submitStat:0,
        errorReturn:false,
        errorTitle:'',
        errorInfo:'',
        pageCount:0,
        page:1,
        queryData:[],
        editedIndex: -1,
        editedItem: {
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
        
    },
    
  
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