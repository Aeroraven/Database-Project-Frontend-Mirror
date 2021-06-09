<template>
  <div class="zms-home-notice">
      <v-card  :ripple="{ class: null }" elevation="10" class="zms-card-noborder" :class="cardNightClass" >
            <div class="zms-home-title2 zms-home-body2">
                <v-icon>mdi-clock-check-outline</v-icon> 待办事项
            </div>
            <div class="zms-home-body">
                
                
            </div>
      </v-card>
  </div>
</template>

<script>

export default {
    components: {  },
    name: 'HomepageTaskOverview',
    props:{
        drawer:Boolean,
    },
    data:()=>{
        return{
            currentTouristCnt:0,
        }
    }
    ,computed:{
        cardNightClass(){
            return{
                'zms-cardcolor-light':!this.$vuetify.theme.dark,
                'zms-cardcolor-dark':this.$vuetify.theme.dark,
                
            }
        }
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
        //background:-webkit-repeating-linear-gradient( 135deg, rgba(245, 245, 245, 0.98), rgba(245, 245, 245, 0.98) 45px, rgba(255, 255, 255, 0.9) 45px, rgba(255, 255, 255, 0.9) 90px ) !important;
    
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