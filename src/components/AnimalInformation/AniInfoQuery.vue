<template>
    <div class="zms-animalinfo">
        <div class="zms-animalinfo-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> 
            <span class="zms-query-title">查询条件</span>
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
                            <v-btn v-ripple block class="zms-width"  color="primary" @click="searchInfo">
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
        <pending-progress-card :zmsShow="show"/>
        <div class="zms-animalinfo-query-result">
            <v-icon color="primary">mdi-note-search</v-icon> 
            <span class="zms-animalinfo-query-title">查询结果</span>
            <div class="zms-animalinfo-query-result-table">
                <v-data-table
                    :headers="headers"
                    :items="queryData"
                    show-expand
                    :page.sync="page"
                    :items-per-page="10"
                    hide-default-footer
                    @page-count="pageCount = $event"
                    class="elevation-1"
                >
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                             <v-row>
                                 <v-col cols="12" md="4">
                                     放照片 {{ item.photo }}
                                 </v-col>
                                 <v-col cols="12" md="8">
                
                                     出生日期：{{item.birth_date}}<br>
                                     身高体长：{{item.body_length}}<br>
                                     繁殖情况：{{item.breed_condition}}

                                 </v-col>
                             </v-row>
                        </td>
                    </template>
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
import {getinformation} from '../../apis/animalInfo'
import PendingProgressCard from '../CommonComponents/PendingProgressCard.vue'
export default {
    components: { PendingProgressCard,PopUp },
    name: 'AnicareQuery',
    created(){
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    methods: {
        searchInfo(){
            this.show=true
            setTimeout(
                ()=>{
                    getinformation().then(response=>{
                        this.queryData = response.data
                        this.show=false
                    })
                },2000
            )
        },
        editItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm () {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  
    data:()=>{
        
        return{
        headers:[
            {text: '编号', value: 'ani_id'},
            {text: '物种', value: 'species'},
            {text: '姓名', value: 'ani_name'},
            {text: '性别', value: 'ani_gender'},
            {text: '年龄', value: 'ani_age'},
            {text: '体重', value: 'weight'},
            {text: '健康状态', value: 'physical_condition'},
            { text: 'Actions', value: 'actions', sortable: false },
    
        ],
        show:false,
        pageCount:0,
        page:1,
        queryData:[],
        editedIndex: -1,
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