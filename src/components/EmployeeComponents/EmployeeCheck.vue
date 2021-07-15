<template>
    <div class="zms-anicare" :class="nmNightClass">
        <alert-messagebox
        :alertTitle="$t('common3.transactionFailTitle')"
        :alertBody="$t('common3.transactionFail')"
        :alertLevel="`error`"
        :alertOnlyConfirm="true"
        ref="error_done" />
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
                <v-container>
                    <v-row>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field label="员工工号" placeholder="请输入工号" prepend-icon="el-icon-notebook-2"  />
                        </v-col> -->
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employeecheck.item.employee_id')" v-model="searchItem['eId']" :placeholder="$t('common.pleaseInput')+$t('employeecheck.item.employee_id')" prepend-icon="el-icon-files"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employeecheck.item.manager_id')" v-model="searchItem['mId']" :placeholder="$t('common.pleaseInput')+$t('employeecheck.item.manager_id')" prepend-icon="el-icon-document-copy"  />
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field label="考核人员" placeholder="请输入考核人姓名" prepend-icon="el-icon-data-analysis"  />
                        </v-col> -->
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="searchItem['assessmentDate']" :label="$t('employeecheck.item.assessment_time')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="searchItem['assessmentDate']" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employeecheck.item.assessment_grade')" v-model="grade" :placeholder="$t('common.pleaseInput')+$t('employeecheck.item.assessment_grade')" prepend-icon="el-icon-s-shop"  />
                        </v-col> -->
                        <v-col
        class="d-flex"
        cols="12"
        sm="6"
        md="3"
      >
        <v-select
          :items="gradeitems"
          label="考核等级"
          v-model="searchItem['grade']"
          prepend-icon="el-icon-data-board"
        ></v-select>
      </v-col>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field label="考核时间" placeholder="请输入考核时间" prepend-icon="el-icon-reading"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="考核等级" placeholder="请输入考核等级" prepend-icon="el-icon-data-board"  />
                        </v-col> -->
                        
                    </v-row>
                </v-container>
                <v-container>
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
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;查找员工考核信息
                            </v-btn>
                        </v-col>
                        
                        
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col> -->
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
                                        {{$t('employeecheck.item.alter')}}
                                    </span>
                                </v-card-title>

                                    <v-card-text>
                                        <v-card>
                                        <v-container fluid>
                                            <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field disabled v-model="editedItem['employeeId']" :label="$t('employeecheck.item.employee_id')"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field disabled v-model="editedItem['managerId']" :label="$t('employeecheck.item.manager_id')"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field disabled v-model="editedItem['assessmentTime']" :label="$t('employeecheck.item.assessment_time')"></v-text-field>
                                            </v-col>
                                            <!-- <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['assessment_grade']" :label="$t('employeecheck.item.assessment_grade')"></v-text-field>
                                            </v-col> -->
  <v-col
        class="d-flex"
        cols="12"
        sm="6"
        md="4"
      >
        <v-select
          :items="gradeitems"
          label="考核等级"
          v-model="editedItem['assessmentGrade']"
        ></v-select>
      </v-col>

                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['remarks']" :label="$t('employeecheck.item.remarks')"></v-text-field>
                                            </v-col>
                                            </v-row>
                                        </v-container>
                                        </v-card>
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
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('employeecheck.item.delete')}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{$t('employeecheck.item.delete_content')}}</span><br/><br/>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="deletecheckItemInfo()">
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
import { getemployeecheckInfo, updateemployeecheckInfo,deleteemployeecheckInfo } from '../../apis/employeecheck.js';
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'

export default {
    name: 'EmployeeCheckItemOverview',
    components: { AlertMessagebox  },
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
            {text: '工作人员工号', value: 'employeeId'},
            {text: '管理人员工号', value: 'managerId'},
            {text: '考核时间', value: 'assessmentTime'},
            {text: '考核等级', value: 'assessmentGrade'},
            {text: '备注', value: 'remarks'},
            // {text: '备注信息', value: 'remarks'},
            // {text: '职务', value: 'price'},
            // //{text: '目标', value: 'target'},
            // {text: '园区', value: 'channel'},
            // //{text: '储存条件', value: 'cond'}, //数据表字段名错误
            // //{text: '使用方法', value: 'usage_method'},
            // {text: '入职年份', value: 'staff_id'},
            // //{text: '备注', value: 'remark'},
            // { text: '操作', value: 'actions', sortable: false }
             { text: '操作', value: 'actions', sortable: false }
            
        ],

         eId:null,//员工工号
            mId:null,//管理人员工号
            Date:null,//考核时间
            grade:null,//考核等级
            note:null,//备注信息
            Type:null,
            assessmentDate:null,
            gradeitems: ['A', 'B', 'C', 'D','E'],
      value: ['foo', 'bar', 'fizz', 'buzz'],

      searchItem:{
          eId:null,
          mId:null,
          assessmentDate:null,
          grade:null,
      },

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
                    getemployeecheckInfo(
                        {
                        employeeid:this.searchItem['eId'],
                        managerid:this.searchItem['mId'],
                        assessmenttime:this.searchItem['assessmentDate'],
                        assessmentgrade:this.searchItem['grade']
                        }
                    ).then(response => {
                         for(let i=0;i<response.data.length;i++)
                            {
                                response.data[i].assessmentTime=response.data[i].assessmentTime.substring(0,10);
                            }
                        // for(let i=0;i<response.data.length;i++)
                        // {
                        //     if(response.data[i].status==1)
                        //     response.data[i].status='开';
                        //     else response.data[i].status='关';
                        // }

                        this.queryData = response.data
                        this.queryLoaderDialog=false;
                        if(this.queryData.length>0){
                            this.$store.dispatch('showToastNotify',{type:'success',info:'信息查询成功'})
                        }else{
                            this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('animalCare.emptyInfo')})
                        }
                        
                    }).catch( err => {
                        this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                        this.$refs.error_done.showAlert();
                        // this.submitStat=false;
                        // this.alterDialog=false;
                        this.queryLoaderDialog=false;
                        this.errorTitle=this.$t('common.error');
                    });
                    /*.catch(err=>{
                       this.queryLoaderDialog=false;

                    })*/
                },2000
            )
        },
        updateItemInfo(){
            this.queryLoaderDialog2=true;
            setTimeout(
                ()=>{
                    updateemployeecheckInfo(
                        {
                    employeeid:this.editedItem['employeeId'],
                    managerid:this.editedItem['managerId'],
                    assessmenttime:this.editedItem['assessmentTime'],
                    assessmentgrade:this.editedItem['assessmentGrade'],
                    remarks:this.editedItem['remarks'],
                        }
                    ).then(response => {
                        this.queryLoaderDialog2=false;
                        // if(response.data.statcode!=0){
                            
                        //     return 0;
                        // }
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息修改成功'})
                        this.fetchItemInfo();
                        this.close();
                    }).catch(err=>
                        {
                            this.queryLoaderDialog2=false;
                            this.errorTitle=this.$t('common.error');
                            // this.errorInfo=this.$t('warehouse.Info.generalError')
                            this.errorInfo='考核信息编辑失败';
                            this.errorReturn=true;
                        }
                    )
                },2000
            )
        },




        
         deletecheckItemInfo(){
            this.queryLoaderDialog2=true;
            setTimeout(
                ()=>{
                    deleteemployeecheckInfo(
                        {
                        employeeid:this.delItem['employeeId'],
                        managerid:this.delItem['managerId'],
                        assessmenttime:this.delItem['assessmentTime'],
                        // assessmentgrade:this.editedItem['assessmentGrade'],
                        // remarks:this.editedItem['remarks'],
                        }
                    ).then(response => {
                        this.queryLoaderDialog2=false;
                        // if(response.data.statcode!=0){
                            
                        //     return 0;
                        // }
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息删除成功'})
                        this.fetchItemInfo();
                        this.close();
                    }).catch(err=>
                        {
                            this.queryLoaderDialog2=false;
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('warehouse.Info.generalError')
                            this.errorReturn=true;
                        }
                    )
                },2000
            )
        },
        deleteItemInfo(){
            this.searchItem['eId']=null,
            this.searchItem['mId']=null,
            this.searchItem['assessmentDate']=null,
            this.searchItem['grade']=null

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
        deleteItemConfirm () {
             this.deleteDialog=false
        this.queryData.splice(this.delIndex, 1)
        this.closeDelete()
       
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.queryData[this.editedIndex], this.editedItem)
        } else {
          this.queryData.push(this.editedItem)
        }
        this.close()
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