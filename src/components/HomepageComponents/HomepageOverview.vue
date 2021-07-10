<template>
  <div class="zms-home-notice" >
      <v-card  :ripple="{ class: null }" elevation="10" class="zms-card-noborder" :class="cardNightClass">
            <div class="zms-home-title2 zms-home-body2">
                <v-icon>mdi-chart-bar</v-icon> {{$t('home.faclOv')}}
            </div>
            <div class="zms-home-body">
                
                <v-container >
                    <v-row no-gutters>
                        <template v-for="n in 8" >
                            <v-col :key="n" class="zms-center zms-x">
                                <span class="zms-stat text-darken-4 zms-font-bold" :class="cxt(n)" v-if="n==1">{{getCurrentTouristCnt}}</span>
                                <span class="zms-stat text-darken-4 zms-font-bold" :class="cxt(n)" v-if="n==2">{{getStatData(2)}}</span>
                                <span class="zms-stat text-darken-4 zms-font-bold" :class="cxt(n)" v-if="n==3">{{getStatData(3)}}</span>
                                <span class="zms-stat text-darken-4 zms-font-bold" :class="cxt(n)" v-if="n==4">{{getStatData(4)}}</span>
                                <span v-if="n<=4">
                                    <br/>
                                    <v-progress-linear :color="cx(n)"  height="15" value="60" striped rounded/>
                                </span>
                                <span v-if="n>4">{{getStatCaption(n-4)}}</span>
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
import {getAnimalCount, getCurrentTourists, getRegisteredTouristCnt, getStaffCount} from '../../apis/homepage'
export default {
    components: {  },
    name: 'HomepageOverview',
    props:{
        drawer:Boolean,
    },
    data:()=>{
        return{
            currentTouristCnt:'--',
            registeredTouristCnt:'--',
            animalCnt:'--',
            staffCnt:'--',
        }
    },
    methods:{
        cx(i){
            if(i==1){
                return 'red darken-3'
            }
            if(i==2){
                return 'green darken-3'
            }
            if(i==3){
                return 'amber darken-3'
            }
            if(i==4){
                return 'blue darken-3'
            }
        },
        cxt(i){
            if(i==1){
                return 'red--text'
            }
            if(i==2){
                return 'green--text'
            }
            if(i==3){
                return 'orange--text'
            }
            if(i==4){
                return 'blue--text'
            }
        },
        fetchCurrentTouristCnt(){
            getCurrentTourists().then(response => {
                this.currentTouristCnt = response.data.cnt
            })
        },
        fetchRegisteredTouristCnt(){
            getRegisteredTouristCnt().then(response => {
                this.registeredTouristCnt = response.data.cnt
            })
        },
        fetchAnimalCnt(){
            getAnimalCount().then(response => {
                this.animalCnt = response.data.cnt
            })
        },
        fetchStaffCnt(){
            getStaffCount().then(response => {
                this.staffCnt = response.data.cnt
            })
        },
        getStatData(x){
            if(x===1){
                return this.currentTouristCnt;
            }
            if(x===2){
                return this.animalCnt;
            }
            if(x===3){
                return this.staffCnt;
            }
            if(x===4)
            {
                return this.registeredTouristCnt;
            }
            
            return Math.floor(Math.random()*1024);
        },
        getStatCaption(x){
            if(x==1){
                return "当前游客数量"
            }
            if(x==2){
                return "当前动物总数"
            }
            if(x==3){
                return "当前员工总数"
            }
            if(x==4){
                return "游客总量"
            }
        }
    },
    created(){
        setTimeout(
            ()=>{
                this.fetchCurrentTouristCnt()
                this.fetchRegisteredTouristCnt()
                this.fetchStaffCnt()
                this.fetchAnimalCnt()
            },1000
        )
    },computed:{
        getCurrentTouristCnt(){return this.getStatData(1)},
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
        background:transparent;
    }
    .zms-home-body2{
        margin-left:5%;
        margin-right: 5%;
        padding-top:20px;
        padding-bottom: 10px;
    }
    .zms-x{
        margin-right:25px;
    }
    .zms-font-bold{
        font-weight: bold;
    }
</style>