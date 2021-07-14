<template>
   <div class="create-new-info">
        <alert-messagebox 
        alertTitle="保存生产信息"
        :alertBody="`是否保存编号为`+insertId+`生产信息?`"
        alertLevel="warning"
        :alertModel="{}"
        ref='insertalert1'
        @alertConfirm="insertBirthInfoAfter"/>

        <alert-messagebox
        :alertTitle="$t('common3.transactionDoneTitle')"
        :alertBody="`新建信息保存成功`"
        :alertLevel="`success`"
        :alertOnlyConfirm="true"
        ref="commit_done" />

        <alert-messagebox
        :alertTitle="$t('common3.transactionFailTitle')"
        :alertBody="$t('common3.transactionFail')+errorInfo"
        :alertLevel="`error`"
        :alertOnlyConfirm="true"
        ref="error_done" />
        
        <pending-progress-card :zmsShow="zmsShowLoadingBar"/>
        <v-row>
            <v-col  cols="6" flex align-stretch>
                <v-card>
                    <v-card-title>
                    <span class="birth-info-title" >生产信息登记</span>
                    </v-card-title>

                    <v-card-text>
                        <v-form
                         ref="form"
                         v-model="valid"
                         lazy-validation>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                 
                                    >
                                        <v-text-field
                                            label="动物编号*"
                                            v-model="birthinfo.ani_id"
                                            :rules="rules"
                                            hide-details="auto"
                                            required
                                            ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                       
                                
                                    >
                                    <v-select
                                        label="是否顺利*"
                                        :items="['顺利', '不顺利']"
                                        v-model="birthinfo.success"
                                        :rules="rules"
                                        hide-details="auto"
                                        required
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                      
                                    >
                                        <v-text-field
                                        label="孩子数量*"
                                        v-model="birthinfo.children_num"
                                        :rules="rules"
                                        hide-details="auto"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                     <v-col cols="12" class="temp">
                                 <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="birthinfo.date_of_birth" label="出生日期" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="birthinfo.date_of_birth" @input="menu2 = false" :allowed-dates="allowedDates"></v-date-picker>

                            </v-menu>
                        </v-col>

                                </v-row>
                            </v-container>
                            <v-row margin-top="50px" class="botton-style">
                                <v-col cols=6>
                                </v-col>
                                <v-col>
                            <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                                right
                                @click="validate(birthinfo)"
                                >
                                提交
                            </v-btn>

                            <v-btn
                                color="error"
                                class="mr-4"
                                right
                                @click="reset"
                                >
                                清除
                            </v-btn>
                                </v-col>
                            </v-row>
                         </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6" flex align-self>
                <new-born-form/>
            </v-col>
        </v-row> 
   </div>
</template>
<script>
import {createBreedInfo} from '../../apis/animalBreed'
import NewBornForm from './NewBornForm.vue'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
import PendingProgressCard from '../CommonComponents/PendingProgressCard.vue'
export default {
     name: 'CreateNewBornInfo',
     components:{
         NewBornForm,AlertMessagebox,PendingProgressCard   
     },
     methods: {
          
      validate (birthinfo) {
          
        if(this.$refs.form.validate()===true){
            this.insertbirthinfo(birthinfo)
            
        }
        
      },
      insertbirthinfo(birthinfo){
          console.log(this.birthinfo)
          this.insertId=birthinfo.ani_id
          this.$refs.insertalert1.updateBody(`是否保存编号为`+this.insertId+`生产信息?`)
          this.$refs.insertalert1.showAlert()
           
      },
      insertBirthInfoAfter(){
          this.zmsShowLoadingBar=true
           createBreedInfo(
               {
                   ani_id:this.birthinfo.ani_id,
                   time:this.birthinfo.date_of_birth,
                   success:(this.birthinfo.success==='顺利'?true:false),
                   children_num:parseInt(this.birthinfo.children_num)
               }
           ).then(reponse=>{//参数为birthinfo
                this.$refs.form.reset()
                this.$refs.commit_done.showAlert()
                this.zmsShowLoadingBar=false
                this.reset()
            })
            .catch( err => {
                this.submitStat=false;
                this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                this.$refs.error_done.showAlert();
                this.zmsShowLoadingBar=false
            });
      },
      reset () {
        this.$refs.form.reset()
      },
      allowedDates: val => (val<=(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    },
    data: () => ({
      valid: true,
      zmsShowLoadingBar:false,
      rules: [
        value => !!value || '不能为空',
      ],
    
      birthinfo:{
          ani_id:'',
          success:'',
          date_of_birth:'',
          children_num:''
      },

    }),
     }
</script>

<style scoped lang="scss">
    .temp{
        display:block;
        margin-bottom:50px;
    }
    .create-new-info{
         padding-left:60px;
        padding-right:60px;
        padding-top:20px;
        padding-bottom:20px;
        background-color: #fafafa;
        width:90vw;
        }
    .birth-info-title{
        font-size: 100%;
        font-weight: bold;
        color: #DD2666;
        letter-spacing: 1px;
        position:relative;
        top:0px;
    }
    .child-info-title{
        font-size: 100%;
        font-weight: bold;
        color: #DD2666;
        letter-spacing: 1px;
        position:relative;
        top:0px;
    }
</style>
