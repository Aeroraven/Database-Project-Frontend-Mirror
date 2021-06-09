<template>
    <div class="zms-setting-card">
        <v-container>
            <v-row>
                 {{$t('settings.modelSetting')}}
            </v-row>
            <v-row>
                <v-switch v-model="l2dStat" inset :label="$t('settings.useL2d')" @click="setL2DStat"></v-switch>
            </v-row>
            <v-row>
                {{$t('settings.langSetting')}}
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
        </v-container>
        
    </div>
</template>

<script>

export default {
    components: {  },
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