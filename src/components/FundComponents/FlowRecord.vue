<template>
    <div class="zms-anicare" :class="nmNightClass">
        <!--删除项目提示框-->
        <alert-messagebox 
        :alertTitle="$t('fund.deleteRecordTitle')" 
        :alertBody="$t('fund.deleteRecord')" 
        :alertLevel="`warning`" 
        ref="delete_entry_box"
        @alertConfirm="deleteEntry"/>

        <!--无权查看提示框-->
        <alert-messagebox 
        :alertTitle="$t('fund.operatorMismatchTitle')" 
        :alertBody="$t('fund.operatorMismatch')" 
        :alertLevel="`error`" 
        ref="operator_mismatch_box"/>

        <!--转移提示框-->
        <alert-messagebox 
        :alertTitle="$t('fund.permissionTransferTitle')" 
        :alertBody="$t('fund.permissionTransfer')+$t('fund.permissionTransferPref')+transferTo" 
        :alertLevel="`warning`" 
        @alertConfirm="transferFinal"
        ref="permission_transfer_box"/>

        <!--事务进行提示框/删除-->
        <pending-progress-card :zmsPendingList="pendingList" :zmsShow="pendingShow"/>
        <!--事务进行提示框/更新-->
        <pending-progress-card :zmsPendingList="pendingList2" :zmsShow="pendingShow2"/>
        <!--事务进行提示框/查询-->
        <pending-progress-card :zmsPendingList="pendingList3" :zmsShow="pendingShow3"/>
    
        <v-container>
            <v-row>
                <v-col lg="3" xl="3">
                    <v-icon color="primary">mdi-filter-plus</v-icon>
                     <span class="zms-query-title">查询条件</span>
                </v-col>
                <v-col lg="8" xl="8">
                    <v-icon color="primary">mdi-note-search</v-icon>
                    <span class="zms-query-title">查询结果</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col lg="3" xl="3">
                    <v-card class="zms-special-card">
                        <div class="zms-query-filter">
                            <div>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" class="zms-vertical-col-height">
                                            <v-text-field label="流水编号" placeholder="请输入流水编号" prepend-icon="mdi-music-accidental-sharp"  />
                                        </v-col>
                                        <v-col cols="12" class="zms-vertical-col-height">
                                            <v-text-field label="交易名称" placeholder="请输入疾病类型" prepend-icon="mdi-form-textbox"  />
                                        </v-col>
                                        <v-col cols="12" class="zms-vertical-col-height">
                                            <v-text-field label="交易类型" placeholder="请输入交易类型" prepend-icon="mdi-tag"  />
                                        </v-col>
                                        <v-col cols="12" class="zms-vertical-col-height">
                                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="date" label="交易日期" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                                    </v-text-field>
                                                </template>
                                                <v-date-picker color="primary" width="400" v-model="date" @input="menu2 = false"></v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        
                                    </v-row>
                                </v-container>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                        </v-col>
                                        <v-col cols="12">
                                            <v-btn v-ripple block class="zms-width"  color="error" >
                                                <v-icon>mdi-filter-minus</v-icon>&nbsp;&nbsp;删除过滤条件
                                            </v-btn>
                                        </v-col>

                                        <v-col cols="12" >
                                            <v-btn v-ripple block class="zms-width"  color="primary" >
                                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;查找负责项目
                                            </v-btn>
                                        </v-col>
                                        
                                        
                                        <v-col cols="12">
                                            <v-btn v-ripple block class="zms-width"  color="primary" >
                                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-divider/>
                <v-col lg="9" xl="9">
                    <div class="zms-query-result">
                        <div class="zms-query-result-table">
                            <v-data-table
                                :headers="headers"
                                :items="queryData"
                                :page.sync="page"
                                :items-per-page="10"
                                hide-default-footer
                                @page-count="pageCount = $event"
                                class="elevation-1"
                            >
                            <template v-slot:top>
                                <v-toolbar flat >
                                    <v-toolbar-title>查询结果</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-dialog persistent v-model="dialog" max-width="700">
                                        <v-card :ripple="{class:null}">
                                            <v-card-title class="zms-strip-bg text-h5 text--white primary " color="warning">
                                                <v-icon color="white">mdi-lead-pencil</v-icon>&nbsp;
                                                <span class="text--white" style="color:#ffffff !important;">
                                                    {{$t('fund.modifyEntry')}}
                                                </span>
                                            </v-card-title>
                                            <v-card-text>
                                                <br/>
                                                <v-container>
                                                    <v-row>
                                                        <v-icon color="primary">mdi-information</v-icon>
                                                        <span class="zms-query-title">{{$t('fund.basicInfo')}}</span>
                                                    </v-row>
                                                    <v-row>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem['id']" label="Dessert name"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem['disease_name']" label="Calories"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem['veterinary_name']" label="Fat (g)"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem['drug']" label="Carbs (g)"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="4">
                                                            <v-text-field v-model="editedItem['treatment_progress']" label="Protein (g)"></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                    <v-divider/>
                                                    <v-row>
                                                        &nbsp;
                                                    </v-row>
                                                    <v-row>
                                                        <v-icon color="primary">mdi-book-arrow-right</v-icon>
                                                        <span class="zms-query-title">{{$t('fund.permissionTransferTitle')}}</span>
                                                    </v-row>
                                                    
                                                    <v-row>
                                                        <v-col>
                                                            {{$t('fund.permissionTransferDetail')}}
                                                        </v-col>
                                                        <v-col>
                                                            <v-btn class="zms-strip-bg-slim" block light color="error" @click="transferFirst">
                                                                <v-icon>mdi-arrow-horizontal-lock</v-icon>{{$t('fund.permissionTransferTitle')}}
                                                            </v-btn>
                                                        </v-col>
                                                    </v-row>
                                                    <!-- 员工选择器 -->
                                                    <item-selector ref='staselector' :zmsSelectorMode="1" @itemSelectorSelect="transferSecond(arguments)"></item-selector>
                
                                                </v-container>
                                            </v-card-text>
                                            <v-divider/>   
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn  class="zms-halfwidth3" light color="primary" @click="close">
                                                    <v-icon>mdi-arrow-left</v-icon>{{$t('common.cancel')}}
                                                </v-btn>
                                                <v-btn  class="zms-halfwidth3" light color="success" @click="close">
                                                    <v-icon>mdi-check</v-icon>{{$t('common.save')}}
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
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
import PendingProgressCard from '../CommonComponents/PendingProgressCard.vue'
import ItemSelector from '../CommonComponents/ItemSelector.vue'
import {deleteFlowEntry,updateFlowEntry} from '../../apis/fund'
export default {
    name: 'FlowRecord',
    components:{
        AlertMessagebox,
        PendingProgressCard,
        ItemSelector,
    },
    created(){
    },
    methods:{
        close () {
            this.dialog = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },
        transferFirst(){
            this.$refs.staselector.show()
        },
        transferSecond(x){
            this.transferTo=x[0]
            this.$refs.permission_transfer_box.show()
        },
        transferFinal(){
            this.pendingShow2=1
            setTimeout(
                ()=>{
                    updateFlowEntry().then(response=>{
                        this.pendingShow2=0
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('common2.transactionDone')})
                    })
                },1000
            )
        },
        editItem (item) {
            let x=0
            if(x){
                this.$refs.operator_mismatch_box.showAlert();
                return;
            }
            this.editedIndex = this.queryData.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem (item) {
            this.editedIndex = this.queryData.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.$refs.delete_entry_box.showAlert()
        },
        deleteEntry(){
            this.pendingShow=1
            setTimeout(
                ()=>{
                    deleteFlowEntry().then(response=>{
                        this.pendingShow=0
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('common2.transactionDone')})
                    })
                },1000
            )
        }
    },
    computed:{
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
    },
    data(){
        return{
        headers:[
            {text: '流水号', value: 'fund_acc_id'},
            {text: '名称', value: 'name'},
            {text: '时间', value: 'transaction_time'},
            {text: '类型', value: 'type'},
            {text: '金额', value: 'amount'},
            {text: '账户', value: 'bank_acc_id'},
            {text: '处理人', value: 'staff_id'},
            { text: '操作', value: 'actions', sortable: false }
            
        ],
        pageCount:0,
        page:1,
        transferTo:0,
        pendingList:[this.$t('fund.deleteRecordTran')],
        pendingShow:0,
        pendingList2:[this.$t('fund.updateRecordTran')],
        pendingShow2:0,
        dialog:0,
        queryData:[
            {fund_acc_id:'192ACFB7',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFB8',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFB9',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFBA',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFBB',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFBC',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'}
        ],
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
        
        
    }
  
}
</script>
<style scoped lang="scss">
    .zms-special-card{
        margin-top:10px;
    }
    .zms-query-pagination{
        margin-top:10px;
        transition: all .5s;
    }
    .zms-query-result{
        margin-top:0px;
    }
    .zms-anicare{
        padding-left:10px;
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
    .zms-vertical-col-height{
        height:75px !important;
    }
</style>