<template>
    <div class="zms-aniShow" :class="nmNightClass">
        <div class="zms-query-filter">
            <!-- 提交进度条 -->
            <v-dialog persistent v-model="submitStat" width="300">
                <v-card >
                    <v-card-title>{{$t('admissionTicketsManagement.Submitting')}}</v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        {{$t('admissionTicketsManagement.PleaseWait')}}<br/><br/>
                        <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- 不写备注 -->
            <v-dialog v-model="noNoteWarning" persistent width="500" >
                <v-card color="" :ripple="{class:null}" >
                    <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3" color="warning">
                        <v-icon color="white">mdi-alert</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('admissionTicketsManagement.NoNoteTitle')}}</span>
                    </v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        <span class="zms-poptip-body" :class="txNightClass">{{$t('admissionTicketsManagement.NoNoteInfo')}}</span><br/><br/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="noNoteWarning=false;submitAdmissInfo()">
                            <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                        </v-btn>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="error" @click="noNoteWarning=false">
                            <v-icon>mdi-arrow-left</v-icon>{{$t('common.cancel')}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <!-- 提交错误 -->
            <v-dialog v-model="errorReturn" persistent width="500" >
                <v-card color="" :ripple="{class:null}" >
                    <v-card-title class=" zms-strip-bg text-h5 text--white red " color="warning">
                        <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{errorTitle}}</span>
                    </v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        <span class="zms-poptip-body" :class="txNightClass">{{errorInfo}}</span><br/><br/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="errorReturn=false;">
                            <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">{{$t('admissionTicketsManagement.title')}}</span>
            
            <div>
                <v-container>
                    <v-row>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('admissionTicketsManagement.admis_type')" v-model="submitType" :placeholder="$t('common.pleaseInput')+$t('admissionTicketsManagement.admis_type')" prepend-icon="el-icon-files"  />
                        </v-col> -->
            <v-col
        class="d-flex"
        cols="12"
        sm="6" md="3"
      >
        <v-select
          :items="admissitems"
          label="票种"
         
          
          v-model="submitType"
          prepend-icon="el-icon-files" 
        ></v-select>
      </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('admissionTicketsManagement.admis_price')" v-model="submitPrice" :placeholder="$t('common.pleaseInput')+$t('admissionTicketsManagement.admis_price')" prepend-icon="el-icon-coin"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                             <v-menu v-model="menu3" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submitStart_time" :label="$t('admissionTicketsManagement.admis_starttime')"   prepend-icon="el-icon-time" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="submitStart_time" @input="menu3 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
                       <v-col cols="12" sm="6" md="3">
                             <v-menu v-model="menu4" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submitEnd_time" :label="$t('admissionTicketsManagement.admis_endtime')"   prepend-icon="el-icon-time" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="submitEnd_time" @input="menu4 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
                        
                        
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submitDate" :label="$t('admissionTicketsManagement.admis_date')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="submitDate" @input="menu5 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-container>
                <v-textarea
                    outlined
                    counter
                    prepend-inner-icon="mdi-information" 
                    name="input-7-4"
                    :label="$t('admissionTicketsManagement.note')"
                    :placeholder="$t('common.pleaseInput')+$t('admissionTicketsManagement.note')"
                    v-model="submitNote"
                >
                </v-textarea>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="submitStat" block class="zms-width"  color="primary" @click="submitPrejudge()">
                                <v-icon>mdi-arrow-collapse-up</v-icon>&nbsp;&nbsp;{{$t('common.report')}}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>
import { createAdmissInfo } from '../../apis/TicketsAdmiss';

export default {
    name: 'admissCreate',
    created(){
    },data:()=>{
        return{
            submitId:null,
            subtour_id:null,
            submitType:null,
            submitPrice:null,
            submitDate:null,
            submitNote:null,
            submitStat:null,
            sunmitSat:null,
            submitEnd_time:null,
            submitStart_time:null,
            noNoteWarning:false,
            errorReturn:false,
            errorTitle:'',
            errorInfo:'',
            menu2:false,

            admissitems: ['全价票', '儿童票', '长者票', '优待票','学生票','夜场票'],
        }
    } ,
    computed:{
        nmNightClass(){
            return{
                'zms-background-nm-dark':this.$vuetify.theme.dark,
                
            }
        },
        txNightClass(){
            return{
                'zms-text-dark':this.$vuetify.theme.dark,
                
            }
        }
    },
    methods:{
        submitAdmissInfo(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    createAdmissInfo(

                        
                    ).then(response => {
                        console.log(this.submitDate)
                        this.submitStat=false;
                        if(response.data.statcode!=0){
                            this.errorReturn=true;
                        }
                        if(response.data.statcode==1){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('admissionTicketsManagement.NonexistentAniID')
                            return 0;
                        }
                        if(response.data.statcode==2){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('admissionTicketsManagement.NonexistentTypeID')
                            return 0;
                        }
                        if(response.data.statcode==3){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('admissionTicketsManagement.NonexistentVetId')
                            return 0;
                        }                        
                        this.submitSuccTip(this.$t('admissionTicketsManagement.SubmitComplete'))
                    }).catch(err=>
                        { this.submitStat=false;

                        }
                    )
                },2000
            )
        },
        submitSuccTip(x){
            this.$store.dispatch('showToastNotify',{type:'success',info:x})
        },
        submitFailTip(x){
            this.$store.dispatch('showToastNotify',{type:'error',info:x})
        },
        submitPrejudge(){
            
            if(this.submitType==null||this.submitType==undefined||this.submitType==0){
                this.submitFailTip(this.$t('票种为空'))
                return 0;
            }
            if(this.submitPrice==null||this.submitPrice==undefined||this.submitPrice==0){
                this.submitFailTip(this.$t('票价为空'))
                return 0;
            }
            if(this.submitStart_time==null||this.submitStart_time==undefined||this.submitStart_time==0){
                this.submitFailTip(this.$t('入园开始时间为空'))
                return 0;
            }
             if(this.submitEnd_time==null||this.submitEnd_time==undefined||this.submitEnd_time==0){
                this.submitFailTip(this.$t('入园结束时间为空'))
                return 0;
            }

            if(this.submitDate==null||this.submitDate==undefined||this.submitDate==0){
                this.submitFailTip(this.$t('入园日期为空'))
                return 0;
            }
            // let hour1=this.submitStart_time.split(":")[0];
            // let hour2=this.submitDate.split("-")[1]-1;
            // let day=this.submitDate.split("-")[2];
            // let date1= new Date(year,month,day)
            // let date2 = new Date()
            let hour1=this.submitStart_time.split(":")[0];
            let hour2= this.submitEnd_time.split(":")[0];
            if(hour1>hour2){
                console.log(hour1)
                console.log(hour2)
                this.submitFailTip(this.$t('admissionTicketsManagement.DateAhead'))
                return 0;
            }

            if(this.submitNote==null||this.submitNote==undefined||this.submitNote==0){
                this.noNoteWarning=true;
                return 0;
            }
            this.submitAdmissInfo();
        }
    }
}
</script>
<style scoped lang="scss">
    .zms-query-pagination{
        margin-top:10px;
        transition: all .5s;
    }
    .zms-query-result{
        margin-top:20px;
    }
    .zms-aniShow{
        padding-left:50px;
        padding-right:50px;
        padding-top:20px;
        padding-bottom:20px;
        background-color: #fafafa;
    }
    .zms-query-title{
        font-weight: bold;
        letter-spacing: 1px;
        position:relative;
        top:3px;
    }
    .zms-query-result-table{
        margin-top:10px;
    }
</style>

