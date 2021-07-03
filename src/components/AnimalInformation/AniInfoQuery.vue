<template>
    <div class="zms-animalinfo">
        <div class="zms-animalinfo-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="动物编号" placeholder="请输入动物编号" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="动物种类" placeholder="请输入动物种类" prepend-icon="mdi-owl"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="动物姓名" placeholder="请输入动物姓名" prepend-icon="mdi-paw"  />
                        </v-col>     
                    </v-row>
                </v-container>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn v-ripple block class="zms-width"  color="error" >
                                <v-icon>mdi-filter-minus</v-icon>&nbsp;&nbsp;删除过滤条件
                            </v-btn>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-btn v-ripple block class="zms-width"  color="primary" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;查找负责项目
                            </v-btn>
                        </v-col>
                        
                        
                        <v-col cols="12" sm="6" md="3">
                            <v-btn v-ripple block class="zms-width"  color="primary" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                               <v-dialog
                                  v-model="dialog"
                                  persistent
                                  max-width="600px"
                                >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="#00BED8"
                                v-ripple block class="zms-width" dark
                                v-bind="attrs"
                                v-on="on"
                                >
                                新增档案
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                <span class="text-h5">Animal Profile</span>
                                </v-card-title>
                                <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                            label="ID"
                                            >
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                            label="物种"
                                            hint="input the species of the animal"
                                            persistent-hint
                                            >
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                            label="姓名*"
                                            hint="input the species of the animal"
                                            persistent-hint
                                            required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                            label="性别*"
                                            hint="input the species of the animal"
                                            persistent-hint
                                            required
                                            ></v-text-field>
                                        </v-col>
                                         <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                            label="年龄*"
                                            hint="input the species of the animal"
                                            persistent-hint
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field v-model="date" label="患病日期"  readonly v-bind="attrs" v-on="on">
                                                
                                                    </v-text-field>
                                                </template>
                                                 <v-date-picker v-model="date" ></v-date-picker>

                                            </v-menu>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                            label="身高/体长*"
                                            hint="input the species of the animal"
                                            persistent-hint
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field
                                            label="体重*"
                                            hint="input the species of the animal"
                                            persistent-hint
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                           <v-select
                                        :items="['良好', '生病', '虚弱']"
                                        label="健康状态*"
                                        required
                                        ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                           <v-select
                                        :items="['无', '怀孕中', '已育']"
                                        label="繁殖情况*"
                                        required
                                        ></v-select>
                                        </v-col>
                                    </v-row>
           
                                </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="dialog = false"
                                    >
                                        Close
                                    </v-btn>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="dialog = false"
                                    >
                                        Save
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-dialog>
                        </v-col>
                    </v-row>
                </v-container> 
            </div>

        </div>

        <v-divider/>
        <div class="zms-animalinfo-query-result">
            <v-icon color="primary">mdi-note-search</v-icon> 
            <span class="zms-animalinfo-query-title">查询结果</span>
            <div class="zms-animalinfo-query-result-table">
                <v-data-table
                    :headers="headers"
                    :items="queryData"
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
        </div>
    </div>
</template>

<script>
import PopUp from './PopUp.vue'
export default {
    name: 'AnicareQuery',
    components:PopUp,
    created(){
    },
    data:()=>{
        
        return{
        headers:[
            {text: '编号', value: 'id'},
            {text: '物种', value: 'species'},
            {text: '姓名', value: 'name'},
            {text: '性别', value: 'gender'},
            {text: '出生日期', value: 'date_of_birth'},
            {text: '年龄', value: 'age'},
            {text: '身高/体长', value: 'height'},
            {text: '体重', value: 'weight'},
            {text: '健康状态', value: 'health_condition'},
            {text: '照片', value: 'photo'},
            {text: '繁殖情况', value: 'breed_condition'}
        ],
        pageCount:0,
        page:1,
        queryData:[
            {id:'1959001',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1956001',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1958001',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1959011',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1956011',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1958011',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1959021',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1956021',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1958021',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1959031',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1956033',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
            {id:'1958031',disease_name:'xxx',veterinary_name:'李四',drug:'浓硫酸',treatment_progress:'无',current_state:'治愈',date_ill:'2020-01-01',date_cure:'2028-02-02'},
        ],editedIndex: -1,
        editedItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        dialog:false
        }
      
       
        
    }
  
}
</script>
<style scoped lang="scss">
    .zms-animalinfo-query-pagination{
        margin-top:10px;
        transition: all .5s;
    }
    .zms-animalinfo-query-result{
        margin-top:20px;
    }
    .zms-animalinfo{
        padding-left:50px;
        padding-right:50px;
        padding-top:20px;
        padding-bottom:20px;
        background-color: #fafafa;
    }
    .zms-animalinfo-query-title{
        font-weight: bold;
        letter-spacing: 1px;
        position:relative;
        top:3px;
    }
    .zms-animalinfo-query-result-table{
        margin-top:10px;
    }
</style>