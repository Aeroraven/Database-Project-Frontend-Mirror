<template>
  <div class="zms-home-notice">
      <v-card  :ripple="{ class: null }" elevation="10" class="zms-card-noborder" >
            <div class="zms-home-title2 zms-home-body2">
                <v-icon>mdi-chart-bar</v-icon> 园区概览
            </div>
            <div class="zms-home-body">
                
                <v-container class="grey lighten-5">
                    <v-row no-gutters>
                        <template v-for="n in 8">
                            <v-col :key="n" class="zms-center">
                                <span class="zms-stat" v-if="n<=4">{{Math.floor(Math.random()*1024)}}</span>
                                <span v-if="n>4">当前场馆人数</span>
                            </v-col>
                            <v-responsive
                            v-if="n %4==0"
                            :key="`width-${n}`"
                            width="100%"
                            ></v-responsive>
                        </template>
                    </v-row>
                </v-container>
            </div>
      </v-card>
  </div>
</template>

<script>

export default {
    components: {  },
    name: 'HomepageOverview',
    props:{
        drawer:Boolean,
    },
    methods:{
        
    }
};
</script>

<style scoped lang="scss">
    .zms-stat{
        font-family: 'benderregular';
        font-size:25px;
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