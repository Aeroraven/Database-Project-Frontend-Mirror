<template>
    <div class="zms-aniShow" :class="nmNightClass">
        <div class="zms-query-filter">
            <!-- 提交进度条 -->
            <v-dialog persistent v-model="submitStat" width="300">
                <v-card >
                    <v-card-title>{{$t('animalShow.Submitting')}}</v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        {{$t('animalShow.PleaseWait')}}<br/><br/>
                        <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- 不写备注 -->
            <v-dialog v-model="noNoteWarning" persistent width="500" >
                <v-card color="" :ripple="{class:null}" >
                    <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3" color="warning">
                        <v-icon color="white">mdi-alert</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('animalShow.NoNoteTitle')}}</span>
                    </v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        <span class="zms-poptip-body" :class="txNightClass">{{$t('animalShow.NoNoteInfo')}}</span><br/><br/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="noNoteWarning=false;submitShowInfo()">
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
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">{{$t('animalShow.title')}}</span>
            
            <div>
                <v-container>
                    <v-row>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('animalShow.show_id')" v-model="submit_show_id" :placeholder="$t('common.pleaseInput')+$t('animalShow.show_id')" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col> -->
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('animalShow.show_name')" v-model="submit_show_name" :placeholder="$t('common.pleaseInput')+$t('animalShow.show_name')" prepend-icon="el-icon-view"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('负责人姓名')" v-model="submit_principal_id" :placeholder="$t('common.pleaseInput')+$t('负责人姓名')" prepend-icon="el-icon-s-custom"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submit_show_date" :label="$t('animalShow.show_date')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="submit_show_date" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                             <v-menu v-model="menu3" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submit_start_time" :label="$t('animalShow.start_time')"   prepend-icon="el-icon-sort-up" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="submit_start_time" @input="menu3 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                             <v-menu v-model="menu4" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submit_end_time" :label="$t('animalShow.end_time')"   prepend-icon="el-icon-sort-up" readonly v-bind="attrs" v-on="on" >
                                    </v-text-field>
                                </template>
                                <v-time-picker format="24hr" color="primary" width="400" v-model="submit_end_time" @input="menu4 = false"></v-time-picker>
                            </v-menu>
                        </v-col>
                       
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('animalShow.show_site')" v-model="submit_show_site" :placeholder="$t('common.pleaseInput')+$t('animalShow.show_site')" prepend-icon="el-icon-position"  />
                        </v-col>
                          <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('animalShow.show_props')" v-model="submit_show_props" :placeholder="$t('common.pleaseInput')+$t('animalShow.show_props')" prepend-icon="el-icon-box"  />
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
import { createShowInfo } from '../../apis/animalShow';

export default {
    name: 'AniShowInfoCreates',
    created(){
    },data:()=>{
        return{
            submit_show_id:null,
            submit_show_name:null,
            submit_principal_id:null,
            submit_show_date:null,
            submit_start_time:null,
            submit_end_time:null,
            submit_show_site:null,
            submit_show_props:null,

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
        submitShowInfo(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    createShowInfo(
                        {
                            show_name:this.submit_show_name,
                            // show_id:this.submit_show_id,
                            principal_id :this.submit_principal_id,
                            show_date:this.submit_show_date,
                            start_time:this.submit_start_time,
                            end_time:this.submit_end_time,
                            show_site:this.submit_show_site,
                            show_props:this.submit_show_props,

                        }
                    ).then(response => {
                        // this.query.data=response.data
                        this.queryLoaderDialog=false;
                   
                        // console.log(this.submit_show_date)
                        this.submitStat=false;
                        this.submitSuccTip(this.$t('信息填报成功'))



                     
                    }).catch(err=>{
                        this.queryLoaderDialog=false;
                        this.submitStat=false;
                        
                        this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('信息填报失败')})
                        console.log(err);
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
            // if(this.submit_show_id==null||this.submit_show_id==undefined){
            //     this.submitFailTip(this.$t('animalShow.submit_Empty_show_id'))
            //     return 0;
            // }
            // if(this.submit_show_name==null||this.submit_show_name==undefined){
            //     this.submitFailTip(this.$t('animalShow.submit_Empty_show_name'))
            //     return 0;
            // }
            // if(this.submit_principal_id==null||this.submit_principal_id==undefined){
            //     this.submitFailTip(this.$t('animalShow.submit_Empty_principal_id'))
            //     return 0;
            // }
            // if(this.submit_show_date==null||this.submit_show_date==undefined){
            //     this.submitFailTip(this.$t('animalShow.submit_Empty_show_date'))
            //     return 0;
            // }
            // if(this.submit_start_time==null||this.submit_start_time==undefined){
            //     this.submitFailTip(this.$t('animalShow.submit_Empty_start_time'))
            //     return 0;
            // }
            // if(this.submit_end_time==null||this.submit_end_time==undefined){
            //     this.submitFailTip(this.$t('animalShow.submit_Empty_end_time'))
            //     return 0;
            // }
            // if(this.submit_show_site==null||this.submit_show_site==undefined){
            //     this.submitFailTip(this.$t('animalShow.submit_Empty_show_site'))
            //     return 0;
            // }
            // if(this.submit_show_props==null||this.submit_show_date==undefined){
            //     this.submitFailTip(this.$t('animalShow.submit_Empty_show_props'))
            //     return 0;
            // }
            if(this.submit_start_time!=null&&this.submit_start_time!=undefined
            &&this.submit_end_time!=null&&this.submit_end_time!=undefined){
              
                let time1=this.submit_start_time;
                let time2=this.submit_end_time;
                if(time1>time2){
                    this.submitFailTip(this.$t('animalShow.DateAhead'))
                    return 0;
                }
            }
           /*  if(this.submitNote==null||this.submitNote==undefined||this.submitNote==0){
                this.noNoteWarning=true;
                return 0;
            } */
            this.submitShowInfo();
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