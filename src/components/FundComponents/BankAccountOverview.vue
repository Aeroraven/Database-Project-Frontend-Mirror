<template>
  <div class="zms-home-notice">
        <div class="zms-bankaccount-op">
            <div class="zms-bankaccount-optitle">
                <v-icon color="primary">mdi-cog</v-icon> <span class="zms-query-title">账户信息管理</span>
                
            </div>
            <span class="zms-bankaccount-subtext">可以进行下列操作</span>
            <v-btn @click="calloutNewBankAccountBox" light color="primary" >
                <v-icon>mdi-plus-thick</v-icon>{{$t('fund.newBankAccountBtn')}}
            </v-btn>
        </div>
        
        <v-divider/>

        <div class="zms-bankaccount-list">
            <div class="zms-bankaccount-optitle">
                <v-icon color="primary">mdi-cog</v-icon> <span class="zms-query-title">账户概览</span>
            </div>
            <span>下方列出了当前所有的园区账户信息</span>
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in accountList.length" :key="item" class="align-self-stretch">
                        <v-card :class="cardNightClass" :ripple="{ class: null }" class="mx-auto" max-width="400">
                            <v-img class="white--text align-end" height="170px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                <v-card-title>{{$t('fund.account')+` `+accountList[item-1].name}}</v-card-title>
                            </v-img>
                            <v-card-subtitle class="pb-0">{{`ID `+accountList[item-1].id}}</v-card-subtitle>
                            <v-card-text class="text--primary">
                                <div><b>{{$t('fund.balance')}}</b>{{`: `+accountList[item-1].balance}}</div>
                                <div><b>{{$t('fund.owner')}}</b>{{`: `+accountList[item-1].owner}}</div>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" @click="gotoItem(item)" text>查看关联交易</v-btn>
                                <v-btn color="primary" text>管理权限</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <!--获取账户列表-->
            <pending-progress-card :zmsShow="pendingBoxAccountFetch" :zmsPendingList="pendingBoxAccountFetchList"/>
            <!--创建新账户-->
            <pending-progress-card :zmsShow="pendingBoxNewAccount" :zmsPendingList="pendingBoxNewAccountList"/>
            <alert-messagebox :alertMode="`new`" :alertCustomizeToolbox="true"
            :alertLevel="`info`" ref="new_bank_account_box" :alertTitle="$t('fund.newBankAccount')"
            :alertWidth="`700`" :alertIcon="`mdi-star-plus`">
                <template v-slot:body>
                    <v-icon color="primary">mdi-plus-thick</v-icon>
                    <span class="zms-query-titlex">{{$t('fund.fillInfo')}}</span>
                    <v-alert type="info" class="zms-force-nowrap-e" text border="left">
                        {{$t('fund.initialOwnerTip')}}
                    </v-alert>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="newItem['id']" :label="$t('fund.id')" prepend-icon="mdi-identifier"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="newItem['name']" :label="$t('fund.name')" prepend-icon="mdi-tag"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="newItem['initial_balance']" :label="$t('fund.initialBalance')" prepend-icon="mdi-currency-cny"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="newItem['note']" :label="$t('fund.note')" prepend-icon="mdi-file-outline"></v-text-field>
                            </v-col>                     
                        </v-row>
                    </v-container>
                </template>
                <template v-slot:toolbar>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="error" @click="closeNewBanAccBox">
                        <v-icon>mdi-arrow-left</v-icon>{{$t('common.cancel')}}
                    </v-btn>
                    <v-btn class="zms-fullwidth" v-bind="attrs" v-on="on" light color="success" @click="createBankAccount">
                        <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                </template>
            </alert-messagebox>
        </div>
  </div>
</template>

<script>
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
import PendingProgressCard from '../CommonComponents/PendingProgressCard.vue'
import {addBankAccount,getAccountList} from '../../apis/fund.js'
export default {
    components: {  AlertMessagebox,PendingProgressCard },
    name: 'BankAccountOverview',
    props:{
        drawer:Boolean,
    },
    created(){
        this.fetchAccountList()
    },
    data(){
        return{
            newItem:{
                id:null,
                name:null,
                initial_balance:null,
                note:null
            },
            accountList:[],
            pendingBoxNewAccount:0,
            pendingBoxNewAccountList:[this.$t('fund.newBankAccountTran')],
            pendingBoxAccountFetch:0,
            pendingBoxAccountFetchList:[this.$t('fund.fetchAccountTran')]
        }
    },
    methods:{
        gotoItem(x){
            this.$store.dispatch('showToastNotify',{type:'default',info:this.$t('fund.searchRelatedTrans')})
            this.$emit('searchRelatedTransactions',x)
        },
        calloutNewBankAccountBox(){
            this.$refs.new_bank_account_box.showAlert()
        },
        closeNewBanAccBox(){
            this.$refs.new_bank_account_box.clickCancel()
        },
        fetchAccountList(){
            this.pendingBoxAccountFetch=1
            setTimeout(
                ()=>{
                    getAccountList().then(response=>{
                        this.pendingBoxAccountFetch=0;
                        this.accountList=response.data
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('common2.transactionDone')})
                    })
                },1000
            )
        },
        createBankAccount(){
            this.pendingBoxNewAccount=1
            setTimeout(
                ()=>{
                    addBankAccount().then(response=>{
                        this.pendingBoxNewAccount=0;
                        this.closeNewBanAccBox();
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('common2.transactionDone')})
                    })
                },1000
            )
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
    },
};
</script>

<style scoped lang="scss">
    .zms-bankaccount-subtext{
        margin-bottom: 5px;
        display: block;
    }
    .zms-bankaccount-op{
        margin-bottom: 30px;
    }
    .zms-bankaccount-list{
        margin-top:10px;
    }
    .zms-bankaccount-optitle{
        font-weight: bold;
        margin-bottom:10px;
    }
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