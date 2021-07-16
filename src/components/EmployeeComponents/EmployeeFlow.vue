<template>
    <div class="zms-employee" :class="nmNightClass">
        <div class="zms-query-filter">
            <!-- 提交进度条 -->
            <v-dialog persistent v-model="submitStat" width="300">
                <v-card >
                    <v-card-title>{{$t('employee.Submitting')}}</v-card-title>
                    <v-divider/>
                    <br/>
                    <v-card-text>
                        {{$t('employee.PleaseWait')}}<br/><br/>
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
                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="noNoteWarning=false;submitEmployeeInfo()">
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
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">{{$t('employee.Info.title')}}</span>
            
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employee.item.id')" v-model="submitId" :placeholder="$t('common.pleaseInput')+$t('employee.item.id')" prepend-icon="el-icon-files"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employee.item.name')" v-model="submitname" :placeholder="$t('common.pleaseInput')+$t('employee.item.name')" prepend-icon="el-icon-document-copy"  />
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employee.item.gender')" v-model="submitgender" :placeholder="$t('common.pleaseInput')+$t('employee.item.gender')" prepend-icon="el-icon-s-custom"  />
                        </v-col> -->
                                           
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
        md="3"
      >
        <v-select
          :items="items"
          label="性别"
          v-model="submitgender"
          prepend-icon="el-icon-s-custom"
        ></v-select>
      </v-col>
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employee.item.age')" v-model="submitage" :placeholder="$t('common.pleaseInput')+$t('employee.item.age')" prepend-icon="el-icon-s-shop"  />
                        </v-col> -->


                            <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu5" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submitage" :label="$t('employee.item.age')"  prepend-icon="el-icon-s-shop" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                               <div >
    <el-slider
      v-model="submitage"
      show-input>
      
    </el-slider>
  </div>
                            </v-menu>
                        </v-col>
    

                        
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employee.item.wage')" v-model="submitwage" :placeholder="$t('common.pleaseInput')+$t('employee.item.wage')" prepend-icon="el-icon-star-on"  />
                        </v-col>

                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu6" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submitwage" :label="$t('employee.item.wage')"   prepend-icon="el-icon-star-on" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                               <div >
    <v-slider
      v-model="submitwage"
      :label="ex3.label"
      :thumb-color="ex3.color"
      thumb-label="always"
      width="700" 
      hint="Im a hint"
  max="10000000"
  min="0"
      
      height="100" @input="menu6 = false"
    ></v-slider>
  </div>
                            </v-menu>
                        </v-col> -->
    
    
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employee.item.position')" v-model="submitposition" :placeholder="$t('common.pleaseInput')+$t('employee.item.position')" prepend-icon="el-icon-goods"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employee.item.park')" v-model="submitpark" :placeholder="$t('common.pleaseInput')+$t('employee.item.park')" prepend-icon="el-icon-check"  />
                        </v-col>
                        
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="submitDate" :label="$t('employee.item.date')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="submitDate" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col> -->

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employee.item.year')" v-model="submityear" :placeholder="$t('common.pleaseInput')+$t('employee.item.year')" prepend-icon="mdi-calendar" />
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('employee.item.password')" v-model="submitpassword" :placeholder="$t('common.pleaseInput')+$t('employee.item.password')" prepend-icon="el-icon-s-promotion" />
                        </v-col>
                        
                    </v-row>
                </v-container>
                <v-textarea
                    outlined
                    counter
                    prepend-inner-icon="mdi-information" 
                    name="input-7-4"
                    :label="$t('employee.note')"
                    :placeholder="$t('common.pleaseInput')+$t('employee.note')"
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
import { createEmployeeInfo } from '../../apis/employee.js';

export default {
    name: 'EmployeeCreate',
    created(){
    },data:()=>{
        return{
            submitId:null,//员工工号
            submitname:null,
            submitgender:null,//考核时间
            submitage:null,//考核等级
            submitwage:null,//备注信息
            submitposition:null,
            submitpark:null,
            submitDate:null,
            submityear:null,
            submitpassword:null,
           

          
            submitNote:null,
            submitStat:null,
            noNoteWarning:false,
            errorReturn:false,
            errorTitle:'',
            errorInfo:'',
            menu2:false,
              items: [ '男','女'],
              ex1: { label: 'color', val: 25, color: 'orange darken-3' },
               ex3: { label: '工资（单位：元）', val: 50, color: 'red' },
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
        submitEmployeeInfo(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    createEmployeeInfo(
                        {
                            id:this.submitId,
                            name:this.submitname,
                            gender:this.submitgender,
                            age:this.submitage,
                            wage:this.submitwage,
                            position:this.submitposition,
                            park:this.submitpark,
                            employmentYear:this.submityear,
                            password:this.submitpassword
                        }
                    ).then(response => {
                        // console.log(this.submitDate)
                        this.submitStat=false;
                        // if(response.data.statcode!=0){
                        //     this.errorReturn=true;
                        // }
                        // if(response.data.statcode==1){
                        //     this.errorTitle=this.$t('common.error');
                        //     this.errorInfo=this.$t('emploee.NonexistentID')
                        //     return 0;
                        // }
                        // if(response.data.statcode==2){
                        //     this.errorTitle=this.$t('common.error');
                        //     this.errorInfo=this.$t('employee.NonexistentTypeID')
                        //     return 0;
                        // }
                        // if(response.data.statcode==3){
                        //     this.errorTitle=this.$t('common.error');
                        //     this.errorInfo=this.$t('employee.NonexistentVetId')
                        //     return 0;
                        // }
                        this.submitSuccTip('员工信息提交成功')
                    }).catch(err=>{
                         this.errorReturn=true;
                         this.errorTitle=this.$t('common.error');
                        this.submitStat=false;
                         this.errorInfo='新增员工ID重复'
                          
                        //  if(response.data.statcode!=0){
                        //     this.errorReturn=true;
                        // }
                        // if(response.data.statcode==1){
                        //     this.errorTitle=this.$t('common.error');
                        //    
                        //     return 0;
                        // }
                        // if(response.data.statcode==2){
                        //     this.errorTitle=this.$t('common.error');
                        //     this.errorInfo=this.$t('employee.NonexistentTypeID')
                        //     return 0;
                        // }
                        // if(response.data.statcode==3){
                        //     this.errorTitle=this.$t('common.error');
                        //     this.errorInfo=this.$t('employee.NonexistentVetId')
                        //     return 0;
                        // }
                       
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
            
             if(this.submitId==null||this.submitId==undefined){
                this.submitFailTip(this.$t('员工工号为空'))
                return 0;
            }
            if(this.submitname==null||this.submitname==undefined){
                this.submitFailTip(this.$t('员工姓名为空'))
                return 0;
            }
            if(this.submitgender==null||this.submitgender==undefined){
                this.submitFailTip(this.$t('员工性别为空'))
                return 0;
            }
            if(this.submitage==null||this.submitage==undefined){
                this.submitFailTip(this.$t('员工年龄为空'))
                return 0;
            }
            if(this.submitwage==null||this.submitwage==undefined){
                this.submitFailTip(this.$t('员工工资为空'))
                return 0;
            }
            //  if(this.submitwage>10){
            //     this.submitFailTip(this.$t('员工工资超出上限'))
            //     return 0;
            // }
             if(this.submitposition==null||this.submitposition==undefined){
                this.submitFailTip(this.$t('员工职务为空'))
                return 0;
            }
            
             if(this.submitpark==null||this.submitpark==undefined){
                this.submitFailTip(this.$t('员工园区为空'))
                return 0;
            }
             if(this.submityear==null||this.submityear==undefined){
                this.submitFailTip(this.$t('入职年份为空'))
                return 0;
            }
             if(this.submitpassword==null||this.submitpassword==undefined){
                this.submitFailTip(this.$t('密码为空'))
                return 0;
            }
            //  if(this.submitDate==null||this.submitDate==undefined){
            //     this.submitFailTip(this.$t('入职日期为空'))
            //     return 0;
            // }
            
            
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
            this.submitEmployeeInfo();
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
    .zms-employee{
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



