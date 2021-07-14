<template>
    <v-dialog v-model="zmsShowAlert" persistent :width="alertWidth" >
        <v-card color="" :ripple="{class:null}" >
            <v-card-title class=" zms-strip-bg text-h5 text--white darken-3" :class="headBannerClass" color="warning">
                <v-icon color="white">{{alertIcon}}</v-icon>&nbsp;
                <span class="text--white" style="color:#ffffff !important;">
                    {{alertTitle}}
                </span>
            </v-card-title>
            <v-divider/>
            <br/>
            <v-card-text>
                <span class="zms-poptip-body" :class="txNightClass" v-if="alertMode=='traditional'">
                    <!--SweetAlert2风格的图标 Thanks to ZY-->
                    <div class="zms-swal2" v-if="this.alertLevel==='success'">
                         <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" :style="swalNightStyle"></div>
                            <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                            <div class="swal2-success-ring"></div> <div class="swal2-success-fix" :style="swalNightStyle"></div>
                            <div class="swal2-success-circular-line-right" :style="swalNightStyle"></div>
                        </div>
                    </div>
                    <div class="zms-swal2" v-if="this.alertLevel==='error'">
                        <div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;">
                            <span class="swal2-x-mark">
                                <span class="swal2-x-mark-line-left"></span>
                                <span class="swal2-x-mark-line-right"></span>
                            </span>
                        </div>
                    </div>
                    <div class="zms-swal2" v-if="this.alertLevel==='warning'">
                        <div class="swal2-icon swal2-warning swal2-icon-show" style="display: flex;">
                            <div class="swal2-icon-content">!</div>
                        </div>
                    </div>
                    <div class="zms-swal2" v-if="this.alertLevel==='info'">
                        <div class="swal2-icon swal2-info swal2-icon-show" style="display: flex;">
                            <div class="swal2-icon-content">i</div>
                        </div>
                    </div>
                    <!--图标结束-->
                    {{zmsAlertBody}}
                </span>
                <span class="" :class="txNightClass" v-else>
                    <slot name="body"></slot>
                </span>
                <br/><br/>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-if="!alertCustomizeToolbox&&!alertOnlyConfirm"  class="zms-fullwidth"  light color="error" @click="clickCancel">
                    <v-icon>mdi-arrow-left</v-icon>{{$t('common.cancel')}}
                </v-btn>
                <v-btn v-if="!alertCustomizeToolbox"  class="zms-fullwidth"  light color="success" @click="clickConfirm">
                    <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                </v-btn>
                <slot name="toolbar" v-if="alertCustomizeToolbox"></slot>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    name:'AlertMessagebox',
    created(){
        this.zmsAlertBody = this.alertBody
    },
    methods:{
        clickConfirm(){
            this.zmsShowAlert=false;
            this.$emit('alertConfirm');
        },
        clickCancel(){
            this.zmsShowAlert=false;
            this.$emit('alertCancel');
        },
        showAlert(){
            this.zmsShowAlert=true;
            console.log('exec');
        },
        updateBody(x){
            this.zmsAlertBody=x
        }
    },
    props:{
        alertTitle:String,
        alertBody:String,
        alertLevel:String,
        alertModel:Object,
        alertMode:{
            type:String,
            default:()=>"traditional"
        },
        alertIcon:{
            type:String,
            default:()=>"mdi-alert"
        },
        alertCustomizeToolbox:{
            type:Boolean,
            default:()=>false
        },
        alertWidth:{
            type:String,
            default:()=>"600"
        },
        alertOnlyConfirm:{
            type:Boolean,
            default:()=>false
        }
    },
    data(){
        return{
            zmsShowAlert:false,
            zmsAlertBody:'',
        }
    },
    computed:{
        headBannerClass(){
            return{
                'red':this.alertLevel==='error',
                'orange':this.alertLevel==='warning',
                'blue':this.alertLevel==='info',
                'green':this.alertLevel==='success'
            }
        },
        nmNightClass(){
            return{
                'zms-background-nm-dark':this.$vuetify.theme.dark,
                
            }
        },
        txNightClass(){
            return{
                'zms-text-dark':this.$vuetify.theme.dark,
            }
        },
        swalNightClass(){
            return{
                'zms-swal-correct-light':!this.$vuetify.theme.dark,
                'zms-swal-correct-dark':this.$vuetify.theme.dark,
            }
        },
        swalNightStyle(){
            if(!this.$vuetify.theme.dark){
                return{
                    'background-color':'rgb(255,255,255)'
                }
            }
            else{
                return{
                    'background-color':'rgb(30,30,30)'
                }
            }
        }
    },
}
</script>
<style scoped>
    .zms-swal-correct-dark{
        background-color: #1E1E1E00;
    }
    .zms-swal-correct-light{
        background-color: #ffffff;
    }
</style>