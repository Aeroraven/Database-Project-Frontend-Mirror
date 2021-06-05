<template>
  <div class="zms-home-notice">
        <div class="zms-bankaccount-op">
            <div class="zms-bankaccount-optitle">
                <v-icon color="primary">mdi-cog</v-icon> <span class="zms-query-title">账户信息管理</span>
                
            </div>
            <span class="zms-bankaccount-subtext">可以进行下列操作</span>
            <v-btn  light color="primary" >
                <v-icon>mdi-plus-thick</v-icon>增加账户
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
                    <v-col cols="12" md="4" v-for="item in 5" :key="item" class="align-self-stretch">
                        <v-card :ripple="{ class: null }" class="mx-auto" max-width="400">
                            <v-img class="white--text align-end" height="170px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                <v-card-title>帐户 HelloWorld</v-card-title>
                            </v-img>
                            <v-card-subtitle class="pb-0">编号 12345</v-card-subtitle>
                            <v-card-text class="text--primary">
                                <div>Whitehaven Beach</div>
                                <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="primary" text>查看信息</v-btn>
                                <v-btn color="primary" text>查看关联交易</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
  </div>
</template>

<script>

export default {
    components: {  },
    name: 'BankAccountOverview',
    props:{
        drawer:Boolean,
    },
    methods:{
        
    }
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