<template>
    <div class="zms-showTicketManagement" :class="nmNightClass">
        <div class="zms-query-filter">
            <!-- 提交进度条 -->
            <v-dialog persistent v-model="submitStat" width="300">
                <v-card >
                    <v-card-title>{{$t('showTicketManagement.Submitting')}}</v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        {{$t('showTicketManagement.PleaseWait')}}<br/><br/>
                        <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- 不写备注 -->
            <v-dialog v-model="noNoteWarning" persistent width="500" >
                <v-card color="" :ripple="{class:null}" >
                    <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3" color="warning">
                        <v-icon color="white">mdi-alert</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('showTicketManagement.NoNoteTitle')}}</span>
                    </v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        <span class="zms-poptip-body" :class="txNightClass">{{$t('showTicketManagement.NoNoteInfo')}}</span><br/><br/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="noNoteWarning=false;submitShowTicket()">
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
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">{{$t('showTicketManagement.title')}}</span>
            
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('showTicketManagement.show_id')" v-model="submit_show_id" :placeholder="$t('common.pleaseInput')+$t('showTicketManagement.show_id')" prepend-icon="el-icon-link"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('showTicketManagement.Price')" v-model="submit_Price" :placeholder="$t('common.pleaseInput')+$t('showTicketManagement.Price')" prepend-icon="el-icon-coin"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('showTicketManagement.Ticket_type')" v-model="submit_Ticket_type" :placeholder="$t('common.pleaseInput')+$t('showTicketManagement.Ticket_type')" prepend-icon="el-icon-tickets"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('showTicketManagement.Amount')" v-model="submit_Amount" :placeholder="$t('common.pleaseInput')+$t('showTicketManagement.Amount')" prepend-icon="el-icon-s-operation"  />
                        </v-col>
                    

                    </v-row>
                </v-container>
              
               <!-- <v-textarea
                    outlined
                    counter
                    prepend-inner-icon="mdi-information" 
                    name="input-7-4"
                    :label="$t('animalShow.note')"
                    :placeholder="$t('common.pleaseInput')+$t('animalShow.note')"
                    v-model="submitNote"
                >
                </v-textarea>--> 
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
import { createShowTicketInfo } from '../../apis/showTicketManagement';

export default {
    name: 'ShowTicketCreates',
    created(){
    },data:()=>{
        return{
            submit_show_id:null,
            submit_Price:null,
            submit_Ticket_type:null,
            submit_Amount:null,

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
        submitShowTicket(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    createShowTicketInfo(
                        {
                            submit_show_id:null,
                            submit_Price:null,
                            submit_Ticket_type:null,
                            submit_Amount:null,
                        }
                    ).then(response => {
                        console.log(this.submit_Amount)
                        this.submitStat=false;
                        if(response.data.statcode!=0){
                            this.errorReturn=true;
                        }
                        if(response.data.statcode==1){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('animalShow.NonexistentAniID')
                            return 0;
                        }
                        if(response.data.statcode==2){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('animalShow.NonexistentTypeID')
                            return 0;
                        }
                        if(response.data.statcode==3){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('animalShow.NonexistentVetId')
                            return 0;
                        }
                        this.submitSuccTip(this.$t('animalShow.SubmitComplete'))
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
            if(this.submit_show_id==null||this.submit_show_id==undefined||this.submit_show_id==0){
                this.submitFailTip(this.$t('animalShow_SubmitEmptyId'))
                return 0;
            }
            if(this.submit_Price==null||this.submit_Price==undefined||this.submit_Price==0){
                this.submitFailTip(this.$t('animalShow_SubmitEmptyType'))
                return 0;
            }
            if(this.submit_Ticket_type==null||this.submit_Ticket_type==undefined||this.submit_Ticket_type==0){
                this.submitFailTip(this.$t('animalShow_submit_Ticket_type'))
                return 0;
            }
            if(this.submit_Amount==null||this.submit_Amount==undefined||this.submit_Amount==0){
                this.submitFailTip(this.$t('animalShow_submit_Amount'))
                return 0;
            }
            this.submitShowTicket();
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
    .zms-showTicketManagement{
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