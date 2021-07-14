<template>
    <div class="zms-showTicket" :class="nmNightClass">
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
                <v-container>
                 
                        <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('showTicketManagement.ID')" v-model="submit_ID" :placeholder="$t('common.pleaseInput')+$t('showTicketManagement.ID')" prepend-icon="el-icon-link"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('showTicketManagement.tour_id')" v-model="submit_tour_id" :placeholder="$t('common.pleaseInput')+$t('showTicketManagement.tour_id')" prepend-icon="el-icon-tickets"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('showTicketManagement.show_id')" v-model="submit_show_id" :placeholder="$t('common.pleaseInput')+$t('showTicketManagement.show_id')" prepend-icon="el-icon-coin"  />
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submit_show_date" :label="$t('showTicketManagement.show_date')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="submit_show_date" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col> -->
                        <v-col class="d-flex"  cols="12"   sm="6" md="3" >
                                <v-select :items="admissitems" :label="$t('showTicketManagement.Ticket_type')" v-model="submit_Ticket_type"
                                    prepend-icon="el-icon-s-operation"></v-select>     
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
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col>
                        
                        
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找 
                            </v-btn>
                        </v-col>--> 
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
                                        {{$t('showTicketManagement.itemAlter')}}
                                    </span>
                                </v-card-title>

                                     <v-card-text>
                                        <v-container>
                                        <v-row>
                                         <v-col cols="12" sm="6" md="4">
                                            <v-text-field  disabled  v-model="editedItem['ID']" :label="$t('showTicketManagement.ID')"></v-text-field>
                                        </v-col> 
                                        <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['tour_id']"  :label="$t('showTicketManagement.tour_id')"></v-text-field>
                                        </v-col>   
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['show_id']"  :label="$t('showTicketManagement.show_id')"></v-text-field>
                                        </v-col>
                                       
                                         <!-- <v-col cols="12" sm="6" md="3">
                                            <v-menu v-model="menu4" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="editedItem['show_date']" :label="$t('animalShow.show_date')" readonly v-bind="attrs" v-on="on">
                                                    </v-text-field> 
                                                </template>
                                                <v-date-picker color="primary" width="400" v-model="editedItem['show_date']" @input="menu4 = false"></v-date-picker>
                                            </v-menu>
                                        </v-col> -->
                                        
                                        <v-col class="d-flex"  cols="12"   sm="6" md="3" >
                                            <v-select    v-model="editedItem['Ticket_type']" :items="admissitems" :label="$t('showTicketManagement.Ticket_type')" 
                                                ></v-select>     
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
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('showTicketManagement.delete')}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{$t('showTicketManagement.delete_content')}}</span><br/><br/>
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
import { getShowTicketFlowInfo,deleteShowTicketFlowInfo, updateShowTicketInfo } from '../../apis/showTicketManagement';

export default {
    name: 'ShowTicketQuery',
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
        
        submit_ID:null,
        submit_show_id:null,
        submit_tour_id:null,
        submit_Ticket_type:null,
        
        headers:[
            {text: '订单号', value:'id'},
            {text: '客户编号', value:'tourid'},
            {text: '演出编号', value:'showId'},
            // {text: '演出日期', value:'show_date'},
            {text: '票种', value:'ticketType'},
            {text: '操作', value:'actions', sortable: false }

            
        ],
        admissitems: ['普通票', '学生票', '优惠票', 'VIP座票'],


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
           ID:'',
           tour_id:'',
           show_id:'',
           Ticket_type:''
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
                    getShowTicketFlowInfo(
                        { 
                            ID:this.submit_ID,

                            show_id:this.submit_show_id,
                            tour_id:this.submit_tour_id,
                            // show_date:this.submit_show_date,
                            Ticket_type:this.submit_Ticket_type
                        }
                    ).then(response => {
                        this.queryData = response.data
                        // console.log(this.queryData);
                        // alert(this.queryData[0]);
                        // alert(this.response.data);

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
                    updateShowTicketInfo(
                        { 
                            ID :this.editedItem['id'],
                            tour_id:this.editedItem['show_id'],
                            show_id:this.editedItem['tour_id'],
                            // show_date:this.editedItem['show_date'],
                            Ticket_type:this.editedItem['Ticket_type']
                        }
                    ).then(response => {
                        this.queryLoaderDialog2=false;
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息更新成功'})
                        this.close();

                         getShowTicketFlowInfo(
                        { 
                            ID:this.submit_ID,

                            show_id:this.submit_show_id,
                            tour_id:this.submit_tour_id,
                            // show_date:this.submit_show_date,
                            Ticket_type:this.submit_Ticket_type
                        }
                                ).then(response => {
                                this.queryData = response.data
                                }).catch( err =>{
                                })

                    }).catch(err=>{
                        this.queryLoaderDialog=false;
                        this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('信息更新失败！')})
                        console.log(err);
                    })
                },2000
            )
        },
        deleteItem (item) {
            this.delIndex = this.queryData.indexOf(item)
            this.delItem = Object.assign({}, item)
            //this.dialog = true
            this.deleteDialog=true
           
            },   
        deleteItemconfirm(){
            // this.deleteDialog=false
            setTimeout(
                ()=>{
                    deleteShowTicketFlowInfo(
                        {
                                ID:this.delItem['id'],
                                    // tour_id:this.editedItem['show_id'],
                                    // show_id:this.editedItem['tour_id'],
                                    // // show_date:this.editedItem['show_date'],
                                    // Ticket_type:this.editedItem['Ticket_type']
                        }
                    ).then(response=>{
                        this.deleteDialog=false;
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息删除成功'})
                        this.close();

                            getShowTicketFlowInfo(
                                { 
                                    ID:this.submit_ID,

                                    show_id:this.submit_show_id,
                                    tour_id:this.submit_tour_id,
                                    // show_date:this.submit_show_date,
                                    Ticket_type:this.submit_Ticket_type
                                }
                                    ).then(response => {
                                    this.queryData = response.data
                                    }).catch( err =>{
                                    })

                    }).catch(err=>{
                        this.deleteDialog=false;
                        this.queryLoaderDialog=false;
                        this.$store.dispatch('showToastNotify',{type:'error',info:'信息删除失败'})
                        console.log(err);
                    })
                },1000
            )
        },  

        deleteItemInfo(){
            this.submit_ID=null;
            this.submit_show_id=null;
            this.submit_tour_id=null;
            this.submit_Ticket_type=null;
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
    .zms-showTicket{
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