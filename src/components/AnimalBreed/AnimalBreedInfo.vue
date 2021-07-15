<template>
    <div class="zms-animalbreedinfo">
        <alert-messagebox
        :alertTitle="$t('common3.transactionFailTitle')"
        :alertBody="$t('common3.transactionFail')+errorInfo"
        :alertLevel="`error`"
        :alertOnlyConfirm="true"
        ref="error_done" />
    <alert-messagebox
        :alertTitle="$t('common3.transactionDoneTitle')"
        :alertBody="$t('common3.transactionDone')"
        :alertLevel="`success`"
        :alertOnlyConfirm="true"
        ref="commit_done" />

      <div class="breed-info-filter">
    <pending-progress-card :zmsShow="zmsShowLoadingBar"/>
      </div>
      <v-container>
                         <v-container>
                    <v-row>    
                        <v-col cols="12" sm="6" >
                            <span class="zms-breed-info-title">生产信息</span>
                        </v-col>
                        <v-col cols="12" sm="6" >
                            <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                            :hint="$t('animalbreed.chooseByMagnify')"
                            placeholder="请输入搜索关键词" 
                            prepend-icon="mdi-music-accidental-sharp" 
                            >
                            </v-text-field>
                        </v-col>
                        
                    </v-row>
                </v-container>
        <div class="birth-table">
            <v-data-table :items="birthinfo"
                          :headers="headers"
                          :page.sync="page"
                          :items-per-page="5"
                          :search="search"
                           hide-default-footer
                          @page-count="pageCount = $event"
                           class="elevation-1"
                          >
           
            </v-data-table>
        </div>
        <div class="zms-query-pagination">
             <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </v-container>
    </div>
</template>
<script>
import {getpregnent} from '../../apis/animalBreed'
import PendingProgressCard from '../CommonComponents/PendingProgressCard.vue'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
export default {
    name: 'AnimalBreedInfo',
     created(){
         this.initial();
    },

    components:{
        PendingProgressCard,
        AlertMessagebox
    },
    methods:{
        initial(){
            this.zmsShowLoadingBar=true
            console.log('xxxxxxx')
            getpregnent().then(response=>{
                this.birthinfo=response.data
                this.zmsShowLoadingBar=false
                this.$store.dispatch('showToastNotify',{type:'success',info:'信息获取成功'})
                for(let i=0;i<this.birthinfo.length;i++){
                    this.birthinfo[i].success=this.birthinfo[i].success?'顺利':'不顺利'
                }
            }).catch( err => {
                this.zmsShowLoadingBar=false
                this.submitStat=false;
                this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                this.$refs.error_done.showAlert();
            });
        }
    },
    data:()=>{
        return{
        search:"",
        headers:[
            {text: '动物编号', value: 'id'},
            {text: '生产时间', value: 'time'},
            {text: '成功情况', value: 'success'},
            {text: '孩子数量', value: 'childrenNum'},
      
        ],
        pageCount:0,
        zmsShowLoadingBar:false,
        page:1,
        birthinfo:[
                {id:'1959001',time:'2020-01-01',success:'是',childrenNum:'3'},
                {id:'1959001',time:'2020-11-01',success:'是',childrenNum:'3'},
                {id:'1959001',time:'2020-08-09',success:'是',childrenNum:'3'},
                {id:'1959001',time:'2020-01-88',success:'是',childrenNum:'3'},
                {id:'1959001',time:'2020-01-01',success:'是',childrenNum:'3'},
                {id:'1959001',time:'2020-01-01',success:'是',childrenNum:'3'},
                {id:'1959001',time:'2020-01-01',success:'是',childrenNum:'3'},
                {id:'1959001',time:'2020-01-01',success:'是',childrenNum:'3'},
                {id:'1959001',time:'2020-01-01',success:'是',childrenNum:'3'}
            ]
        }
    }
  
}
</script>


<style scoped lang="scss">
    .zms-animalbreedinfo{
        padding-left:60px;
        padding-right:60px;
        padding-top:20px;
        padding-bottom:20px;
        //background-color: #fafafa;
        width:90vw;

    }
   .zms-breed-info-title{
        font-size: 100%;
        font-weight: bold;
        color: #1976D2;
        letter-spacing: 1px;
        position:relative;
        top:0px;
    }
</style>