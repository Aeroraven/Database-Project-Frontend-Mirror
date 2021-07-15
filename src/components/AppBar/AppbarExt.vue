<template>
  <div class="zms-appbar-ext">
    <alert-messagebox
      :alertTitle="`退出登录`"
      :alertBody="`是否退出 ZMS 动物园管理系统？`"
      :alertLevel="`warning`"
      ref="error_done"
      @alertConfirm="exitLogin"
    />
      <span class="zms-appbar-acc">{{userNameX}} ({{userIdX}})</span>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="zms-margin-rt" color="primary" text v-bind="attrs"
            v-on="on" >
            <v-icon color="white" class="float-right" @click="goBack">mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        上一页
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="zms-margin-rt" color="primary" text v-bind="attrs"
            v-on="on">
            <v-icon color="white" class="float-right" @click="switchLock">mdi-lock</v-icon>
          </v-btn>
        </template>
        锁定ZMS
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="zms-margin-rt" color="primary" text @click="exitLoginCall" v-bind="attrs"
            v-on="on">
            <v-icon color="white" class="float-right" >mdi-exit-to-app</v-icon>
          </v-btn>
        </template>
        退出ZMS
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn stclass="zms-margin-rt" color="primary" text @click="switchNightMode" v-bind="attrs"
            v-on="on">
            <v-icon color="white" class="float-right" >mdi-weather-night</v-icon>
          </v-btn>
        </template>
        切换夜间模式
      </v-tooltip>
      
  </div>
</template>

<script>
import DisintegrateButton from '../Gadgets/DisintegrateButton.vue';
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
export default {
    name: 'AppbarExt',
    components:{DisintegrateButton,AlertMessagebox},
    computed:{
        
    },
    data(){
      return{
        locked:false
      }
    },
    methods:{
      goBack(){
        this.$router.back()
      },
      exitLogin(){
        localStorage.setItem('zmsToken','')
        localStorage.setItem('zmsBKId','')
        window.location.href='/Login'
      },
      exitLoginCall(){
        this.$refs.error_done.showAlert()
      },
      switchNightMode(){
        this.$vuetify.theme.dark=!this.$vuetify.theme.dark
        localStorage.setItem('zmsAppearance.darkMode',this.$vuetify.theme.dark)
      },
      switchLock(){
        this.$emit('lockPress')
      }
    },
    computed:{
      zmsLock(){
        return{
          'zms-hidden':this.locked==false
        }
      },
      userNameX(){
          return localStorage.getItem('zmsBKName')
      },
      userIdX(){
          return localStorage.getItem('zmsBKId')
      },
    }
};
</script>

<style scoped lang="scss">
    .zms-hidden{
      display:none;
    }
    .zms-margin-rt{
      margin-right:10px;
    }
    .zms-appbar-acc{
      font-weight: bold;
      color:#ffffff;
      margin-right:15px;
    }
    .zms-lock-screen{
      position:fixed;
      left:0px;
      right:0px;
      top:0px;
      bottom:0px;
    }
</style>