<template>
  <div class="zms-home-notice">
      <alert-messagebox
        :alertTitle="`退出登录`"
        :alertBody="`是否退出 ZMS 动物园管理系统？`"
        :alertLevel="`warning`"
        ref="error_done"
        @alertConfirm="exitLogin"
        />
      <v-card  :ripple="{ class: null }" elevation="10" class="zms-card-noborder" :class="cardNightClass">
            <div class="zms-home-title2 zms-home-body2">
                <v-icon>mdi-account-circle</v-icon> {{$t('home.accountOv')}}
            </div>
            <div class="zms-home-body">
                <v-container>
                    <v-row>
                        <v-col cols="3" style="padding-right:10px">
                            <v-avatar size="112" color="grey">
                                <v-img contain :src="avatarImg" aspect-ratio="16/9" height="100px" class="zms-img zms-img-demo"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col cols="9">
                            <b>{{userNameX}} </b> {{userIdX}}<br/>
                            {{userPositionX}}<br/><br/>
                            <!--<v-btn  class="zms-fullwidth"  light color="primary" >
                                <v-icon>mdi-cog</v-icon>设置
                            </v-btn>&nbsp;-->

                            <v-btn  class="zms-fullwidth" color="error" @click="exitLoginCall">
                                <v-icon>mdi-exit-to-app</v-icon>退出
                            </v-btn>
                            <!--<v-dialog v-model="dialog_logout" width="500">
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
                            </v-dialog>-->
                            
                        </v-col>
                    </v-row>
                </v-container>
                
            </div>
      </v-card>
  </div>
</template>

<script>
import {getUserInfo} from '../../apis/homepage'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
export default {
    components: { AlertMessagebox },
    name: 'HomepageAccountOverview',
    props:{
        drawer:Boolean,
    },
    computed:{
        userNameX(){
            return localStorage.getItem('zmsBKName')
        },
        userIdX(){
            return localStorage.getItem('zmsBKId')
        },
        userPositionX(){
            if(localStorage.getItem('zmsBKPosition')==='Admin'){
                return '系统管理员 (特权用户)'
            }
            return localStorage.getItem('zmsBKPosition')+' (普通用户)'
        },
        cardNightClass(){
            return{
                'zms-cardcolor-light':!this.$vuetify.theme.dark,
                'zms-cardcolor-dark':this.$vuetify.theme.dark,
            }
        }
    },
    methods:{
        exitLogin(){
            localStorage.setItem('zmsToken','')
            localStorage.setItem('zmsBKId','')
            this.$router.push('/Login')
        },
        exitLoginCall(){
            this.$refs.error_done.showAlert()
      },
        fetchUserInfo(){
            getUserInfo().then(response => {
                this.userInfo=response.data
            })
        },
        exitLoginEmit(){
            this.$emit('exitLogin');
        }
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
    }
    
    //#222526
    
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
    .zms-img-demo{
        filter:brightness(19200%)  saturate(0%)
    }
</style>