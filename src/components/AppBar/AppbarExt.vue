<template>
  <div class="zms-appbar-ext">
      <span class="zms-appbar-acc">张三 (1930000)</span>
      <v-btn class="zms-margin-rt" color="primary" text >
        <v-icon color="white" class="float-right" @click="switchLock">mdi-lock</v-icon>
      </v-btn>
      <v-btn class="zms-margin-rt" color="primary" text >
        <v-icon color="white" class="float-right">mdi-exit-to-app</v-icon>
      </v-btn>
      <v-btn stclass="zms-margin-rt" color="primary" text>
        <v-icon color="white" class="float-right" @click="switchNightMode" >mdi-weather-night</v-icon>
      </v-btn>
      
  </div>
</template>

<script>
import DisintegrateButton from '../Gadgets/DisintegrateButton.vue';

export default {
    name: 'AppbarExt',
    components:{DisintegrateButton},
    data(){
      return{
        locked:false
      }
    },
    methods:{
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
      }
    }
};
</script>

<style scoped lang="scss">
    .zms-hidden{
      display:none;
    }
    .zms-margin-rt{
      margin-right:20px;
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