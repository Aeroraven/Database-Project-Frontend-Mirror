<template>
    <div class="zms-aniShow" :class="nmNightClass">
        <div class="zms-query-filter">
            <!-- 提交进度条 -->
            <v-dialog persistent v-model="submitStat" width="300">
                <v-card >
                    <v-card-title>{{$t('training.Submitting')}}</v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        {{$t('training.PleaseWait')}}<br/><br/>
                        <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- 不写备注 -->
            <v-dialog v-model="noNoteWarning" persistent width="500" >
                <v-card color="" :ripple="{class:null}" >
                    <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3" color="warning">
                        <v-icon color="white">mdi-alert</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('training.NoNoteTitle')}}</span>
                    </v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        <span class="zms-poptip-body" :class="txNightClass">{{$t('training.NoNoteInfo')}}</span><br/><br/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="noNoteWarning=false;submitTrainingInfo()">
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
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">{{$t('training.title')}}</span>
            
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('training.ID')" v-model="submit_id" :placeholder="$t('common.pleaseInput')+$t('training.ID')" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('training.animalID')" v-model="submit_animalID" :placeholder="$t('common.pleaseInput')+$t('training.animalID')" prepend-icon="el-icon-view"  />
                        </v-col>
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('training.trainer_id')" v-model="submit_trainer_id" :placeholder="$t('common.pleaseInput')+$t('training.trainer_id')" prepend-icon="el-icon-s-custom"  />
                        </v-col>
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('training.train_site')" v-model="submit_train_site" :placeholder="$t('common.pleaseInput')+$t('training.train_site')" prepend-icon="el-icon-position"  />
                        </v-col>
                         <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submit_training_date" :label="$t('training.training_date')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="submit_training_date" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                             <v-menu v-model="menu3" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submit_start_time" :label="$t('training.start_time')"   prepend-icon="el-icon-sort-up" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="submit_start_time" @input="menu3 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                             <v-menu v-model="menu4" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submit_end_time" :label="$t('training.end_time')"   prepend-icon="el-icon-sort-up" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="submit_end_time" @input="menu4 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
                       
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('training.skill')" v-model="submit_skill" :placeholder="$t('common.pleaseInput')+$t('training.skill')" prepend-icon="el-icon-unlock"  />
                        </v-col>
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('training.props')" v-model="submit_props" :placeholder="$t('common.pleaseInput')+$t('training.props')" prepend-icon="el-icon-baseball"  />
                        </v-col>

                      
                    </v-row>
                </v-container>
                 <v-textarea
                    outlined
                    counter
                    prepend-inner-icon="mdi-information" 
                    name="input-7-4"
                    :label="$t('training.remarks')"
                    :placeholder="$t('common.pleaseInput')+$t('training.remarks')"
                    v-model="submit_remarks"
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
import { createTrainingInfo } from '../../apis/training';

export default {
    name: 'trainingCreate',
    created(){
    },data:()=>{
        return{
            submit_id:null,
            submit_animalID:null,
            submit_trainer_id:null,
            submit_train_site:null,
            submit_training_date:null,
            submit_start_time:null,
            submit_end_time:null,
            submit_skill:null,
            submit_props:null,
            submit_remarks:null,

            submitNote:null,

            submitStat:false,
            noNoteWarning:false,
            errorReturn:false,
            errorTitle:'',
            errorInfo:'',
            menu2:false
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
        submitTrainingInfo(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    createTrainingInfo().then(response => {
                        console.log(this.submitDate)
                        this.submitStat=false;
                        if(response.data.statcode!=0){
                            this.errorReturn=true;
                        }
                        if(response.data.statcode==1){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('training.NonexistentAniID')
                            return 0;
                        }
                        if(response.data.statcode==2){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('training.NonexistentTypeID')
                            return 0;
                        }
                        if(response.data.statcode==3){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('training.NonexistentVetId')
                            return 0;
                        }
                        this.submitSuccTip(this.$t('training.SubmitComplete'))
                    })
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
            if(this.submit_id==null||this.submit_id==undefined||this.submit_id==0){
                this.submitFailTip(this.$t('training.submit_Empty_id'))
                return 0;
            }
            if(this.submit_animalID==null||this.submit_animalID==undefined||this.submit_animalID==0){
                this.submitFailTip(this.$t('training.submit_Empty_animalID'))
                return 0;
            }
            if(this.submit_trainer_id==null||this.submit_trainer_id==undefined||this.submit_trainer_id==0){
                this.submitFailTip(this.$t('training.submit_Empty_trainer_id'))
                return 0;
            }
            if(this.submit_train_site==null||this.submit_train_site==undefined||this.submit_train_site==0){
                this.submitFailTip(this.$t('training.submit_Empty_train_site'))
                return 0;
            }
            if(this.submit_training_date==null||this.submit_training_date==undefined||this.submit_training_date==0){
                this.submitFailTip(this.$t('training.submit_Empty_training_date'))
                return 0;
            }
            if(this.submit_start_time==null||this.submit_start_time==undefined||this.submit_start_time==0){
                this.submitFailTip(this.$t('training.submit_Empty_start_time'))
                return 0;
            }
            if(this.submit_end_time==null||this.submit_end_time==undefined||this.submit_end_time==0){
                this.submitFailTip(this.$t('training.submit_Empty_end_time'))
                return 0;
            }
            if(this.submit_skill==null||this.submit_skill==undefined||this.submit_skill==0){
                this.submitFailTip(this.$t('training.submit_Empty_show_skill'))
                return 0;
            }
            if(this.submit_props==null||this.submit_props==undefined||this.submit_props==0){
                this.submitFailTip(this.$t('training.submit_Empty_show_props'))
                return 0;
            }
            let time1=this.submit_start_time;
            let time2=this.submit_end_time;
            if(time1>time2){
                this.submitFailTip(this.$t('training.DateAhead'))
                return 0;
            }


            if(this.submitNote==null||this.submitNote==undefined||this.submitNote==0){
                this.noNoteWarning=true;
                return 0;
            }
            this.submitTrainingInfo();
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