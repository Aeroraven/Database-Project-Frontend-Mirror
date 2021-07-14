<template>
    <div>
             

       <pending-progress-card :zmsShow="zmsShowLoadingBar"/>


        <alert-messagebox 
        alertTitle="保存新生儿信息"
        :alertBody="`是否创建新生动物档案信息?`"
        alertLevel="warning"
        :alertModel="{}"
        ref='insertalert2'
        @alertConfirm="insertInfoAfter"/>
        <!--insertInfoAfter-->

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

     <v-card>
        <v-card-title>
          <span class="child-info-title">新生儿信息登记</span>
        </v-card-title>
        <v-card-text>
              <v-form
              ref="form"
              v-model="valid"
              lazy-validation>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="animalinfo.id"
                            label="动物编号"
                            :rules="rules"
                            hide-details="auto"
                            required
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                            v-model="animalinfo.species"
                            label="物种*"
                            :rules="rules"
                            hide-details="auto"
                            required
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" >
                            <v-text-field
                            v-model="animalinfo.name"
                            label="动物姓名*"
                            :rules="rules"
                            hide-details="auto"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <!--<v-text-field
                            v-model="animalinfo.gender"
                            label="动物性别*"
                            :rules="rules"
                            hide-details="auto"
                            required
                            ></v-text-field>-->

                            <v-select
                                :items="['雄性','雌性']"
                                v-model='animalinfo.gender'
                                label="动物性别*"
                                :rules="rules"
                                hide-details="auto"
                                required
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            v-model="animalinfo.age"
                            label="年龄*"
                            :rules="rules"
                            hide-details="auto"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="animalinfo.birthDate" label="出生日期" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="animalinfo.birthDate" @input="menu2 = false" :allowed-dates="allowedDates"></v-date-picker>

                            </v-menu>
                        </v-col>
                    </v-row>
                    <v-row class="last-row" margin-bottom="0">
                        <v-col cols="12" sm="6" >
                            <v-text-field
                             v-model='animalinfo.bodyLength'
                            label="身高/体长"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" >
                            <v-text-field
                             v-model='animalinfo.weight'
                            label="体重*"
                            :rules="rules"
                            hide-details="auto"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                        <v-select
                            :items="['良好', '生病', '虚弱']"
                             v-model='animalinfo.physicalCondition'
                            label="健康状态*"
                            :rules="rules"
                            hide-details="auto"
                            required
                        ></v-select>
                        </v-col>
                        <!--<v-col cols="12" sm="6" >
                        <v-select
                            :items="['无', '怀孕中', '已育']"
                             v-model='animalinfo.breedSituation'
                            label="繁殖情况*"
                            :rules="rules"
                            hide-details="auto"
                            required
                        ></v-select>
                        </v-col>-->
                    </v-row>
                    <v-row class="botton-style">
                                <v-col cols=6>
                                </v-col>
                                <v-col>
                            <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                                right
                                @click="validate(animalinfo)"
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

                </v-container>
            </v-form>
        </v-card-text>
             </v-card>
    </div>
</template>

<script>
import PendingProgressCard from '../CommonComponents/PendingProgressCard.vue'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
import {createinformation} from '../../apis/animalInfo'
export default {
    name:'NewBornForm',
    components:{
        AlertMessagebox,
        PendingProgressCard
    },
    methods:{
        validate (item) {
        if(this.$refs.form.validate()===true){
            this.insertInfo(item)
           // createinformation(this.animalinfo)
            //this.$refs.form.reset()
        }
        },
        insertInfo(item){
              this.$refs.insertalert2.showAlert()
        },
        insertInfoAfter(){
            this.zmsShowLoadingBar=true;
            createinformation(
                {
                    id:this.animalinfo.id,
                    species:this.animalinfo.species,
                    name:this.animalinfo.name,
                    gender:this.animalinfo.gender,
                    birthDate:this.animalinfo.birthDate,
                    weight:parseInt(this.animalinfo.weight),
                    age:parseInt(this.animalinfo.age),
                    bodyLength:parseInt(this.animalinfo.bodyLength),
                    photo:'Cz==',
                    physicalCondition:this.animalinfo.physicalCondition,
                    breedSituation:'无',
                }
            ).then(reponse=>{
                this.$refs.form.reset()
                this.$refs.commit_done.showAlert()
                this.zmsShowLoadingBar=false
            }).catch( err => {
                this.zmsShowLoadingBar=false;
                this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                this.$refs.error_done.showAlert();
            });
            },
        reset () {
        this.$refs.form.reset()
        },
        allowedDates: val => (val<=(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    },
    data:()=>({
        valid: true,
        zmsShowLoadingBar:false,
        rules: [
        value => !!value || '不能为空',
        ],
        //date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        animalinfo: {
            id: '',
            species: '',
            name: '',
            gender: '',
            age: '',
            weight: '',
            physicalCondition: '',
            breedSituation:'',
            photo:'/static/images/panda.jpg'
        },
    }),
    
    
}
</script>
<style scoped lang="scss">
    .create-new-info{
        padding-left:0px;
        padding-right:20px;
        padding-top:50px;
        padding-bottom:50px;
        background-color: #fafafa;
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
