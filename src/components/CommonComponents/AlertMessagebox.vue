<template>
    <v-dialog v-model="zmsShowAlert" persistent width="600" >
        <v-card color="" :ripple="{class:null}" >
            <v-card-title class=" zms-strip-bg text-h5 text--white darken-3" :class="headBannerClass" color="warning">
                <v-icon color="white">mdi-alert</v-icon>&nbsp;
                <span class="text--white" style="color:#ffffff !important;">
                    {{alertTitle}}
                </span>
            </v-card-title>
            <v-divider/>
            <br/>
            <v-card-text>
                <span class="zms-poptip-body" :class="txNightClass">{{alertBody}}</span><br/><br/>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="error" @click="clickCancel">
                    <v-icon>mdi-arrow-left</v-icon>{{$t('common.cancel')}}
                </v-btn>
                <v-btn  class="zms-fullwidth" v-bind="attrs" v-on="on" light color="success" @click="clickConfirm">
                    <v-icon>mdi-exclamation</v-icon>{{$t('common.confirm')}}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    name:'AlertMessagebox',
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
        }
    },
    props:{
        alertTitle:String,
        alertBody:String,
        alertLevel:String,
        alertModel:Object
    },
    data(){
        return{
            zmsShowAlert:false
        }
    },
    computed:{
        headBannerClass(){
            return{
                'red':this.alertLevel==='error',
                'orange':this.alertLevel==='warning',
                'blue':this.alertLevel==='info',
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
        }
    },

}
</script>
