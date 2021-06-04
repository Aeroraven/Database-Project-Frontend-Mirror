<template>
  <div class="zms-home-welcome">
      <v-card outlined ripple="false" class="zms-card-noborder" color="transparent">
            <div class="zms-home-body">
                <div class="zms-home-center">
                    <v-img contain :src="avatarImg" aspect-ratio="16/9" height="150px" class="zms-img"></v-img>
                </div>
                <span class="zms-home-title">欢迎使用 ZMS 动物园管理系统!</span>
                <span class="zms-home-description">
                    
中途岛，面积只有4.7平方公里，特殊的地理位置决定了它战略地位的重要性。岛屿距美国旧金山和日本横滨都相距2800海里，在亚洲和北美之间的太平洋航线的中途，故名中途岛。距珍珠港1135海里，是美国在中太平洋地区的重要军事基地和交通枢纽，也是美军在夏威夷的门户和前哨阵地。丢失中途岛，美太平洋舰队的大本营珍珠港也将不安全。
                </span>
            </div>
      </v-card>
  </div>
</template>

<script>

export default {
    components: {  },
    name: 'HomepageWelcome',
    props:{
        drawer:Boolean,
    },
     created(){
        let urlTemp = this.$store.state.sAsset_WelcomeIcon;
        this.avatarImg = require("@/"+urlTemp)
    },data:()=>{
        return{
            avatarImg:null,
        }
    },
    methods:{
        
    }
};
</script>

<style scoped lang="scss">
    .zms-home-center{
        text-align: center;
    }
    .zms-card-noborder{
        border-width: 0px;
        background-color:#ffffff00;
    }
    .zms-home-title{
        font-size:25px;
        font-weight: bold;
        display:block;
    }
    .zms-home-body{
        margin-left:7%;
        margin-right: 7%;
    }
    .zms-home-welcome{
        display:inline-block;
        vertical-align: top;
        margin-bottom:20px;
        background:transparent;
    }
</style>