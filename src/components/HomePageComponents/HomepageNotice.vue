<template>
  <div class="zms-home-notice">
      <v-card  :ripple="{ class: null }" elevation="10" class="zms-card-noborder" >
            <div class="zms-home-title2 zms-home-body2">
                <v-icon>mdi-bell-alert</v-icon> 园区通知
            </div>
            <div class="zms-home-body">
                <div class="zms-notice"> 
                    <v-chip class="ma-2" color="error" :ripple="false" label text-color="white">
                        <v-icon left>mdi-format-vertical-align-top</v-icon>置顶
                    </v-chip>
                    2021年国家公派研究生项目之线上Live申请经验分享会（第三场：11月27日晚）
                </div>
                <div class="zms-notice"> 
                    <v-chip class="ma-2" color="success" :ripple="false" label text-color="white">
                        <v-icon left>mdi-music</v-icon>活动
                    </v-chip>
                    2021年国家公派研究生项目之线上Live申请经验分享会（第三场：11月27日晚）
                </div>
                <div class="zms-notice"> 
                    <v-chip class="ma-2" color="success" :ripple="false" label text-color="white">
                        <v-icon left>mdi-music</v-icon>活动
                    </v-chip>
                    2021年国家公派研究生项目之线上Live申请经验分享会（第三场：11月27日晚）
                </div>
                <div class="zms-notice"> 
                    <v-chip class="ma-2" color="warning" :ripple="false" label text-color="white">
                        <v-icon left>mdi-exclamation-thick</v-icon>重要
                    </v-chip>
                    2021年国家公派研究生项目之线上Live申请经验分享会（第三场：11月27日晚）
                </div>
                <div class="zms-notice"> 
                    <v-chip class="ma-2" color="warning" :ripple="false" label text-color="white">
                        <v-icon left>mdi-exclamation-thick</v-icon>重要
                    </v-chip>
                    2021年国家公派研究生项目之线上Live申请经验分享会（第三场：11月27日晚）
                </div>
                <div class="zms-notice">
                    <v-chip class="ma-2 " color="primary" :ripple="false" label text-color="white">
                        <v-icon left>mdi-information-outline</v-icon>通知
                    </v-chip>
                    2020-2021（二）学期嘉定校区民族重新学习班上课时间一览 （3月15日已更新）
                </div>
                <div class="zms-notice"> 
                    <v-chip class="ma-2" color="primary" :ripple="false" label text-color="white">
                        <v-icon left>mdi-information-outline</v-icon>通知
                    </v-chip>
                    2021年国家公派研究生项目之线上Live申请经验分享会（第三场：11月27日晚）

                </div>
                
            </div>
      </v-card>
  </div>
</template>

<script>

export default {
    components: {  },
    name: 'HomepageNotice',
    props:{
        drawer:Boolean,
    },
    methods:{
        
    }
};
</script>

<style scoped lang="scss">
    .zms-notice{
        overflow:hidden  ;
        white-space:nowrap;    
        text-overflow:ellipsis;     
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
        background:-webkit-repeating-linear-gradient( 135deg, rgba(245, 245, 245, 0.98), rgba(245, 245, 245, 0.98) 45px, rgba(255, 255, 255, 0.9) 45px, rgba(255, 255, 255, 0.9) 90px ) !important;
    
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