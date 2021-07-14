<template>
    <div class="zms-anicare" :class="nmNightClass">
        <!--事务成功进度条-->
        <alert-messagebox
        :alertTitle="$t('common3.transactionDoneTitle')"
        :alertBody="$t('common3.transactionDone')"
        :alertLevel="`success`"
        :alertOnlyConfirm="true"
        ref="commit_done" />

        <!--事务失败提示框-->
        <alert-messagebox
        :alertTitle="$t('common3.transactionFailTitle')"
        :alertBody="$t('common3.transactionFail')+errorInfo"
        :alertLevel="`error`"
        :alertOnlyConfirm="true"
        ref="error_done" />

        

        <div class="zms-query-filter">
            <!-- 提交进度条 -->
            <v-dialog persistent v-model="submitStat" width="300">
                <v-card >
                    <v-card-title>{{$t('animalCare.Submitting')}}</v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        {{$t('animalCare.PleaseWait')}}<br/><br/>
                        <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- 不写备注 -->
            <v-dialog v-model="noNoteWarning" persistent width="500" >
                <v-card color="" :ripple="{class:null}" >
                    <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3" color="warning">
                        <v-icon color="white">mdi-alert</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('animalCare.NoNoteTitle')}}</span>
                    </v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        <span class="zms-poptip-body" :class="txNightClass">{{$t('animalCare.NoNoteInfo')}}</span><br/><br/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="noNoteWarning=false;submitCareInfo()">
                            <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                        </v-btn>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="error" @click="noNoteWarning=false">
                            <v-icon>mdi-arrow-left</v-icon>{{$t('common.cancel')}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <!-- 动物选择器 -->
            <item-selector ref='aniselector' :zmsSelectorMode="0" @itemSelectorSelect="animalSelectorResponse(arguments)"></item-selector>
            <!-- 员工选择器 -->
            <item-selector ref='staselector' :zmsSelectorMode="1" @itemSelectorSelect="staffSelectorResponse(arguments)"></item-selector>
            
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
            <v-icon color="primary">mdi-upload-multiple</v-icon> <span class="zms-query-title">{{$t('animalCare.title')}}</span>
            <!--主请求部分-->
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('animalCare.animalId')"
                            :hint="$t('animalCare2.chooseByMagnify')"
                              v-model="submitId" :placeholder="$t('common.pleaseInput')+$t('animalCare.animalId')" 
                            prepend-icon="mdi-identifier" append-icon="mdi-magnify" @click:append="calloutAnimalSelect"  />
                        </v-col>
                        <!--<v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('animalCare.diseaseName')" v-model="submitType" :placeholder="$t('common.pleaseInput')+$t('animalCare.diseaseName')"
                             prepend-icon="mdi-heart-pulse"   />
                        </v-col>-->
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('animalCare.vetName')"   v-model="submitVetname"
                             :hint="$t('animalCare2.chooseByMagnify')"
                             :placeholder="$t('common.pleaseInput')+$t('animalCare.vetName')" 
                             prepend-icon="mdi-doctor" append-icon="mdi-magnify" @click:append="calloutStaffSelect"   />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submitDate" :label="$t('animalCare.illDate')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="submitDate" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-container>
                <v-textarea
                    outlined
                    counter
                    prepend-inner-icon="mdi-information" 
                    name="input-7-4"
                    :label="$t('animalCare.diseaseName')"
                    :placeholder="$t('common.pleaseInput')+$t('animalCare.diseaseName')"
                    v-model="submitNote"
                >
                </v-textarea>
            </div>
            <!--辅助请求部分-->
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">{{$t('animalCare2.secondaryTitle')}}</span>
            <br/><br/>
            <v-alert type="info" text border="left">
                {{$t('animalCare2.description')}}
            </v-alert>
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-combobox :hint="$t('animalCare2.custSymptoms')" v-model="illInput" clearable multiple :items="illList"
                            :label="$t('animalCare2.symptoms')" prepend-icon="mdi-emoticon-sick"></v-combobox>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-select :hint="$t('animalCare2.severityHint')" v-model="severeInput" :items="severityList" :label="$t('animalCare2.severity')" prepend-icon="mdi-exclamation-thick"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-slider prepend-icon="mdi-thermometer-lines" v-model="submitTemp" :label="$t('animalCare2.temperature')" max="5000" >
                                <template v-slot:thumb-label="{ value }">
                                    {{value/100}}
                                </template>
                            </v-slider>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-slider prepend-icon="mdi-heart" v-model="submitHeartRate" :label="$t('animalCare2.heartRate')" max="400" >
                                <template v-slot:thumb-label="{ value }">
                                    {{value}}
                                </template>
                            </v-slider>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <!--菜单栏-->
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="submitStat" block class="zms-width"  color="primary" @click="generateAutoReport()">
                                <v-icon>mdi-file-chart</v-icon>&nbsp;&nbsp;{{$t('animalCare2.generateDescription')}}
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="submitStat" block class="zms-width"  color="primary" @click="calloutAnimalSelect()">
                                <v-icon>mdi-paw</v-icon>&nbsp;&nbsp;{{$t('animalselector.externalUse')}}
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="submitStat" block class="zms-width"  color="success" @click="submitPrejudge()">
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
import { createCareInfo } from '../../apis/animalCare';
import ItemSelector from '../CommonComponents/ItemSelector.vue'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
export default {
    name: 'AniCareCreate',
    components:{
        ItemSelector,
        AlertMessagebox
    },
    created(){
    },data:()=>{
        return{
            submitId:null,
            submitType:null,
            submitVetname:null,
            submitDate:null,
            submitNote:null,
            submitStat:false,
            noNoteWarning:false,
            errorReturn:false,
            errorTitle:'',
            errorInfo:'',
            menu2:false,
            illList:['Headache','Fever','Trauma','Bacterial Infection',
                'Fungal Infection','Organ Failure','Cancer','Respiratory Tract Infection'
                ,'Food Poisoning'],
            severityList:['Fatal','Severe','Moderate','Casual','Negligible'],
            illInput:null,
            submitTemp:3700,
            submitHeartRate:60,
            severeInput:"Moderate",
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
        generateAutoReport(){
            let st='';
            if(this.illInput!=null&&this.illInput!=""){
                st+='动物症状如下:';
                st+=this.illInput
                st+='. '
            }
            st+='体温是 '+(this.submitTemp/100)+' 摄氏度'
            st+='. 心率是 '+(this.submitHeartRate)+' bpm'
            st+='. 严重等级是 `'+this.severeInput+'`.'
            this.submitNote=st;
            this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('animalCare2.reportGenSuccessful')})
            return st;
        },
        animalSelectorResponse(arg){
            this.submitId=arg[0];
        },
        calloutAnimalSelect(){
            this.$refs.aniselector.show();
        },
        staffSelectorResponse(arg){
            this.submitVetname=arg[0];
        },
        calloutStaffSelect(){
            this.$refs.staselector.show();
        },
        submitCareInfo(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    createCareInfo(
                        {
                            diseaseName:this.submitNote,
                            veterinaryId:this.veterinaryId,
                            drug:'(暂无)',
                            dateIll:this.submitDate,
                            dateCure:null,
                            animalId:this.submitId,
                            veterinaryId:'0',
                            dateCure:'0'
                        },0
                    ).then(response => {
                        console.log(this.submitDate)
                        this.submitStat=false;
                        
                        this.submitSuccTip(this.$t('animalCare.SubmitComplete'))
                        this.$refs.commit_done.showAlert()
                    }).catch( err => {
                        this.submitStat=false;
                        this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                        this.$refs.error_done.showAlert();
                    });
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
            if(this.submitId==null||this.submitId==undefined||this.submitId==0){
                this.submitFailTip(this.$t('animalCare_SubmitEmptyId'))
                return 0;
            }
            //if(this.submitType==null||this.submitType==undefined||this.submitType==0){
            //    this.submitFailTip(this.$t('animalCare_SubmitEmptyType'))
            //    return 0;
            //}
            if(this.submitVetname==null||this.submitVetname==undefined||this.submitVetname==0){
                this.submitFailTip(this.$t('animalCare_SubmitVetName'))
                return 0;
            }
            if(this.submitDate==null||this.submitDate==undefined||this.submitDate==0){
                this.submitFailTip(this.$t('animalCare_SubmitDate'))
                return 0;
            }
            let year=this.submitDate.split("-")[0];
            let month=this.submitDate.split("-")[1]-1;
            let day=this.submitDate.split("-")[2];
            let date1= new Date(year,month,day)
            let date2 = new Date()
            if(date1>date2){
                console.log(date1)
                console.log(date2)
                this.submitFailTip(this.$t('animalCare.DateAhead'))
                return 0;
            }
            if(this.submitNote==null||this.submitNote==undefined||this.submitNote==0){
                this.noNoteWarning=true;
                return 0;
            }
            this.submitCareInfo();
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
    .zms-anicare{
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