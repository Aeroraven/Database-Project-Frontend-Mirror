<template>
    <div class="zms-anicare" :class="nmNightClass">
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
                <v-container fluid>
                    <v-row>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('admissionTicketsManagement.admis_type')" v-model="searchItem['seType']" :placeholder="$t('common.pleaseInput')+$t('admissionTicketsManagement.admis_type')" prepend-icon="el-icon-files"  />
                        </v-col> -->
<v-col
        class="d-flex"
        cols="12"
        sm="6" md="3"
      >
        <v-select
          :items="admissitems"
          label="票种"
          prepend-icon="el-icon-files"
        
          v-model="searchItem['seType']"
        ></v-select>
      </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('admissionTicketsManagement.admis_price')" v-model="searchItem['sePrice']" :placeholder="$t('common.pleaseInput')+$t('admissionTicketsManagement.admis_price')" prepend-icon="el-icon-coin"  />
                        </v-col>
                       


                         <v-col cols="12" sm="6" md="3">
                             <v-menu v-model="menu8" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="searchItem['seStart_time']" :label="$t('admissionTicketsManagement.admis_starttime')"   prepend-icon="el-icon-time" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="searchItem['seStart_time']" @input="menu8 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
<!--                            
    <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('admissionTicketsManagement.admis_starttime')" v-model="submitStart_time" :placeholder="$t('common.pleaseInput')+$t('admissionTicketsManagement.starttime')" prepend-icon="el-icon-time"  />
                        </v-col> -->
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('admissionTicketsManagement.admis_endtime')" v-model="submitEnd_time" :placeholder="$t('common.pleaseInput')+$t('admissionTicketsManagement.admis_endtime')" prepend-icon="el-icon-time"  />
                        </v-col> -->
                        <v-col cols="12" sm="6" md="3">
                             <v-menu v-model="menu4" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="searchItem['seEnd_time']" :label="$t('admissionTicketsManagement.admis_endtime')"   prepend-icon="el-icon-time" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="searchItem['seEnd_time']" @input="menu3 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
                        
                        
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="searchItem['seenterdate']" :label="$t('admissionTicketsManagement.admis_date')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="searchItem['seenterdate']" @input="menu5 = false"></v-date-picker>
                            </v-menu>
                        </v-col>

                        
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
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;查找门票记录
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
                                        {{$t('admissTickets.item.alter')}}
                                    </span>
                                </v-card-title>

                                    <v-card-text>
                                        <v-container fluid>
                                            <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['id']" :label="$t('admissionTicketsManagement.admis_id')"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['tourId']" :label="$t('admissionTicketsManagement.admistour_id')"></v-text-field>
                                            </v-col>
                                            <!-- <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['admis_type']" :label="$t('admissionTicketsManagement.admis_type')"></v-text-field>
                                            </v-col> -->
                                            <v-col
        class="d-flex"
        cols="12"
        sm="6" md="4"
      >
        <v-select
          :items="admissitems"
          label="票种"
         
          prepend-icon="el-icon-files"
          v-model="editedItem['ticketType']"
        ></v-select>
      </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['price']" :label="$t('admissionTicketsManagement.admis_price')"></v-text-field>
                                            </v-col>
                                            <!-- <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['admis_starttime']" :label="$t('admissionTicketsManagement.admis_starttime')"></v-text-field>
                                            </v-col> -->
                                            
 <v-col cols="12" sm="6" md="4">
                             <v-menu v-model="menu8" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="editedItem['startTime']" :label="$t('admissionTicketsManagement.admis_starttime')"   prepend-icon="el-icon-time" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="editedItem['startTime']" @input="menu3 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
                        

                                             <!-- <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem['admis_endtime']" :label="$t('admissionTicketsManagement.admis_endtime')"></v-text-field>
                                            </v-col> -->
      <v-col cols="12" sm="6" md="4">
                             <v-menu v-model="menu9" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="editedItem['endTime']" :label="$t('admissionTicketsManagement.admis_endtime')"   prepend-icon="el-icon-time" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="editedItem['endTime']" @input="menu3 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
                                           
                                            <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="editedItem['enteringDate']" :label="$t('admissionTicketsManagement.admis_date')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="date" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="close()">
                                            <v-icon>mdi-close</v-icon>{{$t('common.cancel')}}
                                        </v-btn>
                                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="success" @click="updateItemInfo(),save()">
                                            <v-icon>mdi-check</v-icon>{{$t('common.confirm')}}
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <!-- <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon> -->
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
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('admissTickets.item.delete')}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{$t('admissTickets.item.delete_content')}}</span><br/><br/>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="deleteadmissItemInfo()">
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
import {getAdmissData, updateAdmissInfo,deleteAdmissInfo} from '../../apis/TicketsAdmiss'
export default {
    name: 'TicketsAdmissItemOverview',
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
            // {text: '订单号', value: 'admis_id'},
            // {text: '游客账号', value: 'admistour_id'},
            // {text: '票种', value: 'admis_type'},
            // {text: '票价', value: 'admis_price'},
            // {text: '入园开始时间', value: 'admis_starttime'},
            // {text: '入园结束时间', value: 'admis_endtime'},
            // {text: '入园日期', value: 'admis_date'},
            // { text: '操作', value: 'actions', sortable: false }
             {text: '订单号', value: 'id'},
            {text: '游客账号', value: 'tourId'},
            {text: '票种', value: 'ticketType'},
            {text: '票价', value: 'price'},
            {text: '入园开始时间', value: 'startTime'},
            {text: '入园结束时间', value: 'endTime'},
            {text: '入园日期', value: 'enteringDate'},
            { text: '操作', value: 'actions' }//sortable: false 
            
        ],
admissitems: ['全价票', '儿童票', '长者票', '优待票','学生票','夜场票','畅想套票（全价）','畅想套票（优惠）','畅想套票（学生）'],

            Id:null,
            tour_id:null,
            Type:null,
            Price:null,
            Date:null,
            Note:null,
            Stat:null,
            Sat:null,
            End_time:null,
            Start_time:null,
            enterdate:null,
            noNoteWarning:false,
            errorReturn:false,
            errorTitle:'',
            errorInfo:'',
            menu2:false,



        queryLoaderDialog:false,
        pageCount:0,
        page:1,
        dialog:false,
        queryData:[
            {
                id:null,
                tourId:null,
            }
        ],
        editedIndex: -1,
        delIndex: -1,
        queryLoaderDialog2:false,
        deleteDialog:false,

        searchItem:{
            seType:null,
            sePrice:null,
            seStart_time:null,
            seEnd_time:null,
            seenterdate:null,
            
        },
       
        editedItem: {
            id:'',
            tourId:'',
            ticketType:'',
            price:'',
            startTime:'',
            endTime:'',
            enteringDate:'',
        },
        delItem: {
            admis_id:'',
            admistour_id:'',
            admis_type:'',
            admis_price:'',
            admis_starttime:'',
            admis_endtime:'',
            admis_date:null,
        },
        defaultItem: {
            admis_id:'',
            admistour_id:'',
            admis_type:'',
            admis_price:'',
            admis_starttime:'',
            admis_endtime:'',
            admis_date:'',
        }}
        
    },methods:{
        fetchItemInfo(){
            this.queryLoaderDialog=true;
            setTimeout(
                ()=>{
                    getAdmissData(
                        {
                            type:this.searchItem['seType'],
                            price:this.searchItem['sePrice'],
                            starttime:this.searchItem['seStart_time'],
                            endtime:this.searchItem['seEnd_time'],
                            date:this.searchItem['seenterdate']
                        }
                        ).then(response => {
                                for(let i=0;i<response.data.length;i++)
                                {
                                    response.data[i].enteringDate=response.data[i].enteringDate.substring(0,10);
                                    response.data[i].startTime=response.data[i].startTime.substring(11,19);
                                    response.data[i].endTime=response.data[i].endTime.substring(11,19);
                                }
                                // alert(response.data)
                                // console.log(response.data)
                        this.queryData = response.data
                        this.queryLoaderDialog=false;
                        if(this.queryData.length>0){
                            this.$store.dispatch('showToastNotify',{type:'success',info:'信息查询成功'})
                        }else{
                            this.$store.dispatch('showToastNotify',{type:'error',info:'无法找到信息'})
                        }
                        
                    }).catch(err=>{
                        this.queryLoaderDialog=false;

                    })
                },2000
            )
        },

        //  filterItemInfo(){
           
        // },
         deleteadmissItemInfo(){
            this.queryLoaderDialog2=true;
            this.deleteDialog=true;
            setTimeout(
                ()=>{
                    deleteAdmissInfo(
                        {
                        id:this.delItem['id'],
                        // managerid:this.delItem['managerId'],
                        // assessmenttime:this.delItem['assessmentTime'],
                        // assessmentgrade:this.editedItem['assessmentGrade'],
                        // remarks:this.editedItem['remarks'],
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
                            this.errorInfo=this.$t('warehouse.Info.generalError')
                            this.errorReturn=true;
                        }
                    )
                },2000
            )
        },




        
        deleteItemInfo(){
            this.searchItem['seType']=null;
            this.searchItem['sePrice']=null;
             this.searchItem['seStart_time']=null;
             this.searchItem['seEnd_time']=null;
             this.searchItem['seenterdate']=null;
        },
        updateItemInfo(){
            this.queryLoaderDialog2=true;
            setTimeout(
                ()=>{
                    updateAdmissInfo(
                        {


                        }
                    ).then(response => {
                        this.queryLoaderDialog2=false;
                        if(response.data.statcode!=0){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('admissTickets.Info.generalError')
                            this.errorReturn=true;
                            return 0;
                        }
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息查询成功'})
                        this.close();
                    }).catch(err=>{
                        this.queryLoaderDialog2=false;
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