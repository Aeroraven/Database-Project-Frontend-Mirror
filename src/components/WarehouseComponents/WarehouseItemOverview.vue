<template>
    <div class="zms-anicare">
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="物品编号" placeholder="请输入编号" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="物品类型" placeholder="请输入物品类型" prepend-icon="mdi-tag"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="物品名称" placeholder="请输入物品名称" prepend-icon="mdi-form-textbox"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="负责人" placeholder="请输入负责人ID" prepend-icon="mdi-account-key"  />
                        </v-col>
                        
                    </v-row>
                </v-container>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn v-ripple block class="zms-width"  color="error" >
                                <v-icon>mdi-filter-minus</v-icon>&nbsp;&nbsp;删除过滤条件
                            </v-btn>
                        </v-col>

                        <v-col cols="12" sm="6" md="3">
                            <v-btn v-ripple block class="zms-width"  color="primary" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;查找负责物品
                            </v-btn>
                        </v-col>
                        
                        
                        <v-col cols="12" sm="6" md="3">
                            <v-btn v-ripple block class="zms-width"  color="primary" >
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;按条件查找
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
                
            </div>
        </div>
        <v-divider/>
        <div class="zms-query-result">
            <v-icon color="primary">mdi-note-search</v-icon> <span class="zms-query-title">查询结果</span>
            <div class="zms-query-result-table">
                <v-data-table
                    :headers="headers"
                    :items="queryData"
                    :page.sync="page"
                    :items-per-page="5"
                    hide-default-footer
                    @page-count="pageCount = $event"
                    class="elevation-1"
                >
                <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title>查询结果</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                        
                        <v-card>
                            <v-card-title>
                            <span class="headline">5</span>
                            </v-card-title>

                            <v-card-text>
                            <v-container>
                                <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['item_id']" label="Dessert name"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['type']" label="Calories"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['name']" label="Fat (g)"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['quality_guarantee']" label="Carbs (g)"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['price']" label="Protein (g)"></v-text-field>
                                </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="console.log(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small class="mr-2">
                            mdi-delete
                        </v-icon>
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

export default {
    name: 'WarehouseItemOverview',
    created(){
    },data:()=>{
        return{
        headers:[
            {text: '编号', value: 'item_id'},
            {text: '类型', value: 'type'},
            {text: '名称', value: 'name'},
            {text: '保质期', value: 'quality_guarantee'},
            {text: '数量', value: 'cnt'},
            {text: '单价', value: 'price'},
            //{text: '目标', value: 'target'},
            {text: '渠道', value: 'channel'},
            //{text: '储存条件', value: 'cond'}, //数据表字段名错误
            //{text: '使用方法', value: 'usage_method'},
            {text: '负责人ID', value: 'staff_id'},
            //{text: '备注', value: 'remark'},
            { text: '操作', value: 'actions', sortable: false }
            
        ],
        pageCount:0,
        page:1,
        queryData:[
            {item_id:'1956100',type:'饲料',name:'饲料',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12'},
            {item_id:'1956101',type:'饲料',name:'饲料',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12'},
            {item_id:'1956102',type:'饲料',name:'饲料',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12'},
            {item_id:'1956103',type:'饲料',name:'饲料',quality_guarantee:'2049-10-10',channel:'黄渡镇',staff_id:'1930101',cnt:'12'},
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
        }}
        
    }
  
}
</script>
<style scoped lang="scss">
    .zms-query-pagination{
        margin-top:10px;
        transition: all .5s;
    }
    .zms-query-result{
        margin-top:20px;
    }
    .zms-anicare{
        padding-left:50px;
        padding-right:50px;
        padding-top:20px;
        padding-bottom:20px;
        background-color: #fafafa;
    }
    .zms-query-title{
        font-weight: bold;
        letter-spacing: 1px;
        position:relative;
        top:3px;
    }
    .zms-query-result-table{
        margin-top:10px;
    }
</style>