<template>
  <div class="zms-home-notice">
        <span>下方列出了园区内所有的仓库</span>
        <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in 5" :key="item" class="align-self-stretch">
                    <v-card :ripple="{ class: null }" class="mx-auto" max-width="400">
                        <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-card-title>仓库 HelloWorld</v-card-title>
                        </v-img>
                        <v-card-subtitle class="pb-0">编号 12345</v-card-subtitle>
                        <v-card-text class="text--primary">
                            <div>Whitehaven Beach</div>
                            <div>Whitsunday Island, Whitsunday Islands</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="primary" text>查看信息</v-btn>
                            <v-btn color="primary" text>编辑</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
  </div>
</template>

<script>

export default {
    components: {  },
    name: 'WarehouseInfo',
    props:{
        drawer:Boolean,
    },
    methods:{
        
    }
};
</script>

<style scoped lang="scss">
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