<template>
    <div class="zms-employeecheck" :class="nmNightClass">
        <div class="zms-query-filter">
            <!-- 提交进度条 -->
            <v-dialog persistent v-model="submitStat" width="300">
                <v-card >
                    <v-card-title>{{$t('employeecheck.Submitting')}}</v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        {{$t('employeecheck.PleaseWait')}}<br/><br/>
                        <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- 不写备注 -->
            <v-dialog v-model="noNoteWarning" persistent width="500" >
                <v-card color="" :ripple="{class:null}" >
                    <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3" color="warning">
                        <v-icon color="white">mdi-alert</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('employeecheck.NoNoteTitle')}}</span>
                    </v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        <span class="zms-poptip-body" :class="txNightClass">{{$t('employeecheck.NoNoteInfo')}}</span><br/><br/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="noNoteWarning=false;submitEmployeecheckInfo()">
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
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">{{$t('employeecheck.Info.title')}}</span>
            
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employeecheck.item.employee_id')" v-model="submiteId" :placeholder="$t('common.pleaseInput')+$t('employeecheck.item.employee_id')" prepend-icon="el-icon-files"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employeecheck.item.manager_id')" v-model="submitmId" :placeholder="$t('common.pleaseInput')+$t('employeecheck.item.manager_id')" prepend-icon="el-icon-document-copy"  />
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employeecheck.item.assessment_time')" v-model="submitDate" :placeholder="$t('common.pleaseInput')+$t('employeecheck.item.assessment_time')" prepend-icon="el-icon-time"  />
                        </v-col> -->
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submitDate" :label="$t('employeecheck.item.assessment_time')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="submitDate" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employeecheck.item.assessment_grade')" v-model="submitgrade" :placeholder="$t('common.pleaseInput')+$t('employeecheck.item.assessment_grade')" prepend-icon="el-icon-s-shop"  />
                        </v-col> -->
                        
 <v-col
        class="d-flex"
        cols="12"
        sm="6"
        md="3"
      >
        <v-select
          :items="gradeitems"
          label="考核等级"
          v-model="submitgrade"
        ></v-select>
      </v-col>

                    </v-row>
                </v-container>
                <v-textarea
                    outlined
                    counter
                    prepend-inner-icon="mdi-information" 
                    name="input-7-4"
                    :label="$t('employeecheck.note')"
                    :placeholder="$t('common.pleaseInput')+$t('employeecheck.note')"
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
import { createEmployeecheckInfo } from '../../apis/employeecheck.js';

export default {
    name: 'EmployeeCheckCreate',
    created(){
    },data:()=>{
        return{
            submiteId:null,//员工工号
            submitmId:null,//管理人员工号
            submitDate:null,//考核时间
            submitgrade:null,//考核等级
            submitnote:null,//备注信息
            submitType:null,
            submitPrincipalName:null,
          
            submitNote:null,
            submitStat:null,
            noNoteWarning:false,
            errorReturn:false,
            errorTitle:'',
            errorInfo:'',
            menu2:false,
             gradeitems: ['1', '2', '3', '4','5'],
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
        submitEmployeecheckInfo(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    createEmployeecheckInfo().then(response => {
                        console.log(this.submitDate)
                        this.submitStat=true;
                        if(response.data.statcode!=0){
                            this.errorReturn=true;
                        }
                        if(response.data.statcode==1){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('emploeecheck.NonexistentAniID')
                            return 0;
                        }
                        if(response.data.statcode==2){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('employeecheck.NonexistentTypeID')
                            return 0;
                        }
                        if(response.data.statcode==3){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('employeecheck.NonexistentVetId')
                            return 0;
                        }
                        this.submitSuccTip(this.$t('employeecheck.SubmitComplete'))
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
            
             if(this.submiteId==null||this.submiteId==undefined||this.submiteId==0){
                this.submitFailTip(this.$t('员工工号为空'))
                return 0;
            }
            if(this.submitmId==null||this.submitmId==undefined||this.submitmId==0){
                this.submitFailTip(this.$t('管理人员工号为空'))
                return 0;
            }
            if(this.submitDate==null||this.submitDate==undefined||this.submitDate==0){
                this.submitFailTip(this.$t('考核时间为空'))
                return 0;
            }
            if(this.submitgrade==null||this.submitgrade==undefined||this.submitgrade==0){
                this.submitFailTip(this.$t('考核等级为空'))
                return 0;
            }
            
            // let year=this.submitDate.split("-")[0];
            // let month=this.submitDate.split("-")[1]-1;
            // let day=this.submitDate.split("-")[2];
            // let date1= new Date(year,month,day)
            // let date2 = new Date()
            // if(date1>date2){
            //     console.log(date1)
            //     console.log(date2)
            //     this.submitFailTip(this.$t('animalShow.DateAhead'))
            //     return 0;
            // }

            if(this.submitNote==null||this.submitNote==undefined||this.submitNote==0){
                this.noNoteWarning=true;
                return 0;
            }
            this.submitEmployeecheckInfo();
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
    .zms-employeecheck{
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