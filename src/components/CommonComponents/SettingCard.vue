<template>
    <div class="zms-setting-card">
        <!--清除缓存提示-->
        <alert-messagebox
        :alertBody="$t('setting2.clearDataMsg')"
        :alertTitle="$t('setting2.clearDataMsgTitle')"
        :alertLevel="`warning`"
        ref="clr_ls_msgbox"
        @alertConfirm="clearLocalStorage" />

        <v-container>
            <v-row>
                 <v-subheader>{{$t('settings.modelSetting')}}</v-subheader>
            </v-row>
            <v-row>
                <v-switch v-model="l2dStat" inset :label="$t('settings.useL2d')" @click="setL2DStat"></v-switch>
            </v-row>
            <v-row>
                <v-subheader>{{$t('settings.langSetting')}}</v-subheader>
            </v-row>
            <v-row>
                <v-select
                    :items="this.$store.state.langOpts"
                    item-text="sw"
                    item-value="cd"
                    v-model="langRet"
                    filled
                    @change="langChange"
                    return-object
                ></v-select>
            </v-row>
            <v-row>
                 <v-subheader>{{$t('setting2.privacySetting')}}</v-subheader>
            </v-row>
            <v-row>
                <v-col>
                    {{$t('setting2.lsClearDescription')}}
                </v-col>
                <v-col>
                    <v-btn block  class=" zms-strip-bg-slim" v-bind="attrs" v-on="on" color="error" @click="calloutClearLsMsg">
                        <v-icon>mdi-delete</v-icon>{{$t('setting2.clearData')}}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>

<script>
import AlertMessagebox from './AlertMessagebox.vue';

export default {
    components: {AlertMessagebox  },
    name: 'SettingCard',
    props:{
        drawer:Boolean,
    
    },
    methods:{
        setL2DStat(){
            this.$store.state.bUseL2D=!this.$store.state.bUseL2D;
            this.getL2DStat();
        },
        getL2DStat(){
            this.l2dStat=this.$store.state.bUseL2D;
            return this.$store.state.bUseL2D;
        },
        langChange(){
            this.$i18n.locale=this.langRet.cd
            console.log('Lang Now is:'+this.$i18n.locale)
            localStorage.setItem('zmsAppearance.lang',this.langRet.id)
        },
        calloutClearLsMsg(){
            this.$refs.clr_ls_msgbox.showAlert()
        },
        clearLocalStorage(){
            localStorage.clear();
            this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('setting2.lsCleared')})
        }
    },created(){
        this.getL2DStat();
        this.langRet=this.$store.state.langOpts[this.$store.state.defaultLang];
    },data(){
        return{
            l2dSwitch:false,
            l2dStat:false,
            langRet:null
        }
    },computed:{
        
    }
};
</script>

<style scoped lang="scss">
    .zms-setting-card{
        margin-top:10px;
        display:block;
        //color:#222222;
        font-size:16px;
    }
    
</style>