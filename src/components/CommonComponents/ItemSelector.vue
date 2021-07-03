<template>
    <div class="zms-home-notices">
        <v-dialog scrollable v-model="zmsDisplay" persistent width="800" >
            <v-card color="" :ripple="{class:null}" >
                <v-card-title class="zms-strip-bg text-h5 text--white primary " color="warning">
                    <v-icon color="white">mdi-selection-search</v-icon>&nbsp;
                    <span class="text--white" style="color:#ffffff !important;">{{wordlist.title}}</span>
                </v-card-title>
                <v-divider/>
                <br/>
                <v-card-text>
                    <span class="zms-poptip-body2" :class="txNightClass">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-subheader>{{$t('animalselector.filter')}}</v-subheader>
                                    <v-container>
                                        <!--动物选择器-->
                                        <v-row v-if="zmsSelectorMode===0">
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('animalselector.animalId')" v-model="submitId" :placeholder="$t('common.pleaseInput')+$t('animalselector.animalId')" prepend-icon="mdi-identifier"  />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('animalselector.category2')" v-model="submitType" :placeholder="$t('common.pleaseInput')+$t('animalselector.category2')" prepend-icon="mdi-tag-plus"  />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('animalselector.name')" v-model="submitVetname" :placeholder="$t('common.pleaseInput')+$t('animalselector.name')" prepend-icon="mdi-tag"  />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('animalselector.facl')" v-model="submitFacl" :placeholder="$t('common.pleaseInput')+$t('animalselector.facl')" prepend-icon="mdi-home"  />
                                            </v-col>
                                        </v-row>
                                        <!--员工选择器-->
                                        <v-row v-if="zmsSelectorMode===1">
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('staffselector.id')" v-model="submitId" :placeholder="$t('common.pleaseInput')+$t('staffselector.id')" prepend-icon="mdi-identifier"  />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('staffselector.position')" v-model="submitType" :placeholder="$t('common.pleaseInput')+$t('staffselector.position')" prepend-icon="mdi-tag-plus"  />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('staffselector.park')" v-model="submitItemName" :placeholder="$t('common.pleaseInput')+$t('staffselector.park')" prepend-icon="mdi-home"  />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('staffselector.name')" v-model="submitStaffInCharge" :placeholder="$t('common.pleaseInput')+$t('staffselector.name')" prepend-icon="mdi-tag"  />
                                            </v-col>
                                        </v-row>
                                        <!--物品选择器-->
                                        <v-row v-if="zmsSelectorMode===2">
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('itemselector.itemid')" v-model="submitId" :placeholder="$t('common.pleaseInput')+$t('itemselector.itemid')" prepend-icon="mdi-identifier"  />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('itemselector.category')" v-model="submitType" :placeholder="$t('common.pleaseInput')+$t('itemselector.category')" prepend-icon="mdi-tag-plus"  />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('itemselector.name')" v-model="submitItemName" :placeholder="$t('common.pleaseInput')+$t('itemselector.name')" prepend-icon="mdi-tag"  />
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-text-field :label="$t('itemselector.staffInCharge')" v-model="submitStaffInCharge" :placeholder="$t('common.pleaseInput')+$t('itemselector.staffInCharge')" prepend-icon="mdi-account-key"  />
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="3">
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                
                                            </v-col>
                                            <v-col cols="12" sm="6" md="3">
                                                <v-btn :disabled="submitStat" block class="zms-width"  color="primary" @click="beginSearch()">
                                                    <v-icon>mdi-magnify-scan</v-icon>&nbsp;&nbsp;{{$t('animalselector.search')}}
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col>
                                    <v-subheader>{{wordlist.leftList}}</v-subheader>
                                    <div style="height:400px;overflow-y:scroll;">
                                        <v-list dense>
                                            <v-list-item-group mandatory v-model="zmsselectedItem" color="primary">
                                                <v-list-item v-for="(item, i) in zmsItem" :key="i" @click="showAnimalDetail(i)">
                                                    <v-list-item-icon>
                                                        <v-icon>{{getIconX(i)}}</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <!--动物选择器-->
                                                        <span v-if="zmsSelectorMode===0">
                                                            <span class="zms-anisel-av"><span class='zms-anisel-bold'>{{item.id}}</span>
                                                            &nbsp;{{item.name}}&nbsp;&nbsp;<br/>
                                                            <span class='zms-anisel-small'>{{item.category}} · {{item.gender}}</span></span>
                                                        </span>
                                                        <!--物品选择器-->
                                                        <span v-if="zmsSelectorMode===2">
                                                            <span class="zms-anisel-av"><span class='zms-anisel-bold'>{{item.item_id}}</span>
                                                            &nbsp;{{item.name}}&nbsp;&nbsp;<br/>
                                                            <span class='zms-anisel-small'>{{item.type}}</span></span>
                                                        </span>
                                                        <!--员工选择器-->
                                                        <span v-if="zmsSelectorMode===1">
                                                            <span class="zms-anisel-av"><span class='zms-anisel-bold'>{{item.id}}</span>
                                                            &nbsp;{{item.name}}&nbsp;&nbsp;<br/>
                                                            <span class='zms-anisel-small'>{{item.position}} · {{item.park}}</span></span>
                                                        </span>
                                                    </v-list-item-content>
                                                </v-list-item>

                                                <v-list-item v-if="zmsItem.length==0" disabled>
                                                    <v-list-item-icon>
                                                        <v-icon>mdi-information</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <small>{{$t('animalselector.emptyTip')}}</small>
                                                    </v-list-item-content>
                                                </v-list-item>

                                            </v-list-item-group>
                                        </v-list>
                                    </div>
                                </v-col>
                                <v-col>
                                    <v-subheader>{{$t('animalselector.animalStatus')}}</v-subheader>
                                    <v-card :ripple="{class:null}" :loading="loading" class="mx-auto " max-width="374" flat>
                                        <template slot="progress">
                                            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                                        </template>
                                        <v-img height="150" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                                        <!--Animal Selector-->
                                        <div v-if="zmsSelectorMode===0">
                                            <v-card-title>
                                                <span class="primary--text zms-bold-font">
                                                    #<animated-number :formatValue="formatToInt" :value="selectedItem.id" :duration="300"/>
                                                </span> &nbsp;&nbsp;
                                                <v-divider vertical></v-divider>
                                                &nbsp;
                                                &nbsp;
                                                <vue-typing :text="selectedItem.name" :framerate="5" :cursorOptions="zmsVueTypingCursor" />
                                            </v-card-title>
                                            <v-card-text>
                                                <v-row align="center" class="mx-0">
                                                    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                                                    <div class="grey--text ms-4"> 4.5 </div>
                                                </v-row>
                                                <div class="my-4 text-subtitle-1">
                                                    <b>{{$t('animalselector.category')}}</b> : <span>{{selectedItem.category}}</span><br/>
                                                    <b>{{$t('animalselector.faclLocation')}}</b> : <span>{{selectedItem.faclId}}</span><br/>
                                                    <b>{{$t('animalselector.age')}}</b> : <span>{{selectedItem.age}}</span><br/>
                                                    <b>{{$t('animalselector.sex')}}</b> : <span>{{selectedItem.gender}}</span><br/>
                                                </div>
                                                <v-expand-x-transition>
                                                    <!--无效选择-动物已经不存在-->
                                                    <v-alert type="error" class="zms-force-nowrap-e" text border="left" v-if="selectedItem.status==='died'">
                                                        {{$t('animalselector.invalidDeath')}}
                                                    </v-alert>
                                                    <!--无效选择-无权负责-->
                                                    <v-alert type="error" class="zms-force-nowrap-e" text border="left" v-if="0">
                                                        {{$t('animalselector.invalidNoPermission')}}
                                                    </v-alert>
                                                </v-expand-x-transition>
                                            </v-card-text>
                                        </div>
                                        <!--Staff Selector-->
                                        <div v-if="zmsSelectorMode===1">
                                            <v-card-title>{{selectedItem.name}}</v-card-title>
                                            <v-card-text >
                                                <v-row align="center" class="mx-0">
                                                    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                                                    <div class="grey--text ms-4"> 4.5 </div>
                                                </v-row>
                                                <div class="my-4 text-subtitle-1">
                                                    <b>{{$t('staffselector.position')}}</b> : <span>{{selectedItem.position}}</span><br/>
                                                    <b>{{$t('staffselector.gender')}}</b> : <span>{{selectedItem.gender}}</span><br/>
                                                    <b>{{$t('staffselector.age')}}</b> : <span>{{selectedItem.age}}</span><br/>
                                                    <b>{{$t('staffselector.park')}}</b> : <span>{{selectedItem.park}}</span><br/>
                                                    <b>{{$t('staffselector.employYear')}}</b> : <span>{{selectedItem.employment_year}}</span><br/>
                                                </div>
                                            </v-card-text>
                                        </div>
                                        <!--Item Selector-->
                                        <div v-if="zmsSelectorMode===2">
                                            <v-card-title>{{selectedItem.name}}</v-card-title>
                                            <v-card-text>
                                                <v-row align="center" class="mx-0">
                                                    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                                                    <div class="grey--text ms-4"> 4.5 </div>
                                                </v-row>
                                                <div class="my-4 text-subtitle-1">
                                                    <b>{{$t('itemselector.category')}}</b> : <span>{{selectedItem.type}}</span><br/>
                                                    <b>{{$t('itemselector.stock')}}</b> : <span>{{selectedItem.cnt}}</span><br/>
                                                    <b>{{$t('itemselector.channel')}}</b> : <span>{{selectedItem.channel}}</span><br/>
                                                    <b>{{$t('itemselector.wareid')}}</b> : <span>{{selectedItem.wareid}}</span><br/>
                                                    <b>{{$t('itemselector.staffInCharge')}}</b> : <span>{{selectedItem.staff_id}}</span><br/>
                                                </div>
                                            </v-card-text>
                                        </div>
                                        
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </span>
                    <br/><br/>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  class="zms-halfwidth2" v-bind="attrs" v-on="on" light color="primary" @click="zmsDisplay=false;">
                        <v-icon>mdi-arrow-left</v-icon>{{$t('common.return')}}
                    </v-btn>
                    <v-btn  class="zms-halfwidth2" v-bind="attrs" v-on="on" light color="success" @click="emitConfirmSignal">
                        <v-icon>mdi-check</v-icon>{{$t('common.confirm')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!--等待进度条-->
        <pending-progress-card :zmsShow="zmsShowLoadingBar"></pending-progress-card>
    </div>
</template>

<script>
import PendingProgressCard from './PendingProgressCard.vue';
import {getAnimalList} from '../../apis/animalCore'
import {getwareItemInfo} from '../../apis/warehouse'
import {getStaffList} from '../../apis/staffCore'
import VueTyping from 'vue-typing'
import AnimatedNumber from "animated-number-vue";

export default {
    components: {
        PendingProgressCard,
        VueTyping,
        AnimatedNumber
    },
    name: 'ItemSelector',
    props:{
        zmsSelectorMode:Number, //0-动物查找，1-员工查找，2-物品查找
    },
    data(){
        return{
            zmsDisplay:false,
            zmsselectedItem:{id:'-',category:'-',name:'---',gender:'-',age:'-',faclId:'-'},
            zmsselectedItemIdx:-1,
            zmsShowLoadingBar:false,
            zmsItem:[
                
            ],
            submitStaffInCharge:null,
            submitItemName:null,
            zmsVueTypingCursor:{ blinking: true, cursor: "|", color: "black", framerate: 5},
        }
    },
    computed:{
        selectedItem(){
            if(this.zmsselectedItemIdx==-1){
                if(this.zmsSelectorMode===0){
                    return {id:'-',category:'-',name:'---',gender:'-',age:'-',faclId:'-'}
                }
                if(this.zmsSelectorMode===2){
                    return {item_id:'-',type:'-',name:'---',quality_guarantee:'-',channel:'-',staff_id:'-',cnt:'-',wareid:'-'}
                }
                if(this.zmsSelectorMode===1){
                    return {id:'-',position:'-',name:'-',gender:'-',age:'-',wage:0,park:'-',employment_year:'-'}
                }
                
            }
            return this.zmsItem[this.zmsselectedItemIdx];
        },
        wordlist(){
            //Animal Selector
            if(this.zmsSelectorMode===0){
                return{
                    'title':this.$t('animalselector.title'),
                    'leftList':this.$t('animalselector.animalList'),
                    'listIconDefault':'mdi-paw',
                }
            }
            //Staff Selector
            if(this.zmsSelectorMode===1){
                return{
                    'title':this.$t('staffselector.title'),
                    'leftList':this.$t('staffselector.itemList'),
                    'listIconDefault':'mdi-account',
                }
            }
            //Item Selector
            if(this.zmsSelectorMode===2){
                return{
                    'title':this.$t('itemselector.title'),
                    'leftList':this.$t('itemselector.itemList'),
                    'listIconDefault':'mdi-cube-outline',
                }
            }
            return{
                'title':'Invalid Selector!'
            }
        },
        getIconX(){
            return (id)=>{
                if(this.zmsSelectorMode===0){
                    if(this.zmsItem[id].status=='died'){
                        return 'mdi-skull'
                    }
                    return this.wordlist.listIconDefault;
                }
                return this.wordlist.listIconDefault;
            }
        },
    },
    methods:{
        formatToInt(value) {
            return `${value.toFixed(0)}`;
        },
        emitConfirmSignal(){
            if(this.zmsselectedItemIdx===-1){
                this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('animalselector.notSelected')})
                return;
            }
            if(this.zmsSelectorMode===0){
                if(this.zmsItem[this.zmsselectedItemIdx].status=='died'){
                    this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('animalselector.invalidDeathToast')})
                    return;
                }
            }
            this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('animalselector.selectDone')})
            if(this.zmsSelectorMode===0){
                this.$emit('itemSelectorSelect',this.zmsItem[this.zmsselectedItemIdx].id);
            }
            if(this.zmsSelectorMode===1){
                this.$emit('itemSelectorSelect',this.zmsItem[this.zmsselectedItemIdx].id);
            }
            if(this.zmsSelectorMode===2){
                this.$emit('itemSelectorSelect',this.zmsItem[this.zmsselectedItemIdx].item_id);
            }
            this.zmsDisplay=false;
        },
        show(){
            this.zmsselectedItem={};
            this.zmsItem=[];
            this.zmsselectedItemIdx=-1;
            this.zmsDisplay=true;
        },
        beginSearch(){
            this.zmsShowLoadingBar=true;
            if(this.zmsSelectorMode===0){
                setTimeout(
                    ()=>{
                        getAnimalList().then(response => {
                            this.zmsShowLoadingBar=false;
                            this.zmsItem=response.data;
                            console.log(response);
                            if(this.zmsItem.length>0){
                                this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('animalselector.successSearch')})
                            }else{
                                this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('animalselector.emptyInfo')})
                            }
                        })
                    },2000
                )
            }
            if(this.zmsSelectorMode===2){
                setTimeout(
                    ()=>{
                        getwareItemInfo().then(response => {
                            this.zmsShowLoadingBar=false;
                            this.zmsItem=response.data;
                            console.log(response);
                            if(this.zmsItem.length>0){
                                this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('animalselector.successSearch')})
                            }else{
                                this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('animalselector.emptyInfo')})
                            }
                        })
                    },2000
                )
            }
            if(this.zmsSelectorMode===1){
                setTimeout(
                    ()=>{
                        getStaffList().then(response => {
                            this.zmsShowLoadingBar=false;
                            this.zmsItem=response.data;
                            console.log(response);
                            if(this.zmsItem.length>0){
                                this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('animalselector.successSearch')})
                            }else{
                                this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('animalselector.emptyInfo')})
                            }
                        })
                    },2000
                )
            }
            
        },
        showAnimalDetail(x){
            this.zmsselectedItemIdx=x;
        }
    }
};
</script>

<style scoped lang="scss">
    
</style>