<template>
    <div>
        <!--加载待处理列表-->
        <pending-progress-card :zmsPendingList="pendingList" :zmsShow="pendingShow"/>
        <!--审核提交-->
        <pending-progress-card :zmsPendingList="pendingList2" :zmsShow="pendingShow2"/>

        <alert-messagebox     
        :alertTitle="$t('common3.transactionFailTitle')"
        :alertBody="$t('common3.transactionFail')+errorInfo"
        :alertLevel="`error`"
        :alertOnlyConfirm="true"
        ref="error_done" />

        <v-container>
            <v-row>
                <v-col sm="3" md="3" xl="3" lg="3" cols="12">
                    <v-container>
                        <v-row>
                            <v-icon color="primary">mdi-timer-sand</v-icon> <span class="zms-query-titlex" >{{$t('proc2.pendinglst')}}</span>
                        </v-row>
                        <br/><br/>
                        <v-row>
                            <v-col cols="12">
                                <div style="height:400px;overflow-y:scroll;">
                                    <v-list dense>
                                        <v-list-item-group  v-model="zmsselectedItem" color="primary">
                                            <v-list-item v-for="(item, i) in zmsItem" :key="i" @click="fselectItem(i)">
                                                <v-list-item-icon>
                                                    <v-icon>mdi-cube-outline</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <!--请求选择器-->
                                                    <span>
                                                        <span class="zms-anisel-av"><span class='zms-anisel-bold'>{{item.id}}</span>
                                                        &nbsp;{{item.name}}&nbsp;&nbsp;<br/>
                                                        <span class='zms-anisel-small'>{{item.initiator}} · {{item.budget}}</span></span>
                                                    </span>
                                                </v-list-item-content>
                                            </v-list-item>

                                            <v-list-item v-if="zmsItem.length==0" disabled>
                                                <v-list-item-icon>
                                                    <v-icon>mdi-information</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <small>{{$t('proc2.noPendingItems')}}</small>
                                                </v-list-item-content>
                                            </v-list-item>

                                        </v-list-item-group>
                                    </v-list>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col sm="9" md="9" xl="9" lg="9" cols="12">
                    <v-container>
                        <v-row>
                            <v-icon color="primary">mdi-card-search</v-icon> <span class="zms-query-titlex" >{{$t('proc2.approvOverview')}}</span>
                        </v-row>
                        <br/><br/>
                        <v-row>
                            <v-col cols="12">
                                <v-container>
                                    <v-row>
                                        <span v-if="selId!=null">
                                            <b class="primary--text zms-fontlargex">// Purchase Request #{{this.zmsItem[this.selId].id}}</b>
                                        </span>
                                    </v-row>
                                    <v-row>
                                        <v-col sm="4" md="4" xl="4" lg="4" cols="12">
                                            <v-container>
                                                <v-row>
                                                    <v-col   cols="12" sm="12" md="12" class="zms-vertical-col-height">
                                                        <v-text-field v-model="itemName" :label="$t('proc2.name')" readonly :placeholder="$t('common.pleaseInput')+$t('proc2.name')" prepend-icon="mdi-tag"  />
                                                    </v-col>
                                                    <v-col  cols="12" sm="12" md="12" class="zms-vertical-col-height">
                                                        <v-text-field v-model="itemInitiator" :label="$t('proc2.initiator')" readonly :placeholder="$t('common.pleaseInput')+$t('proc2.initiator')" prepend-icon="mdi-account"  />
                                                    </v-col>
                                                    <v-col  cols="12" sm="12" md="12" class="zms-vertical-col-height">
                                                        <v-text-field v-model="itemPrice" :label="$t('proc2.budget')" readonly :placeholder="$t('common.pleaseInput')+$t('proc2.totalprice')" prepend-icon="mdi-currency-cny"  />
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-col>
                                        <v-divider vertical/>
                                        <v-col sm="8" md="8" xl="8" lg="8" cols="12">
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
                                                        <v-toolbar-title>{{$t('proc2.purchaseItemList')}}</v-toolbar-title>
                                                        <v-spacer></v-spacer>
                                                    </v-toolbar>
                                                </template>
                                            </v-data-table>
                                            <div class="zms-query-pagination">
                                                <v-pagination v-model="page" :length="pageCount"></v-pagination>
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-btn @click="submitApproveRes('拒绝')" 
                                            :disabled="selId===null"
                                            v-ripple block class="zms-width"  color="error" >
                                                <v-icon>mdi-progress-close</v-icon>&nbsp;&nbsp;{{$t('proc2.deny')}}
                                            </v-btn>
                                        </v-col>
                                        <v-col>
                                            <v-btn @click="submitApproveRes('已审批')"
                                            :disabled="selId===null"
                                             v-ripple block class="zms-width"  color="success" >
                                                <v-icon>mdi-checkbox-marked-outline</v-icon>&nbsp;&nbsp;{{$t('proc2.approve')}}
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import {getPendingRequests,changeProcStatus} from '../../apis/procurement'
import PendingProgressCard from '../CommonComponents/PendingProgressCard.vue'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
export default{
    name:'ProcurementApprove',
    components:{PendingProgressCard,AlertMessagebox},
    data(){
        return{
            zmsItem:[],
            pendingList:[this.$t('proc2.fetchPendingTran')],
            pendingShow:0,
            pendingList2:[this.$t('proc2.submitApproveTran')],
            pendingShow2:0,
            selId:null,
            pageCount:0,
            page:null,
            itemName:null,
            itemQty:null,
            itemPrice:null,
            zmsItemX:[]
        }
    },
    created(){
        this.fetchPendingList()
    },
    methods:{
        fselectItem(x){
            this.selId=x
            this.itemName=this.zmsItem[this.selId].name
            this.itemInitiator=this.zmsItem[this.selId].initiator
            this.itemPrice=this.zmsItem[this.selId].totalprice
        },
        fetchPendingList(){
            this.pendingShow=1
            setTimeout(
                ()=>{
                    getPendingRequests().then(response=>{
                        let X=[]
                        this.zmsItem.splice(0,this.zmsItem.length)
                        this.zmsItemX=response.data
                        for(let i=0;i<this.zmsItemX.length;i++){
                            if(X.indexOf(this.zmsItemX[i].id)==-1&&this.zmsItemX[i].stat=='待审批'){
                                X.push(this.zmsItemX[i].id)
                                this.zmsItem.push(null)
                                this.$set(this.zmsItem,this.zmsItem.length-1,{
                                    id:this.zmsItemX[i].id,
                                    name:this.zmsItemX[i].name,
                                    stat:this.zmsItemX[i].stat,
                                    initiator:this.zmsItemX[i].initiator,
                                    inittime:this.zmsItemX[i].inittime,
                                    budget:this.zmsItemX[i].budget,
                                    remarks:this.zmsItemX[i].remarks,
                                })
                            }
                        }

                        this.pendingShow=0
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('common2.transactionDone')})
                    }).catch( err => {
                        this.pendingShow=0;
                        this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                        this.$refs.error_done.showAlert();
                    });
                },500
            )
        },
        submitApproveRes(x0vNPTTo5Le6tby4s51lW3ilUsvPPT1){
            this.pendingShow2=1
            setTimeout(
                ()=>{
                    changeProcStatus({
                        id:this.zmsItem[this.selId].id,
                        status:x
                    }).then(response=>{
                        this.pendingShow2=0
                        this.fetchPendingList();
                        this.selId=null
                        this.itemName=null
                        this.itemInitiator=null
                        this.itemPrice=null
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('common2.transactionDone')})
                    }).catch( err => {
                        this.pendingShow2=0;
                        this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                        this.$refs.error_done.showAlert();
                    });
                },500
            )
        }
    },
    computed:{
        headers(){
            return [
                {text: this.$t('proc2.name'), value: 'name'},
                {text: this.$t('proc2.quantity'), value: 'qty'},
                //{text: this.$t('proc2.price'), value: 'price'},
            ]
        },
        queryData(){
            if(this.zmsItem===null||this.zmsItem.length===0){
                return []
            }
            if(this.selId>this.zmsItem.length||this.selId===null){
                return []
            }
            this.queryData.splice(0,this.queryData.length)
            let r=this.zmsItem[this.selId].id
            for(let i=0;i<this.zmsItemX.length;i++){
                if(this.zmsItemX[i].id===r){
                    this.queryData.push(null)
                    this.$set(this.queryData,i,{
                        name:this.zmsItemX[i].itemId,
                        qty:this.zmsItemX[i].itemCount,
                    })
                }
            }
            //return this.zmsItem[this.selId].content
        }
    }

}
</script>
<style>
    
</style>
