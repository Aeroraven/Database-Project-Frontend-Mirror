<template>
  <div class="zms-home-notice">
      <v-card  :ripple="{ class: null }" elevation="10" class="zms-card-noborder" >
            <div class="zms-home-title2 zms-home-body2">
                <v-icon>mdi-account-circle</v-icon> 帐户信息
            </div>
            <div class="zms-home-body">
                <v-container>
                    <v-row>
                        <v-col cols="4">
                            <v-img contain :src="avatarImg" aspect-ratio="16/9" height="100px" class="zms-img"></v-img>
                        </v-col>
                        <v-col cols="8">
                            <b>{{userInfo.name}}</b> {{userInfo.userid}}<br/>
                            {{userInfo.permission}}<br/><br/>
                            <v-btn  class="zms-fullwidth"  light color="primary" >
                                <v-icon>mdi-cog</v-icon>设置
                            </v-btn>&nbsp;
                            <v-dialog v-model="dialog_logout" width="500">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="error" @click="console.log(on+attrs);">
                                        <v-icon>mdi-exit-to-app</v-icon>退出
                                    </v-btn>
                                </template>
                                <v-card :ripple="{class:null}">
                                    <v-card-title class="text-h5 text--white red zms-strip-bg" color="error">
                                        <span class="text--white" style="color:#ffffff !important;">退出登录</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <span class="zms-poptip-body">确认退出ZMS管理系统？您所有未保存的工作将丢失。</span>
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn  class="zms-fullwidth"  light color="error" @click="dialog_logout=false;">
                                            <v-icon>mdi-exit-to-app</v-icon>确认退出
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            
                        </v-col>
                    </v-row>
                </v-container>
                
            </div>
      </v-card>
  </div>
</template>

<script>
import {getUserInfo} from '../../apis/homepage'
export default {
    components: {  },
    name: 'HomepageAccountOverview',
    props:{
        drawer:Boolean,
    },
    methods:{
        fetchUserInfo(){
            getUserInfo().then(response => {
                this.userInfo=response.data
            })
        },
    },created(){
        let urlTemp = this.$store.state.sAsset_WelcomeIcon;
        this.avatarImg = require("@/"+urlTemp)
        this.fetchUserInfo()
    },data:()=>{
        return{
            avatarImg:null,
            dialog_logout:false,
            userInfo:{
                userid:'---',
                name:'---',
                permission:'---',
            }
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