<template>
    <div class="zms-animalbreedinfo">
      <div class="breed-info-filter">

      </div>
      <v-container>
    
         <span class="zms-breed-info-title">生产信息</span>
                         <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="动物编号" 
                            v-model="ani_id" 
                            :hint="$t('animalbreed.chooseByMagnify')"
                            placeholder="请输入动物编号" 
                            prepend-icon="mdi-music-accidental-sharp" 
                            append-icon="mdi-magnify" />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="动物姓名" 
                             v-model="ani_id" 
                            :hint="$t('animalbreed.chooseByMagnify')"
                            placeholder="请输入动物姓名" 
                            prepend-icon="mdi-heart-pulse" 
                             append-icon="mdi-magnify"/>
                        </v-col>
                        
                    </v-row>
                </v-container>
        <div class="birth-table">
            <v-data-table :items="birthinfo"
                          :headers="headers"
                          :page.sync="page"
                          :items-per-page="5"
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

export default {
    name: 'AnimalBreedInfo',
     created(){
    },
    components:{
        
    },data:()=>{
        return{
        headers:[
            {text: '动物编号', value: 'ani_id'},
            {text: '动物姓名', value: 'ani_name'},
            {text: '生产时间', value: 'date_of_birth'},
            {text: '成功情况', value: 'success'},
            {text: '孩子数量', value: 'children_num'},
      
        ],
        pageCount:0,
        page:1,
        birthinfo:[
            {ani_id:'1959001',ani_name:'xxx',date_of_birth:'2020-01-01',success:'是',children_num:'3'},
            {ani_id:'1959001',ani_name:'xxx',date_of_birth:'2020-11-01',success:'是',children_num:'3'},
            {ani_id:'1959001',ani_name:'xxx',date_of_birth:'2020-08-09',success:'是',children_num:'3'},
            {ani_id:'1959001',ani_name:'xxx',date_of_birth:'2020-01-88',success:'是',children_num:'3'},
            {ani_id:'1959001',ani_name:'xxx',date_of_birth:'2020-01-01',success:'是',children_num:'3'},
            {ani_id:'1959001',ani_name:'xxx',date_of_birth:'2020-01-01',success:'是',children_num:'3'},
            {ani_id:'1959001',ani_name:'xxx',date_of_birth:'2020-01-01',success:'是',children_num:'3'},
            {ani_id:'1959001',ani_name:'xxx',date_of_birth:'2020-01-01',success:'是',children_num:'3'},
            {ani_id:'1959001',ani_name:'xxx',date_of_birth:'2020-01-01',success:'是',children_num:'3'}
            ]

            
        }
    }
  
}
</script>


<style scoped lang="scss">
    .zms-animalbreedinfo{
        padding-left:50px;
        padding-right:50px;
        padding-top:20px;
        padding-bottom:20px;
        background-color: #fafafa;
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