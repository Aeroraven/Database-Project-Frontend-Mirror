
<template>
    <div class="zms-aniShow" :class="nmNightClass">
        <div class="zms-query-filter">
            <!-- 提交进度条 -->
            <v-dialog persistent v-model="submitStat" width="300">
                <v-card >
                    <v-card-title>{{$t('vehicleManagement.Submitting')}}</v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        {{$t('vehicleManagement.PleaseWait')}}<br/><br/>
                        <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- 不写备注 -->
            <v-dialog v-model="noNoteWarning" persistent width="500" >
                <v-card color="" :ripple="{class:null}" >
                    <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3" color="warning">
                        <v-icon color="white">mdi-alert</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('vehicleManagement.NoNoteTitle')}}</span>
                    </v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        <span class="zms-poptip-body" :class="txNightClass">{{$t('vehicleManagement.NoNoteInfo')}}</span><br/><br/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="noNoteWarning=false;submitVehicleManagement()">
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
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">{{$t('vehicleManagement.title')}}</span>
            
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('vehicleManagement.ID')" v-model="submit_Id" :placeholder="$t('common.pleaseInput')+$t('vehicleManagement.ID')" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('vehicleManagement.vehicle_category')" v-model="submit_vehicle_category" :placeholder="$t('common.pleaseInput')+$t('vehicleManagement.vehicle_category')" prepend-icon="el-icon-view"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('vehicleManagement.departure_interval')" v-model="submit_departure_interval" :placeholder="$t('common.pleaseInput')+$t('vehicleManagement.departure_interval')" prepend-icon="el-icon-link"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('vehicleManagement.trans_duration')" v-model="submit_trans_duration" :placeholder="$t('common.pleaseInput')+$t('vehicleManagement.trans_duration')" prepend-icon="el-icon-time"  />
                        </v-col>
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('vehicleManagement.price')" v-model="submit_price" :placeholder="$t('common.pleaseInput')+$t('vehicleManagement.price')" prepend-icon="el-icon-s-opportunity"  />
                        </v-col>                        
                          <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('vehicleManagement.boarding_location')" v-model="submit_boarding_location" :placeholder="$t('common.pleaseInput')+$t('vehicleManagement.boarding_location')" prepend-icon="el-icon-position"  />
                        </v-col>    
                    </v-row>
                </v-container>
                <!-- <v-textarea
                    outlined
                    counter
                    prepend-inner-icon="mdi-information" 
                    name="input-7-4"
                    :label="$t('vehicleManagement.note')"
                    :placeholder="$t('common.pleaseInput')+$t('vehicleManagement.note')"
                    v-model="submitNote"
                > 
                
                </v-textarea> -->
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
import { createVehicleManagementInfo } from '../../apis/vehicleManagement'

export default {
    name: 'trainingCreate',
    created(){
    },data:()=>{
        return{
            submit_Id:null,
            submit_vehicle_category:null,
            submit_departure_interval:null,
            submit_trans_duration:null,
            submit_price:null,
            submit_boarding_location:null,
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
        submitVehicleManagement(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    createVehicleManagementInfo().then(response => {
                        console.log(this.submitDate)
                        this.submitStat=false;
                        if(response.data.statcode!=0){
                            this.errorReturn=true;
                        }
                        if(response.data.statcode==1){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('vehicleManagement.NonexistentAniID')
                            return 0;
                        }
                        if(response.data.statcode==2){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('vehicleManagement.NonexistentTypeID')
                            return 0;
                        }
                        if(response.data.statcode==3){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('vehicleManagement.NonexistentVetId')
                            return 0;
                        }
                        this.submitSuccTip(this.$t('vehicleManagement.SubmitComplete'))
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
            if(this.submit_Id==null||this.submit_Id==undefined||this.submit_Id==0){
                this.submitFailTip(this.$t('vehicleManagement.submit_Empty_ID'))
                return 0;
            }
            if(this.submit_vehicle_category==null||this.submit_vehicle_category==undefined||this.submit_vehicle_category==0){
                this.submitFailTip(this.$t('vehicleManagement.submit_Empty_vehicle_category'))
                return 0;
            }
            if(this.submit_departure_interval==null||this.submit_departure_interval==undefined||this.submit_departure_interval==0){
                this.submitFailTip(this.$t('vehicleManagement.submit_Empty_departure_interval'))
                return 0;
            }
            if(this.submit_trans_duration==null||this.submit_trans_duration==undefined||this.submit_trans_duration==0){
                this.submitFailTip(this.$t('vehicleManagement.submit_Empty_trans_duration'))
                return 0;
            }
            if(this.submit_price==null||this.submit_price==undefined||this.submit_price==0){
                this.submitFailTip(this.$t('vehicleManagement.submit_Empty_price'))
                return 0;
            }
            if(this.submit_boarding_location==null||this.submit_boarding_location==undefined||this.submit_boarding_location==0){
                this.submitFailTip(this.$t('vehicleManagement.submit_Empty_boarding_location'))
                return 0;
            }
            /* let year=this.submitDate.split("-")[0];
            let month=this.submitDate.split("-")[1]-1;
            let day=this.submitDate.split("-")[2];
            let date1= new Date(year,month,day)
            let date2 = new Date()
            if(date1>date2){
                console.log(date1)
                console.log(date2)
                this.submitFailTip(this.$t('animalshow.DateAhead'))
                return 0;
            } 

            if(this.submitNote==null||this.submitNote==undefined||this.submitNote==0){
                this.noNoteWarning=true;
                return 0;
            }*/
            this.submitVehicleManagement();
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