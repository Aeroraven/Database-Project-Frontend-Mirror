<template>
  <div class="zms-home-welcome">
      <v-card outlined :ripple="{ class: null }" class="zms-card-noborder" color="transparent">
            <div class="zms-home-body">
                <div class="zms-home-center">
                    <v-img contain :src="avatarImg" aspect-ratio="16/9" height="150px" class="zms-img"></v-img>
                </div>
                <span class="zms-home-title">{{$t('home.greeting')}}</span>
                <span class="zms-home-description">
                    {{$t('home.greetinginf')}}
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