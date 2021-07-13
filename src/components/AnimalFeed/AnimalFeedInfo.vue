<template>
    <div class="zms-animal-feed-info">
          <alert-messagebox 
        alertTitle="保存喂养信息"
        :alertBody="`是否保存喂养信息?`"
        alertLevel="warning"
        :alertModel="{}"
        ref='insertalert2'
        @alertConfirm="insertInfoAfter"/>
        <!--insertInfoAfter-->

        <!--事务失败提示框-->
        <alert-messagebox
        :alertTitle="$t('common3.transactionFailTitle')"
        :alertBody="$t('common3.transactionFail')+errorInfo"
        :alertLevel="`error`"
        :alertOnlyConfirm="true"
        ref="error_done" />

        <alert-messagebox
        :alertTitle="$t('common3.transactionDoneTitle')"
        :alertBody="$t('common3.transactionDone')"
        :alertLevel="`success`"
        :alertOnlyConfirm="true"
        ref="commit_donex" />

        <alert-messagebox
        :alertTitle="$t('common3.transactionDoneTitle')"
        :alertBody="`新建信息保存成功`"
        :alertLevel="`success`"
        :alertOnlyConfirm="true"
        ref="commit_done" />
        <v-container>
            <v-row position="fixed" class="toprow">
                <v-col cols="12" sm="8">
                    <v-text-field 
                    solo
                    label="请输入搜索关键词" 
                    v-model="search" 
                    append-icon="mdi-magnify"  
                    @click:append="searchApp"
                   >
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="4"> 
                       <v-dialog
                                v-model="dialog"
                                persistent
                                max-width="500px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    color="primary"
                                    v-ripple block class="zms-width" dark
                                    v-bind="attrs"
                                    v-on="on"
                                    height="50px"
                                     >
                                    新增喂养信息
                                    </v-btn>
                                </template>
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">喂养信息</span>
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
                                                    v-model="editedItem.animalId"
                                                    label="动物编号*"
                                                    :rules="rules"
                                                    hide-details="auto"
                                                    required
                                                    >
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field
                                                    v-model="editedItem.keeperId"
                                                    label="员工编号*"
                                                    :rules="rules"
                                                    hide-details="auto"
                                                    required
                                                    >
                                                    </v-text-field>
                                                </v-col>
                                                
                                            </v-row>
                                            
                                            <v-row>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field
                                                    v-model="editedItem.foodId"
                                                    label="食谱编号"
                                                    :rules="rules"
                                                    hide-details="auto"
                                                    required
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-text-field 
                                                            v-model="editedItem.date" 
                                                            label="日期" 
                                                            prepend-icon="mdi-calendar" 
                                                            readonly 
                                                            :rules="rules"
                                                            hide-details="auto"
                                                            required
                                                            v-bind="attrs" 
                                                            v-on="on">
                                                            </v-text-field>
                                                        </template>
                                                        <v-date-picker color="primary" width="400" v-model="editedItem.date" @input="menu2 = false" :allowed-dates="allowedDates"></v-date-picker>

                                                    </v-menu>
                                                </v-col>
                                                
                                                <v-col cols="12" sm="6">
                                                      <v-menu
                                                        ref="menu"
                                                        v-model="menu1"
                                                        :close-on-content-click="false"
                                                        :nudge-right="40"
                                                        :return-value.sync="feedday"
                                                        transition="scale-transition"
                                                        offset-y
                                                        max-width="290px"
                                                        min-width="290px"
                                                      
                                                    >
                                                        <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="feedday"
                                                            label="时间"
                                                            prepend-icon="mdi-alarm"
                                                            readonly
                                                            v-bind="attrs"
                                                            v-on="on"
                                                        ></v-text-field>
                                                        </template>
                                                        <v-time-picker
                                                        v-if="menu1"
                                                        v-model="feedday"
                                                        full-width
                                                        @click:minute="$refs.menu.save(feedday)"
                                                        ></v-time-picker>
                                                    </v-menu>
                                                    </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field
                                                    v-model="editedItem.note"
                                                    label="备注"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                               <v-row>
                                            <v-col cols="6">
                                                <v-btn
                                                    class="zms-btn-save"
                                                    :disabled="!valid"
                                                    color="blue darken-1"
                                                    text
                                                    @click="validate(editedItem)"
                                                    >
                                                    保存
                                                </v-btn>
                                            </v-col>
                                            <v-col cols="6">
                                            <v-btn   class="zms-btn-clear"
                                                color="blue darken-1"
                                                right
                                                text
                                                @click="reset;dialog = false"
                                                >
                                                取消
                                            </v-btn>
                                            </v-col>
                                            </v-row>
                
                                        </v-container>
                                    </v-form>
                                </v-card-text>
                                
                            </v-card>
                            </v-dialog>
                </v-col>
            </v-row>
        </v-container>
        <v-data-table
                    :headers="headers"
                    :items="Feedrecords"
                    :page.sync="page"
                    :search="search"
                    :items-per-page="10"
                    hide-default-footer
                    @page-count="pageCount = $event"
                    class="elevation-1"
                >
        </v-data-table>
        <div class="zms-query-pagination">
                <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>

    </div>
</template>
<script>
import ItemSelector from '../CommonComponents/ItemSelector.vue'
import {createFeedRecord} from '../../apis/animalFeed'
import { getFeedRecord} from '../../apis/animalFeed'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
export default {
    created(){
        getFeedRecord(
            {
                
            }
        ).then(response => {
            this.pageCount=0
            this.page=1
            this.Feedrecords = response.data
        }).catch( err => {
            this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
            this.$refs.error_done.showAlert();
        });
        
    },
   
    
    name: 'AnimalFeedInfo',
    components:{ItemSelector,AlertMessagebox },
    methods:{
        searchApp(){
            getFeedRecord().then(response => {
                this.pageCount=0
                this.page=1
                this.Feedrecords = response.data
            }).catch( err => {
                this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                this.$refs.error_done.showAlert();
            });
        },
        validate (item) {
            if(this.$refs.form.validate()===true){
                console.log('helloworld')
                this.dialog=false
                this.insertInfo(item)
            }
        },
        insertInfo(item){
              this.$refs.insertalert2.showAlert()
        },
       insertInfoAfter(){
            createFeedRecord(
                {
                'AnimalId':this.editedItem.animalId,
                'KeeperId':this.editedItem.keeperId,
                'FoodId':this.editedItem.foodId,
                'Day':this.editedItem.date +this.editedItem.feedday,
                'Note':this.editedItem.note
              }
            ).then(reponse=>{//传item
                console.log("create成功！")
                this.$refs.form.reset()
                console.log("关！")
                this.$refs.commit_down.showAlert()
            }).catch( err => {
                this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                this.$refs.error_done.showAlert();
            });
        },
        reset () {
        this.$refs.form.reset()
        },
        editItem (item) {
            this.editedIndex = this.Feedrecords.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
         save () {
        if (this.editedIndex > -1) {
          Object.assign(this.Feedrecords[this.editedIndex], this.editedItem)
        } else {
          this.Feedrecords.push(this.editedItem)

          createFeedRecord(
              {
                'AnimalId':this.editedItem.animalId,
                'KeeperId':this.editedItem.keeperId,
                'FoodId':this.editedItem.foodId,
                'Day':this.editedItem.date +this.editedItem.feedday,
                'Note':this.editedItem.note
              }
            )
          .then(response=>{
                this.$refs.commit_donex.showAlert();
          }).catch( err => {
                this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                this.$refs.error_done.showAlert();
            });
        }
        this.close()
        },
        allowedDates: val => (val<=(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        
    },
    data:()=>{
        
        return{
             rules: [
            value => !!value || '不能为空',
            ],
        
            dialogDelete:false,
            menu1: false,
            dialog:false,
            search:"",
            pageCount:0,
            page:1,
            headers:[
            {text: '动物编号', value: 'animalId'},
            {text: '员工编号', value: 'keeperId'},
            {text: '食谱编号', value: 'foodId'},
            {text: '喂食时间', value: 'day'},//怎么输出 date 接 day
            //{text: '喂食日期', value: 'date'},
            {text: '备注', value: 'note'},
        ],
            Feedrecords:[
            ],
        editedItem: {
            animalId: '',
            keeperId: '',
            foodId: '',
            date: '',
            feedday:'',
            note: '',
            },
        defaultItem: {
            animalId: '',
            keeperId: '',
            foodId: '',
            date: '',
            feedday:'',
            note: '',
        },
        }
    }

  
}
</script>
<style scoped lang="scss">
    .zms-query-pagination{
        margin-top:10px;
        transition: all .5s;
    }
</style>