<template>
  <div class="zms-home-notice">
      <v-card  ripple="false" elevation="10" class="zms-card-noborder" >
            <div class="zms-home-title2 zms-home-body2">
                <v-icon>mdi-information</v-icon> 帐户信息
            </div>
            <div class="zms-home-body">
                <v-container>
                    <v-row>
                        <v-col cols="4">
                            <v-img contain :src="avatarImg" aspect-ratio="16/9" height="100px" class="zms-img"></v-img>
                        </v-col>
                        <v-col cols="8">
                            <b>张三</b> 1950000<br/>
                            系统管理员<br/><br/>
                            <v-btn  class="zms-fullwidth"  light color="primary" >
                                <v-icon>mdi-cog</v-icon>设置
                            </v-btn>&nbsp;
                            <v-btn  class="zms-fullwidth"  light color="error" >
                                <v-icon>mdi-exit-to-app</v-icon>退出
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
                
            </div>
      </v-card>
  </div>
</template>

<script>

export default {
    components: {  },
    name: 'HomepageAccountOverview',
    props:{
        drawer:Boolean,
    },
    methods:{
        
    },created(){
        let urlTemp = this.$store.state.sAsset_WelcomeIcon;
        this.avatarImg = require("@/"+urlTemp)
    },data:()=>{
        return{
            avatarImg:null,
        }
    },
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