<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-container>
                        <v-row>
                            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-titlex" >{{$t('proc2.addprocContent')}}</span>
                        </v-row>
                        <br/><br/>
                        <v-row>
                           
                            <v-card flat :ripple="{class:null}">
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12" class="zms-vertical-col-height">
                                            <v-text-field :label="$t('proc2.name')" :placeholder="$t('common.pleaseInput')+$t('proc2.name')" prepend-icon="mdi-tag"  />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12" class="zms-vertical-col-height">
                                            <v-text-field :label="$t('proc2.quantity')" :placeholder="$t('common.pleaseInput')+$t('proc2.quantity')" prepend-icon="mdi-numeric"  />
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12" class="zms-vertical-col-height">
                                            <v-text-field :label="$t('proc2.price')" :placeholder="$t('common.pleaseInput')+$t('proc2.price')" prepend-icon="mdi-currency-cny"  />
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-btn v-ripple block class="zms-width"  color="success" >
                                                <v-icon>mdi-arrow-right-thick</v-icon>&nbsp;&nbsp;{{$t('proc2.addToSchedList')}}
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-row>
                    </v-container>
                </v-col>
                <v-divider vertical/>
                <v-col>
                    <v-container>
                        <v-row>
                            <v-icon color="primary">mdi-format-list-text</v-icon> <span class="zms-query-titlex" >{{$t('proc2.procList')}}</span>
                        </v-row>
                        <br/><br/>
                        <v-row>
                            <v-col  cols="12">
                                <div style="height:400px;overflow-y:scroll;">
                                    <v-list dense>
                                        <v-list-item-group mandatory v-model="zmsselectedItem" color="primary">
                                            <v-list-item v-for="(item, i) in zmsItem" :key="i">
                                                <v-list-item-icon>
                                                    <v-icon>mdi-cube-outline</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <!--物品选择器-->
                                                    <span>
                                                        <span class="zms-anisel-av"><span class='zms-anisel-bold'>{{item.name}}</span>
                                                        &nbsp;x{{item.quantity}}&nbsp;&nbsp;<br/>
                                                        <span class='zms-anisel-small'>{{item.price}} × {{item.quantity}} = {{item.price*item.quantity}}</span></span>
                                                    </span>
                                                    
                                                </v-list-item-content>
                                            </v-list-item>

                                            <v-list-item v-if="zmsItem.length==0" disabled>
                                                <v-list-item-icon>
                                                    <v-icon>mdi-information</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <small>{{$t('proc2.havntSelectAny')}}</small>
                                                </v-list-item-content>
                                            </v-list-item>

                                        </v-list-item-group>
                                    </v-list>
                                </div>
                                <v-container>
                                    <v-row>
                                        
                                        <v-col cols="12" sm="12" md="12">
                                            <v-btn v-ripple block class="zms-width"  color="error" >
                                                <v-icon>mdi-arrow-left-thick</v-icon>&nbsp;&nbsp;{{$t('proc2.removeFrSchedList')}}
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-divider vertical/>
                <v-col>
                    <v-container>
                        <v-row>
                            <v-icon color="primary">mdi-view-dashboard-outline</v-icon> <span class="zms-query-titlex" >{{$t('proc2.submitOverview')}}</span>
                        </v-row>
                        <br/><br/>
                        <v-row>
                            <div style="text-align:center">
                                <v-container>
                                    <v-row>
                                        <b>Expected Total Budget</b>
                                    </v-row>
                                    <v-row>
                                        <span class="zms-bender zms-fontlarge primary--text">12345</span>
                                    </v-row>
                                    <br/><br/>
                                    <v-row>
                                        <b>Initiation Time</b>
                                    </v-row>
                                    <v-row>
                                        <span class="zms-bender zms-fontlarge primary--text">2021-07-01</span>
                                    </v-row>
                                </v-container>
                            </div>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script >
export default{
    name:'ProcurementInitiation',
    data(){
        return{
            zmsItem:[
                {name:'Abc',quantity:2,price:4.3}
            ]
        }
    }
}
</script>
<style scoped>
    .zms-vertical-col-height{
        height:75px !important;
    }
    .zms-fontlarge{
        font-size:25px;
        font-weight: bold;
    }
</style>