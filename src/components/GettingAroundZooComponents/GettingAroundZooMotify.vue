<template>
    <div class="zms-anicare" :class="nmNightClass">
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
                <v-container>
                      <v-row>
                        <v-col class="d-flex"  cols="12"   sm="6" md="3" >
                            <v-select :items="vehicle_category_items" :label="$t('gettingAroundZoo.vehicle_category')" v-model="submit_vehicle_category"
                                prepend-icon="el-icon-link"></v-select>     
                        </v-col> 

                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('gettingAroundZoo.price')" v-model="submit_price" :placeholder="$t('common.pleaseInput')+$t('gettingAroundZoo.price')" prepend-icon="el-icon-coin"  />
                        </v-col> 
                        <v-col class="d-flex"  cols="12"   sm="6" md="3" >
                            <v-select :items="admissitems" :label="$t('gettingAroundZoo.ticket_type')" v-model="submit_ticket_type"
                               prepend-icon="el-icon-s-operation" ></v-select>     
                        </v-col> 
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('gettingAroundZoo.deposit')" v-model="submit_deposit" :placeholder="$t('common.pleaseInput')+$t('gettingAroundZoo.deposit')" prepend-icon="el-icon-box"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('gettingAroundZoo.age_limit')" v-model="submit_age_limit" :placeholder="$t('common.pleaseInput')+$t('gettingAroundZoo.age_limit')" prepend-icon="el-icon-collection-tag"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('gettingAroundZoo.weight_limit')" v-model="submit_weight_limit" :placeholder="$t('common.pleaseInput')+$t('gettingAroundZoo.weight_limit')" prepend-icon="el-icon-pie-chart"  />
                        </v-col>
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field :label="$t('gettingAroundZoo.rental_duration')" v-model="submit_rental_duration" :placeholder="$t('common.pleaseInput')+$t('gettingAroundZoo.rental_duration')" prepend-icon="el-icon-sell"  />
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
                                        {{$t('gettingAroundZoo.itemAlter')}}
                                    </span>
                                </v-card-title>

                                     <v-card-text>
                                        <v-container>
                                        <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field disabled v-model="editedItem['vehicleCategory']" :label="$t('gettingAroundZoo.vehicle_category')"></v-text-field>
                                        </v-col>
                                        <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['price']"  :label="$t('gettingAroundZoo.price')"></v-text-field>
                                        </v-col>
                                        <v-col class="d-flex"  cols="12"   sm="6" md="3" >
                                            <v-select disabled v-model="editedItem['ticketType']" :items="admissitems" :label="$t('gettingAroundZoo.ticket_type')" 
                                                prepend-icon="el-icon-s-operation"></v-select>     
                                        </v-col>
                                        <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['deposit']"  :label="$t('gettingAroundZoo.deposit')"></v-text-field>
                                        </v-col>
                                        <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['ageLimit']"  :label="$t('gettingAroundZoo.age_limit')"></v-text-field>
                                        </v-col>
                                        <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['weightLimit']"  :label="$t('gettingAroundZoo.weight_limit')"></v-text-field>
                                        </v-col>
                                        <v-col  cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem['rentalDuration']"  :label="$t('gettingAroundZoo.rental_duration')"></v-text-field>
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
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('gettingAroundZoo.delete')}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{$t('gettingAroundZoo.delete_content')}}</span><br/><br/>
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
import { getGettingAroundZooData, updateGettingAroundZooInfo } from '../../apis/gettingAroundZoo';

export default {
    name: 'GettingAroundZooMotify',
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
        
        submit_vehicle_category:null,
        submit_price:null,
        submit_ticket_type:null,
        submit_deposit:null,
        submit_age_limit:null,
        submit_weight_limit:null,
        submit_rental_duration:null,

        headers:[
            {text: '交通工具类别', value: 'vehicleCategory'},
            {text: '票价', value: 'price'},
            {text: '票种', value: 'ticketType'},
            {text: '保险金', value: 'deposit'},
            {text: '年龄限制', value: 'ageLimit'},
            {text: '体重限制', value: 'weightLimit'},
            {text: '乘坐时长', value: 'rentalDuration'},
            {text: '操作', value: 'actions', sortable: false }

            
        ],
        admissitems: ['全价票', '优惠票'],
        vehicle_category_items:['环园小火车','空中缆车','观光马车'],

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
                    getGettingAroundZooData(
                        {
                            vehicle_category:this.submit_vehicle_category,
                            price:this.submit_price,
                            ticket_type:this.submit_ticket_type,
                            deposit:this.submit_deposit,
                            age_limit:this.submit_age_limit,
                            weight_limit:this.submit_weight_limit,
                            rental_duration:this.submit_rental_duration, 
                        }
                    ).then(response => {
                        this.queryData = response.data
                        this.queryLoaderDialog=false;
                        if(this.queryData.length>0){
                            this.$store.dispatch('showToastNotify',{type:'success',info:'信息查询成功'})
                        }else{
                            this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('未找到符合条件的选项')})
                        }
                        
                    }).catch(err=>{
                        this.queryLoaderDialog=false;
                        this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('信息查询失败'+err)}) 
                        console.log(err);
                    })
                },2000
            )
        },
        updateItemInfo(){
            this.queryLoaderDialog2=true;
            setTimeout(
                ()=>{
                    updateGettingAroundZooInfo(
                        {
                            vehicle_category:this.editedItem['vehicleCategory'],
                            price:this.editedItem['price'],
                            ticket_type:this.editedItem['ticketType'],
                            deposit:this.editedItem['deposit'],
                            age_limit:this.editedItem['ageLimit'],
                            weight_limit:this.editedItem['weightLimit'],
                            rental_duration:this.editedItem['rentalDuration'], 
                        }

                    ).then(response => {
                        this.queryLoaderDialog2=false;
                        this.dialog=false;
                        this.$store.dispatch('showToastNotify',{type:'success',info:'信息更新成功'})
                        this.close();

                         getGettingAroundZooData(
                                {
                                    vehicle_category:this.submit_vehicle_category,
                                    price:this.submit_price,
                                    ticket_type:this.submit_ticket_type,
                                    deposit:this.submit_deposit,
                                    age_limit:this.submit_age_limit,
                                    weight_limit:this.submit_weight_limit,
                                    rental_duration:this.submit_rental_duration, 
                                }
                                ).then(response => {
                                 
                                this.queryData = response.data
                                }).catch( err =>{
                                })


                    }).catch(err=>{
                        this.queryLoaderDialog=false;        
                        this.queryLoaderDialog2=false;
                        this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('信息更新失败'+err)})
                        console.log(err);
                    })
                },2000
            )
        },
        
        deleteItemInfo(){
            this.submit_ID=null;
            this.submit_vehicle_category=null;
            this.submit_price=null;
            this.submit_ticket_type=null;
            this.submit_deposit=null;
            this.submit_age_limit=null;
            this.submit_weight_limit=null;
            this.submit_rental_duration=null;
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