<template>
  <div class="zms-home-notice">
      <alert-messagebox
        :alertTitle="$t('common3.transactionFailTitle')"
        :alertBody="$t('common3.transactionFail')"
        :alertLevel="`error`"
        :alertOnlyConfirm="true"
        ref="error_done" />

        <span>下方列出了园区内所有的场馆</span>
        <v-btn color="primary" text @click="newDialog=true">{{$t('venue.Info.ecreate')}}</v-btn>
         <v-btn color="primary" text @click="goto()">{{
             '查看场馆信息列表'}}</v-btn>

        <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in venueDetail" :key="item.id" class="align-self-stretch">
                    <v-card  :class="cardNightClass" :ripple="{ class: null }" class="mx-auto" max-width="400">
                        <v-img class="white--text align-end" height="200px" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Giants_of_the_Savanna.jpg">
                             
                            <v-card-title>{{item.name}}</v-card-title>
                        </v-img>
                       <v-card-subtitle class="pb-0"><b>场馆编号</b> {{item.areaId}}</v-card-subtitle>
                        <v-card-text class="text--primary pb-0">
                            <div><b>位置:{{item.location}}</b></div>
                            <div></div>
                        </v-card-text>
                        <v-card-text class="text--primary pb-0">
                            <div><b>所属园区:{{item.zone}}</b></div>
                            <div></div>
                        </v-card-text>
                        
                        <v-card-actions>
                            <!-- <v-btn color="primary" text @click="gotoItem(item)">查看场馆详细信息</v-btn> -->
                            
                            <v-btn color="primary" text @click="openDialog(item.sid)">查看并编辑场馆信息</v-btn>

                             <!-- <v-btn color="primary" text @click="deleteItemDialog(item)">删除场馆信息</v-btn> -->
                        </v-card-actions>
                    </v-card>
                    
                </v-col>
            </v-row>
            
        </v-container>

        <v-dialog v-model="deleteDialog" persistent width="600" >
            <v-card color="" :ripple="{class:null}" >
                <v-card-title class=" zms-strip-bg text-h5 text--white orange darken-3 " color="warning">
                    <v-icon color="white">mdi-close-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('venue.item.delete')}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body">{{$t('venue.item.delete_content')}}</span><br/><br/>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="deleteItemConfirm()">
                        <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="error" @click="close()">
                        <v-icon>mdi-arrow-left</v-icon>{{$t('common.cancel')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="newDialog" persistent  max-width="600px">
            <v-card :ripple="{class:null}">
                <v-card-title  class=" zms-strip-bg text-h5 text--white primary " color="warning">
                    <v-icon color="white">mdi-plus-thick</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('venue.Info.new')}}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_id" :label="$t('venue.item.id')" prepend-icon="mdi-account-key"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_name"  :label="$t('venue.item.name')" prepend-icon="el-icon-mobile"></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_instruction"  :label="$t('venue.item.instruction')" prepend-icon="el-icon-dish"></v-text-field>
                            </v-col>
 <!-- <v-col
        class="d-flex"
        cols="12"
        sm="6"
         md="6"
      >
        <v-select
          :items="venueitems"
         label='场馆名称'
         
          prepend-icon="mdi-tag"
          v-model="alterItem_name" 
        ></v-select>
      </v-col> -->
                        
                           
                             <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_zone" :label="$t('venue.item.zone')" prepend-icon="el-icon-pie-chart"></v-text-field>
                            </v-col>
                             <!-- <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_location" :label="$t('venue.item.location')" prepend-icon="el-icon-notebook-2"></v-text-field>
                            </v-col> -->
                <v-col
        class="d-flex"
        cols="12"
        sm="6"
         md="6"
      >
        <v-select
          :items="venuelocaitems"
         label='场馆位置'
         
          prepend-icon="el-icon-notebook-2"
          v-model="alterItem_location"
        ></v-select>
      </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_additional_fee" :label="$t('venue.item.additional_fee')" prepend-icon="el-icon-table-lamp"></v-text-field>
                            </v-col>
                            <!-- <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_current_tourist_cnt" :label="$t('venue.item.current_tourist_cnt')"></v-text-field>
                            </v-col> -->
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_telephone" :label="$t('venue.item.telephone')" prepend-icon="el-icon-sell"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_capacity" :label="$t('venue.item.capacity')" prepend-icon="el-icon-price-tag"></v-text-field>
                            </v-col>
                            <v-col
        class="d-flex"
        cols="12"
        sm="6"
        md="6"
      >
        <v-select
          :items="items"
      
         v-model="alterItem_status" :label="$t('venue.item.status')"
         prepend-icon="el-icon-turn-off"
        ></v-select>
      </v-col>
                            
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="newDialog=false;">
                        <v-icon>mdi-close</v-icon>{{$t('common.cancel')}}
                    </v-btn>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="success" @click="createInfo()">
                        <v-icon>mdi-check</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="alterDialog" persistent  max-width="600px">
            <v-card :ripple="{class:null}" >
                <v-card-title class=" zms-strip-bg text-h5 text--white primary " color="warning">
                    <v-icon color="white">mdi-pen</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('venue.Info.alter')}}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                             <v-col cols="12" sm="6" md="6">
                                <v-text-field disabled v-model="editedItem['areaId']" :label="$t('venue.item.id')" prepend-icon="mdi-account-key"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="editedItem['name']"  :label="$t('venue.item.name')" prepend-icon="el-icon-s-data"></v-text-field>
                            </v-col>
        <!-- <v-col
        class="d-flex"
        cols="12"
        sm="6"
         md="6"
      >
        <v-select
          :items="venueitems"
         label='场馆名称'
         
          prepend-icon="mdi-tag"
          v-model="editedItem['name']" 
        ></v-select>
      </v-col> -->
                           
                             <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="editedItem['zone']" :label="$t('venue.item.zone')" prepend-icon="el-icon-pie-chart"></v-text-field>
                            </v-col>
                             <!-- <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="editedItem['location']" :label="$t('venue.item.location')" prepend-icon="el-icon-notebook-2"></v-text-field>
                            </v-col> -->
                 <v-col
        class="d-flex"
        cols="12"
        sm="6"
         md="6"
      >
        <v-select
          :items="venuelocaitems"
         label='场馆位置'
         
          prepend-icon="el-icon-notebook-2"
          v-model="editedItem['location']" 
        ></v-select>
      </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="editedItem['additionalFee']" :label="$t('venue.item.additional_fee')"  prepend-icon="el-icon-table-lamp"></v-text-field>
                            </v-col>
                            <!-- <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="alterItem_current_tourist_cnt" :label="$t('venue.item.current_tourist_cnt')"></v-text-field>
                            </v-col> -->
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="editedItem['telephone']" :label="$t('venue.item.telephone')"  prepend-icon="el-icon-price-tag"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field v-model="editedItem['touristCapacity']" :label="$t('venue.item.capacity')" prepend-icon="el-icon-sell"></v-text-field>
                            </v-col>
                            <v-col
        class="d-flex"
        cols="12"
        sm="6"
        md="6"
      >
        <v-select
          :items="items"
         
         v-model="editedItem['status']" :label="$t('venue.item.status')"
         prepend-icon="el-icon-turn-off"
        ></v-select>
      </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="primary" @click="alterDialog=false;close()">
                        <v-icon>mdi-close</v-icon>{{$t('common.cancel')}}
                    </v-btn>
                    <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="success" @click="updateInfo()">
                        <v-icon>mdi-check</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

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
    </div>
</template>

<script>
import {getvenueItemInfo, updatevenueItemInfo} from '../../apis/venue.js'
import {createvenueItemInfo} from '../../apis/venue.js'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
export default {
    components: { AlertMessagebox  },
    name: 'venueInfo',
    props:{
        drawer:Boolean,
       
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
    },
    data:()=>{
        return{

            // venueitems:['澳洲森林馆','美洲森林馆','高非高原馆','非洲草原馆','长颈鹿馆','熊猫乐园','考拉园','金牛岭','川金丝猴','侏罗纪公园'],
            venueitems:['食肉动物展区','火烈鸟展区','袋鼠坡','长颈鹿馆'],
             venuelocaitems:['A区','B区','C区','D区','E区'],
            queryLoaderDialog:true,
            venueDetail:[],
           
            alterDialog:false,
            alterId:-1,
            alterItem:{},
            submitStat:false,
            errorReturn:false,
            newDialog:false,
            errorTitle:'',
            errorInfo:'',

            alterItem_id:null,
            alterItem_name:null,
            alterItem_zone:null,
            alterItem_location:null,
            alterItem_additional_fee:null,
            alterItem_current_tourist_cnt:null,
            alterItem_telephone:null,
            alterItem_capacity:null,
            items: [ '开','关'],
            editedItem:{
                 id:null,
                name:null,
                zone:null,
                location:null,
                additional_fee:null,
                telephone:null,
                capacity:null,
                status:null,
                
            },
            defaultItem: {
                id:null,
                name:null,
                zone:null,
                location:null,
                additional_fee:null,
                telephone:null,
                capacity:null,
                status:null,
        }
        }
    },
    created(){
        this.fetchVenueInfo();
    },
    methods:{
        openDialog(id){
            // this.alterDialog=true;
            // this.alterId=id;
            // this.alterItem=this.venueDetail[id]
            this.editedIndex = this.venueDetail.indexOf(id)
            this.editedItem = this.venueDetail[id]
             this. defaultItemIndex = this.venueDetail.indexOf(id)
            this. defaultItem = this.venueDetail[id]


            // this.editedItem = Object.assign({}, item)
            this.alterDialog = true
        },
        deleteItemDialog(item){
            // this.alterDialog=true;
            // this.alterId=id;
            // this.alterItem=this.venueDetail[id]
           
            this.delIndex = this.venueDetail.indexOf(item)
            this.delItem = Object.assign({}, item)
            //this.dialog = true
            this.deleteDialog=true
        },
        
        updateInfo(){
             if(isNaN(parseInt(this.editedItem['touristCapacity']))){
                this.$store.dispatch('showToastNotify',{type:'error',info:'容量输入无效'})
                return
            }
            if(isNaN(parseInt(this.editedItem['additionalFee']))){
                this.$store.dispatch('showToastNotify',{type:'error',info:'费用输入无效'})
                return
            }
            this.submitStat=true;
            setTimeout(
                ()=>{
                    updatevenueItemInfo({
                         areaId:this.editedItem['areaId'],
                               name:   this.editedItem['name'],
                                  zone:  this.editedItem['zone'],
                                  location:  this.editedItem['location'],
                                   additionalFee: this.editedItem['additionalFee'],
                                    
                                    telephone:this.editedItem['telephone'],
                                   touristCapacity: this.editedItem['touristCapacity'],
                                   status:this.editedItem['status']
                    }).then(response => {
                       
                        // if(response.data.statcode!=0){
                        //     this.submitStat=false;
                        //     this.errorTitle=this.$t('common.error');
                        //     this.errorInfo=this.$t('venue.Info.generalError')
                        //     this.errorReturn=true;
                        //     return 0;
                        // }
                        this.submitStat=false;
                        this.alterDialog=false,
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('venue.Info.alterDone')})
                    }).catch( err => {
                        this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                        this.$refs.error_done.showAlert();
                        this.submitStat=false;
                        this.alterDialog=false;
                    });
                    
                    /*.catch(err=>{
                         this.submitStat=false;
                        this.alterDialog=false;
                         this.errorTitle=this.$t('common.error');
                            this.errorInfo=this.$t('venue.Info.generalError')
                            this.errorReturn=true;
                    })*/
                },2000
            )
                
        },

        createInfo(){
            this.submitStat=true;
            setTimeout(
                ()=>{
                    createvenueItemInfo(
                        {
                            areaid:this.alterItem_id,
                            name:   this.alterItem_name,
                            introduction:this.alterItem_instruction,
                            zone:  this.alterItem_zone,
                            location:  this.alterItem_location,
                            additionalFee: parseInt(this.alterItem_additional_fee),
                            telephone:this.alterItem_telephone,
                            touristCapacity: parseInt(this.alterItem_capacity),
                            status:this.alterItem_status
                        }

                    ).then(response => {
                       
                        // if(response.data.statcode!=0){
                        //     this.submitStat=false;
                        //     this.errorTitle=this.$t('common.error');
                        //     this.errorInfo=this.$t('venue.Info.generalError')
                        //     this.errorReturn=true;
                        //     return 0;
                        // }
                        this.submitStat=false;
                        this.newDialog=false,
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('venue.Info.createDone')})
                        this.fetchVenueInfo()
                    }).catch( err => {
                        this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                        this.$refs.error_done.showAlert();
                        this.submitStat=false
                    });
                    
                    /*.catch(err=>{
                         this.submitStat=false;
                        this.newDialog=false;
                         this.errorTitle=this.$t('common.error');
                            this.errorInfo='新增场馆失败'
                            this.errorReturn=true;
                    })*/
                },2000
            )
                
        },

        close () {
           
            this.deleteDialog=false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            this.delIndex = -1
            this.delItem = Object.assign({}, this.defaultItem)
            })
             this.alterDialog = false
        },
        fetchVenueInfo(){
            this.queryLoaderDialog=true;
            setTimeout(
                ()=>{
                    getvenueItemInfo(
                       

                    ).then(response => {
                        for(let i=0;i<response.data.length;i++)
                        {
                            if(response.data[i].status==1)
                            response.data[i].status='开';
                            else response.data[i].status='关';
                        }
                        this.venueDetail=response.data;
                        this.queryLoaderDialog=false;
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('venue.Info.queryDone')})
                        let i=0;
                        for(;i< this.venueDetail.length;i++){
                            this.venueDetail[i].dialogOpen=false;
                            this.venueDetail[i].sid=i;
                        }
                    }).catch(err=>{
                        this.queryLoaderDialog=false;
                    })
                },1000
            )
           
        },
        gotoItem(item){
            this.$store.dispatch('showToastNotify',{type:'default',info:this.$t('venue.Info.search')})
            this.$router.push({name:'VenueItemManagement',params: {areaId:item['areaId']}})
        },
        goto()
        {
             this.$store.dispatch('showToastNotify',{type:'default',info:this.$t('venue.Info.search')})
            this.$router.push({path:'/venue/itemManagement'})
        }

    }
};
</script>

<style scoped lang="scss">
    .zms-stat{
        font-family: 'benderregular';
        font-size:25px;
    }
    .zms-home-notice{
        margin:0px 20px 0px 20px;
        padding-top:10px;
        padding-bottom: 10px;
        
    }
    .zms-home-center{
        text-align: center;
    }
    .zms-card-noborder{
        border-width: 0px;
    }
    .zms-home-title2{
        font-size:18px;
        font-weight: bold;
        display:block;
    }
    .zms-home-body{
        margin-left:7%;
        margin-right: 7%;
        padding-top:10px;
        padding-bottom: 10px;
    }
    .zms-home-body2{
        margin-left:5%;
        margin-right: 5%;
        padding-top:20px;
        padding-bottom: 10px;
    }
</style>