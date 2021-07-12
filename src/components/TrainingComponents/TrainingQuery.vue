<template>
    <div class="zms-anicare" :class="nmNightClass">
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
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
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="error" @click="deleteItemInfo" >
                                <v-icon>mdi-filter-minus</v-icon>&nbsp;&nbsp;删除过滤条件
                            </v-btn>
                        </v-col>

                      <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col>
                        
                        
                        <!-- <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找 
                            </v-btn>
                        </v-col>--> 
                    </v-row>
                </v-container>
                
            </div>
        </div>
        <v-divider/>
        <div class="zms-query-result">
            <v-icon color="primary">mdi-note-search</v-icon> <span class="zms-query-title">查询结果</span>
            <div class="zms-query-result-table">
                <v-data-table
                    :headers="headers"
                    :items="queryData"
                    :page.sync="page"
                    :items-per-page="5"
                    hide-default-footer
                    @page-count="pageCount = $event"
                    class="elevation-1"
                >
                <template v-slot:top>
                    <v-toolbar flat >
                        <v-toolbar-title>查询结果</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="600px" persistent>
                            <v-card :ripple="{class:null}">
                                <v-card-title class=" zms-strip-bg text-h5 text--white primary " color="warning">
                                    <v-icon color="white">mdi-pen</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">
                                        {{$t('training.itemAlter')}}
                                    </span>
                                </v-card-title>

                                     <v-card-text>
                                        <v-container>
                                        <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['ID']"  :label="$t('training.ID')"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['animalID']" :label="$t('training.animalID')"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['skill']" :label="$t('training.skill')"></v-text-field>
                                        </v-col>
                                         <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['trainer_id']"  :label="$t('training.trainer_id')"></v-text-field>
                                        </v-col>
                                        <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['train_site']"  :label="$t('training.train_site')"></v-text-field>
                                        </v-col>
                                         <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['training_date']"  :label="$t('training.training_date')"></v-text-field>
                                        </v-col>
                                          <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['start_time']"  :label="$t('training.start_time')"></v-text-field>
                                        </v-col>
                                         <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['end_time']"  :label="$t('training.end_time')"></v-text-field>
                                        </v-col>
                                         <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['props']"  :label="$t('training.props')"></v-text-field>
                                        </v-col>
                                         <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['remarks']"  :label="$t('training.trainer_id')"></v-text-field>
                                        </v-col>
                                        </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="close()">
                                            <v-icon>mdi-close</v-icon>{{$t('common.cancel')}}
                                        </v-btn>
                                        <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="success" @click="updateItemInfo()">
                                            <v-icon>mdi-check</v-icon>{{$t('common.confirm')}}
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small class="mr-2" @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
            </div>
            <div class="zms-query-pagination">
                <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
        </div>
        <v-dialog persistent v-model="queryLoaderDialog" width="300">
            <v-card color="">
                <v-card-title>正在查找</v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    请稍后<br/><br/>
                    <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog persistent v-model="queryLoaderDialog2" width="300">
            <v-card color="">
                <v-card-title>正在提交</v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    请稍后<br/><br/>
                    <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="errorReturn" persistent width="500" >
            <v-card color="" :ripple="{class:null}" >
                <v-card-title class=" zms-strip-bg text-h5 text--white red " color="warning">
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{errorTitle}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{errorInfo}}</span><br/><br/>
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

        <v-dialog v-model="deleteDialog" persistent width="600" >
            <v-card color="" :ripple="{class:null}" >
                <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3 " color="warning">
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('training.delete')}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{$t('training.delete_content')}}</span><br/><br/>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="updateItemInfo()">
                        <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="error" @click="close()">
                        <v-icon>mdi-arrow-left</v-icon>{{$t('common.cancel')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>

</template>

<script>
import { getTrainingData, updateTrainingInfo } from '../../apis/training';

export default {
    name: 'TrainingQuery',
    created(){
        if(this.$route.params.id!=undefined){
            this.fetchItemInfo();
        }
    },computed:{
        cardNightClass(){
            return{
                'zms-cardcolor-light':!this.$vuetify.theme.dark,
                'zms-cardcolor-dark':this.$vuetify.theme.dark,
                
            }
        },
        nmNightClass(){
            return{
                'zms-background-nm-dark':this.$vuetify.theme.dark,
                
            }
        },
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
            submitNote:null,     

        headers:[   
            {text: '训练编号', value: 'ID'},
            {text: '动物编号', value: 'animalID'},
            {text: '训练员工编号', value: 'trainer_id'},
            {text: '训练地点', value: 'train_site'},
            {text: '训练时间', value: 'training_date'},
            {text: '开始时间', value: 'start_time'},
            {text: '结束时间', value: 'end_time'},
            {text: '训练技能', value: 'skill'},
            {text: '训练道具', value: 'props'},
            {text: '备注信息', value: 'remarks'},
            {text: '操作', value: 'actions', sortable: false }

            
        ],
        queryLoaderDialog:false,
        pageCount:0,
        page:1,
        dialog:false,
        queryData:[],
        editedIndex: -1,
        delIndex: -1,
        queryLoaderDialog2:false,
        deleteDialog:false,
        errorReturn:false,
        errorTitle:'',
        errorInfo:'',
        editedItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        delItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        }}
        
    },methods:{
        fetchItemInfo(){
            this.queryLoaderDialog=true;
            setTimeout(
                ()=>{
                    getTrainingData().then(response => {
                        this.queryData = response.data
                        this.queryLoaderDialog=false;
                        if(this.queryData.length>0){
                            this.$store.dispatch('showToastNotify',{type:'success',info:'信息查询成功'})
                        }else{
                            this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('training.emptyInfo')})
                        }
                        
                    })
                },2000
            )
        },
        updateItemInfo(){
            this.queryLoaderDialog2=true;
            setTimeout(
                ()=>{
                    updateTrainingInfo().then(response => {
                        this.queryLoaderDialog2=false;
                        if(response.data.statcode!=0){
                            this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('warehouse.Info.generalError')
                            this.errorReturn=true;
                            return 0;
                        }
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息更新成功'})
                        this.close();
                    })
                },2000
            )
        },
        deleteItemInfo(){
           
            this.submit_id=null;
            this.submit_animalID=null;
            this.submit_trainer_id=null;
            this.submit_train_site=null;
            this.submit_training_date=null;
            this.submit_start_time=null;
            this.submit_end_time=null;
            this.submit_skill=null;
            this.submit_props=null;
            this.submit_remarks=null;

        },
        close () {
            this.dialog = false
            this.deleteDialog=false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            this.delIndex = -1
            this.delItem = Object.assign({}, this.defaultItem)
            })
        },
        editItem (item) {
            this.editedIndex = this.queryData.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem (item) {
            this.delIndex = this.queryData.indexOf(item)
            this.delItem = Object.assign({}, item)
            //this.dialog = true
            this.deleteDialog=true
        },
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