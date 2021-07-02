<template>
    <div class="zms-home-notices">
        <v-dialog scrollable v-model="zmsDisplay" persistent width="800" >
            <v-card color="" :ripple="{class:null}" >
                <v-card-title class="zms-strip-bg text-h5 text--white primary " color="warning">
                    <v-icon color="white">mdi-selection-search</v-icon>&nbsp;<span class="text--white" style="color:#ffffff !important;">{{$t('animalselector.title')}}</span>
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
                                        <v-row>
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
                                    <v-subheader>{{$t('animalselector.animalList')}}</v-subheader>
                                    <div style="height:400px;overflow-y:scroll;">
                                        <v-list dense>
                                            <v-list-item-group mandatory v-model="zmsSelectedAnimal" color="primary">
                                                <v-list-item v-for="(item, i) in zmsAnimals" :key="i" @click="showAnimalDetail(i)">
                                                    <v-list-item-icon>
                                                        <v-icon>mdi-paw</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <span class="zms-anisel-av"><span class='zms-anisel-bold'>{{item.id}}</span> &nbsp;{{item.name}}&nbsp;&nbsp;<span class='zms-anisel-small'>{{item.category}}</span></span>
                                                    </v-list-item-content>
                                                </v-list-item>

                                                <v-list-item v-if="zmsAnimals.length==0" disabled>
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
                                        <v-card-title>{{selectedAnimal.name}}</v-card-title>
                                        <v-card-text>
                                        <v-row align="center" class="mx-0">
                                            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" ></v-rating>
                                            <div class="grey--text ms-4"> 4.5 </div>
                                        </v-row>
                                        <div class="my-4 text-subtitle-1">
                                            <b>{{$t('animalselector.category')}}</b> : <span>{{selectedAnimal.category}}</span><br/>
                                            <b>{{$t('animalselector.faclLocation')}}</b> : <span>{{selectedAnimal.faclId}}</span><br/>
                                            <b>{{$t('animalselector.age')}}</b> : <span>{{selectedAnimal.age}}</span><br/>
                                            <b>{{$t('animalselector.sex')}}</b> : <span>{{selectedAnimal.gender}}</span><br/>
                                        </div>
                                        </v-card-text>
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
export default {
    components: {PendingProgressCard},
    name: 'AnimalSelector',
    props:{
        
    },
    data(){
        return{
            zmsDisplay:false,
            zmsSelectedAnimal:{id:'-',category:'-',name:'---',gender:'-',age:'-',faclId:'-'},
            zmsSelectedAnimalIdx:-1,
            zmsShowLoadingBar:false,
            zmsAnimals:[
                
            ],
        }
    },
    computed:{
        selectedAnimal(){
            if(this.zmsSelectedAnimalIdx==-1){
                return {id:'-',category:'-',name:'---',gender:'-',age:'-',faclId:'-'}
            }
            return this.zmsAnimals[this.zmsSelectedAnimalIdx];
        }
    },
    methods:{
        emitConfirmSignal(){
            if(this.zmsSelectedAnimalIdx==-1){
                this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('animalselector.notSelected')})
                return;
            }
            this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('animalselector.selectDone')})
            this.$emit('animalSelectorSelect',this.zmsAnimals[this.zmsSelectedAnimalIdx].id);
            this.zmsDisplay=false;
        },
        show(){
            this.zmsSelectedAnimal={};
            this.zmsAnimals=[];
            this.zmsSelectedAnimalIdx=-1;
            this.zmsDisplay=true;
        },
        beginSearch(){
            this.zmsShowLoadingBar=true;
            setTimeout(
                ()=>{
                    getAnimalList().then(response => {
                        this.zmsShowLoadingBar=false;
                        this.zmsAnimals=response.data;
                        console.log(response);
                        if(this.zmsAnimals.length>0){
                            this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('animalselector.successSearch')})
                        }else{
                            this.$store.dispatch('showToastNotify',{type:'error',info:this.$t('animalselector.emptyInfo')})
                        }
                    })
                },2000
            )
        },
        showAnimalDetail(x){
            this.zmsSelectedAnimalIdx=x;
        }
    }
};
</script>

<style scoped lang="scss">
    
</style>