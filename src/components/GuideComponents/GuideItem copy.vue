<template>
  
  <v-container fluid>

    <v-row>
                 <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="error" @click="deleteItemInfo" >
                                <v-icon>mdi-filter-minus</v-icon>&nbsp;&nbsp;删除过滤条件
                            </v-btn>
                        </v-col>

                         <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col>

                        
                        <v-col cols="12" sm="6" md="3">
                            <v-btn :disabled="queryLoaderDialog===true" v-ripple block class="zms-width"  color="primary" @click="fetchItemInfo" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;查找导游信息
                            </v-btn>
                        </v-col>
                        <v-col cols="12" lg="8">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                    </v-row>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="blue darken-3"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="blue"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="blue"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row
          class="mt-2"
          align="center"
          justify="center"
        >
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
 
   
 </v-container>
</template>


<script>
 import { getguideItemInfo } from '../../apis/guide.js';

  export default {
     created(){
        if(this.$route.params.id!=undefined){
            this.fetchItemInfo();
        }
    },
    data () {
      return {
       itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
      
        itemsPerPage: 4,
        sortBy: 'name',
        keys: [
          //   'id',
          //   'tour.id',
          //   'guide.id',
          //  'mark',
          //  'price',
          //  'service_type',
          // 'Name',
          // 'Calories',
          // 'Fat',
          // 'Carbs',
          // 'Protein',
          // 'Sodium',
          // 'Calcium',
          // 'Iron',
          // '订单号',
          // '游客账号',
          //  '导游工号',
          //  '导游姓名',
          //  '评分',
          //  '费用',
          //  '服务种类',
          'id',
          'tour_id',
          'guide_id',
          'name',
          'mark',
          'price',
          'service_type'//语言
        ],
        
        items: [
  // {
  //  // name: 'Frozen Yogurt',
  //   id: 19128812,
  //   tour_id: 1212,
  //   guide_id: 32332,
  //   name: '张三',
  //   mark: 87,
  //   price: '100元',
  //   service_type: '汉语',
  // },
  
],
      }
    },
    
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },

      // getguideItemInfo(){},
     
      fetchItemInfo(){
           
            setTimeout(
                ()=>{
                    getguideItemInfo().then(response => {
                        this.items = response.data
                        
                        if(this.items.length>0){
                            this.$store.dispatch('showToastNotify',{type:'success',info:'信息查询成功'})
                        }else{
                            this.$store.dispatch('showToastNotify',{type:'error',info:'无数据'})
                        }
                        
                    })
                },2000
            )
        },

         deleteItemInfo(){
            this.searchItem['id']=null;
            this.searchItem['name']=null;
            this.searchItem['park']=null;
            this.searchItem['position']=null;
        },
        close () {
            this.dialog = false
            this.deleteDialog=false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            this.delIndex = -1
            this.delItem = Object.assign({}, this.defaultItem)
            })
        },
        editItem (item) {
            this.editedIndex = this.queryData.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem (item) {
            this.delIndex = this.queryData.indexOf(item)
            this.delItem = Object.assign({}, item)
            //this.dialog = true
            this.deleteDialog=true
        },
          deleteItemConfirm () {
             this.deleteDialog=false
        this.queryData.splice(this.delIndex, 1)
        this.closeDelete()
       
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.queryData[this.editedIndex], this.editedItem)
        } else {
          this.queryData.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>