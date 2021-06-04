<template>
  <div class="zms-home-notice">
      <v-card  ripple="false" elevation="10" class="zms-card-noborder" >
            <div class="zms-home-title2 zms-home-body2">
                <v-icon>mdi-information</v-icon> 园区通知
            </div>
            <div class="zms-home-body">
                <div>
                    <v-chip class="ma-2" color="primary" ripple="false" label text-color="white"><v-icon left>mdi-label</v-icon>通知</v-chip>2020-2021（二）学期嘉定校区民族重新学习班上课时间一览 （3月15日已更新）
                </div>
                <div>
                    <v-chip class="ma-2" color="primary" ripple="false" label text-color="white"><v-icon left>mdi-label</v-icon>通知</v-chip>2021年国家公派研究生项目之线上Live申请经验分享会（第三场：11月27日晚）

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