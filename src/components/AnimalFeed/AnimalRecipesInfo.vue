<template>
   <div class="zms-animal-recipe">
     <pending-progress-card :zmsPendingList="pendingList" :zmsShow="pendingShow"/>
        
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
        ref="commit_donex" />

     <alert-messagebox 
        alertTitle="删除食谱信息"
        :alertBody="`是否删除编号为`+delId+`的食谱信息?`"
        alertLevel="warning"
        :alertModel="{}"
        ref='deletealert'
        @alertConfirm="DeleteRecipeConfirm();"/>

        <alert-messagebox 
        alertTitle="修改食谱信息"
        :alertBody="`是否保存对编号为`+updateId+`的食谱的修改?`"
        alertLevel="warning"
        :alertModel="{}"
        ref='updatealert'
        @alertConfirm="insertRecipeConfirm"/>
        
        <!--弹出的待确认窗口相同-->

        <alert-messagebox 
        alertTitle="保存新建食谱信息"
        :alertBody="`是否创建新的食谱信息?`"
        alertLevel="warning"
        :alertModel="{}"
        ref='insertalert2'
        @alertConfirm="insertRecipeConfirm"/>
        <!--insertInfoAfter-->

        <alert-messagebox
        :alertTitle="$t('common3.transactionDoneTitle')"
        :alertBody="`修改成功`"
        :alertLevel="`success`"
        :alertOnlyConfirm="true"
        ref="commit_done" />
        
        <alert-messagebox
        :alertTitle="$t('common3.transactionDoneTitle')"
        :alertBody="`新建信息保存成功`"
        :alertLevel="`success`"
        :alertOnlyConfirm="true"
        ref="commit_done" />

        <v-container fluid>
         <!--搜索栏-->
         <v-row class="toprow">
           <v-col cols="12" sm="8">
            <div v-on:keyup.enter="search">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                   <v-text-field
                    solo
                    hide-details
                    label="请输入食谱的对应物种"
                    append-icon="mdi-magnify"
                    @click:append=" showSearchTips"
                    v-model="text_search"
                    v-on="on"
                    ref="search"
                  ></v-text-field>

                </template>
                </v-menu>
            </div>
           </v-col>
          <v-col cols="12" sm="4" >
              <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="500px"
              >
                  <template v-slot:activator="{ on, attrs }">
                      <v-btn
                      color="primary"
                      v-ripple block class="zms-width" dark
                        height="50px"
                      align-center
                      @click="createItem({p:on,x:attrs})"
                      >
                      新增食谱
                      </v-btn>
                  </template>
                  <!--dialog样式-->
              <v-card>
                 
                  <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-form
                    ref="form">
                      <v-container>
                          <v-row dense>    
                             <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.id"
                                  label="食谱编号*"
                                  :rules="rules"
                                    hide-details="auto"
                                    required
                                  >
                                  </v-text-field>
                              </v-col>   
                              <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.species"
                                  label="物种*"
                                  :rules="rules"
                                    hide-details="auto"
                                    required
                                  >
                                  </v-text-field>
                              </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.foodList1"
                                  label="食材1*"
                                  :rules="rules"
                                    hide-details="auto"
                                    required
                                  ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.foodWeight1"
                                  label="重量1*"
                                  :rules="rules"
                                    hide-details="auto"
                                    required
                                  ></v-text-field>
                              </v-col>
                            <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.foodList2"
                                  label="食材2"
                                  ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.foodWeight2"
                                  label="重量2"
                                  ></v-text-field>
                              </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.foodList3"
                                  label="食材3"
                                  ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.foodWeight3"
                                  label="重量3"
                                  ></v-text-field>
                              </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.foodList4"
                                  label="食材4"
                                  ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6">
                                  <v-text-field
                                  v-model="editedItem.foodWeight4"
                                  label="重量4"
                                  ></v-text-field>
                              </v-col>
                          </v-row>
                        <v-row>
                        <v-col cols="6">
                            <v-btn
                                class="zms-btn-save"
                                :disabled="!valid"
                                color="blue darken-1"
                                text
                                @click="validate(editedItem.id)"
                                >
                                保存
                            </v-btn>
                        </v-col>
                        <v-col cols="6">
                        <v-btn   class="zms-btn-clear"
                            color="blue darken-1"
                            right
                            text
                            @click="reset;dialog = false"
                            >
                            取消
                        </v-btn>
                        </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  
              </v-card>
              
              </v-dialog>
              
            </v-col>
         </v-row>
        <v-row>
            <v-col 
            v-for="(recipe,i) in recipes"
            :key="i"
            :cols=12
            :sm=6
            :page.sync="page"
            :recipes-per-page="10"
            hide-default-footer
            @page-count="pageCount = $event"
            >
           <v-card class="new-recipe" >
              <v-row>
                  <v-col cols="3" class="block-T">
                      <span height="50%">
                        <br>
                          <h4> {{recipe.species}}食谱
                          </h4>
                   
                          <h4>{{recipe.id}}
                          </h4>
                      </span>
                  </v-col>
                  <v-col cols="15" class="right-block" >
                   
                      
                      <v-row no-gutters v-if="recipe.foodList1!=null">
                        <v-col cols="6" >{{recipe.foodList1}}</v-col><v-col cols="6"  >{{recipe.foodWeight1}}kg</v-col>
                      </v-row>
                      <v-row no-gutters v-if="recipe.foodList2!=null">
                        <v-col cols="6"  >{{recipe.foodList2}}</v-col><v-col cols="6"  >{{recipe.foodWeight2}}kg</v-col>
                      </v-row>
                      <v-row  no-gutters v-if="recipe.foodList2==null">
                        <v-col cols="6"  >没有食材2</v-col>
                      </v-row>
                      <v-row  no-gutters v-if="recipe.foodList3!=null">
                        <v-col cols="6"  >{{recipe.foodList3}}</v-col><v-col cols="6"  >{{recipe.foodWeight3}}kg</v-col>
                      </v-row>
                      <v-row  no-gutters v-if="recipe.foodList3==null">
                        <v-col cols="6"  >没有食材3</v-col>
                      </v-row>
                      <v-row no-gutters v-if="recipe.foodList4!=null">
                        <v-col cols="6"  >{{recipe.foodList4}}</v-col><v-col cols="6" >{{recipe.foodWeight4}}kg</v-col>
                      </v-row>
                      <v-row  no-gutters v-if="recipe.foodList4==null">
                        <v-col cols="6"  >没有食材4</v-col>
                      </v-row>
                    
                    <v-divider margin-left="-5" width="80%"></v-divider>
                    <v-row dense>
                        <v-col cols="6">
                            <v-btn icon >
                                <v-icon
                                small
                                class="mr-2"
                                @click="editItem2(recipe)">
                                mdi-pencil</v-icon>
                            </v-btn>
                        </v-col> 
                        <v-col cols="6"> 
                            <v-btn icon>
                                <v-icon
                                small
                                class="mr-2"
                                @click="deleteItem2(recipe.id)">
                                mdi-delete</v-icon>
                            </v-btn>
                        </v-col>  
                    </v-row>
                  </v-col>
              </v-row>
          </v-card>
            </v-col>
        </v-row>
    </v-container>
   </div> 
</template>
<script>
  import {getRecipe,createRecipe,updateRecipe, deleteRecipe} from '../../apis/recipe'
import PendingProgressCard from '../CommonComponents/PendingProgressCard.vue'
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
  export default {
    name:'AnimalRecipeInfo',
    components:{
       PendingProgressCard,
       AlertMessagebox,
    },
     created(){
       this.pendingShow=true
        getRecipe({
          recipe_id:'',
          'species':''
        }).then(response => {
            this.recipes = response.data
            this.pendingShow=false
        }).catch( err => {
              this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
              this.$refs.error_done.showAlert();
              this.pendingShow=false
          });
    },
     computed: {
      formTitle () {
        return this.editedIndex === -1 ? '新增食谱' : '修改食谱'
      },
    },
     watch: {
    text: 'inputHandle',
    dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
  },
    methods:{
      searchrecipes(){

      },
       createItem(item){
            this.dialog=true
            this.isToCreateItem=true
            this.editItem(item)
        },
     /* search () {
        this.$refs.search.blur()
        // this.$router.push()
        this.getRecipe().then(response=>{
                        this.recipes = response.data
                        this.show=false
                    })
      },
      */
       editItem2(item){
          console.log(item)
            this.updateId=item.id
            this.isToCreateItem=false
            this.editItem(item)
        },
    
      editItem (item) {
            this.insertId = item.id
            this.editedIndex = this.recipes.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            this.editedIndex = this.recipes.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm () {
            this.recipes.splice(this.editedIndex, 1)
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
      
      showSearchTips(){
        this.pendingShow=true
        //this.showSearchSuggestion=!this.showSearchSuggestion
        setTimeout(
                ()=>{
                     getRecipe(
                       {
                         recipe_id:'',
                         species:this.text_search
                       }
                     ).then(response=>{
                        this.recipes = response.data
                        this.show=false
                        this.pendingShow=false
                        this.$store.dispatch('showToastNotify',{type:'success',info:this.$t('common2.transactionDone')})
            
                    }).catch( err => {
                        this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                        this.$refs.error_done.showAlert();
                        this.pendingShow=false
                    });
                },500
            )
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.recipes[this.editedIndex], this.editedItem)
        } else {
          this.recipes.push(this.editedItem)
        }
        this.close()
      },
      validate (id) {
        console.log("aaaaa")
            console.log(this.$refs.form.validate())
            if(this.$refs.form.validate()===true){
                this.insertrecipe(id)//新增或修改的对象的ID
                
            }
        },
      insertrecipe(x){
            console.log(this.isToCreateItem)
            //this.updateId=x;
            if(this.isToCreateItem){
                this.$refs.insertalert2.showAlert()//新建
            }else{
                this.$refs.updatealert.updateBody(`是否保存对编号为`+this.updateId+`的食谱的修改?`)
                this.$refs.updatealert.showAlert()//修改
            }
        },
        insertRecipeConfirm(){
            //this.editItem
            
            if(this.isToCreateItem){
              console.log("11111")
              this.pendingShow=true
                createRecipe(
                  {
                    id:this.editedItem.id,
                    species:this.editedItem.species,
                    foodList1:this.editedItem.foodList1,
                    foodWeight1:parseInt(this.editedItem.foodWeight1),
                    foodList2:this.editedItem.foodList2,
                    foodWeight2:parseInt(this.editedItem.foodWeight2),
                    foodList3:this.editedItem.foodList3,
                    foodWeight3:parseInt(this.editedItem.foodWeight3),
                    foodList4:this.editedItem.foodList4,
                    foodWeight4:parseInt(this.editedItem.foodWeight4)
                  }
                ).then(reponse=>{
                console.log("22222")
                    this.dialog=false
                    this.$refs.form.reset()
                    this.$refs.commit_donex.showAlert()
                    this.pendingShow=false
                    this.showSearchTips()
                }).catch( err => {
                    this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                    this.$refs.error_done.showAlert();
                    this.pendingShow=false
                });
            }else{
              this.pendingShow=true
              console.log({
                    id:this.editedItem.id,
                    species:this.editedItem.species,
                    foodList1:this.editedItem.foodList1,
                    foodWeight1:parseInt(this.editedItem.foodWeight1),
                    foodList2:this.editedItem.foodList2,
                    foodWeight2:parseInt(this.editedItem.foodWeight2),
                    foodList3:this.editedItem.foodList3,
                    foodWeight3:parseInt(this.editedItem.foodWeight3),
                    foodList4:this.editedItem.foodList4,
                    foodWeight4:parseInt(this.editedItem.foodWeight4)
                  })
                updateRecipe(
                  {
                    id:this.editedItem.id,
                    species:this.editedItem.species,
                    foodList1:this.editedItem.foodList1,
                    foodWeight1:parseInt(this.editedItem.foodWeight1),
                    foodList2:this.editedItem.foodList2,
                    foodWeight2:parseInt(this.editedItem.foodWeight2),
                    foodList3:this.editedItem.foodList3,
                    foodWeight3:parseInt(this.editedItem.foodWeight3),
                    foodList4:this.editedItem.foodList4,
                    foodWeight4:parseInt(this.editedItem.foodWeight4)
                    
                  },this.editedItem.id
                ).then(reponse=>{//修改接口，暂无数据
                console.log("yyyy")
                    this.dialog=false
                    this.$refs.form.reset()
                    this.$refs.commit_done.showAlert()
                    this.pendingShow=false
                }).catch( err => {
                    this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                    this.$refs.error_done.showAlert();
                    this.pendingShow=false
                });
            } 
        },
         deleteItem2(x){
            console.log("aaaaa")
            console.log(x)
            this.delId=x
            console.log(this.$refs.deletealert)
            this.$refs.deletealert.updateBody(`是否删除编号为`+this.delId+`的食谱信息?`)
            this.$refs.deletealert.showAlert()
        },
        DeleteRecipeConfirm(){
            this.pendingShow=true
            deleteRecipe(
              {},this.delId
            ).then(response=>{//应该传ID
                this.$refs.commit_done.showAlert()
                this.pendingShow=false
            }).catch( err => {
                this.$refs.error_done.updateBody(this.$t('common3.transactionFail')+err)
                this.$refs.error_done.showAlert();
                this.pendingShow=false
            });
        },
    },


    data: () => ({
      valid: true,
      updateId: 0,
      isToCreateItem:false,//真为新建，假为修改
      dialogDelete:false,
      rules: [
        value => !!value || '不能为空',
      ],
      text: '',
      dialog: false,
      showSelect: false,
      text_search:'',
       pageCount:0,
        page:1,
      recipes: [
    ],
      pendingList:[],
      pendingShow:false,
      showSearchSuggestion:false,
      editedIndex: -1,
        editedItem: {
            id:'',
            species: '',
            foodList1: '',
            foodWeight1: '',
            foodList2: '',
            weight2: '',
            foodList3: '',
            weight3: '',
            foodList4: '',
            weight4: '',
         
          },
        defaultItem: {
            id:'', 
            species: '',
            foodList1: '',
            foodWeight1: '',
            foodList2: '',
            foodWeight2: '',
            foodList3: '',
            foodWeight3: '',
            foodList4: '',
            foodWeight4: '',
           
        },
    }),
  }
</script>

<style scoped lang="scss">
  .new-recipe{
    border-radius: 10px;
    margin-top: 20px;
  }
  .spanLine{
    direction:"vertical";
    z-index: 10000;
    color: #69585e;
  }
  .block-T{
    color: #fff;
    text-align: center;
    z-index: 100;
    margin-left: 10px;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    background: #1976D2;
  }
  .small-cols{
    margin-top:0%;
    margin-bottom: 0%;
    padding: 5px 5px 1px 1px;
  
  }
   .small-cols-left{
    margin-top:0%;
    margin-bottom: 0%;
    padding: 5px 5px 1px 1px;
  
  }
</style>
