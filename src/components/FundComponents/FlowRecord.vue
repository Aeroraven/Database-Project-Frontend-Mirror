<template>
    <div class="zms-anicare" :class="nmNightClass">
        <div class="zms-query-filter">
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">查询条件</span>
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="流水编号" placeholder="请输入流水编号" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="交易名称" placeholder="请输入疾病类型" prepend-icon="mdi-form-textbox"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="交易类型" placeholder="请输入交易类型" prepend-icon="mdi-tag"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="date" label="交易日期" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="date" @input="menu2 = false"></v-date-picker>
                            </v-menu>
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
                                <v-icon>mdi-filter</v-icon>&nbsp;&nbsp;查找负责项目
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
                    <v-toolbar flat >
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
                                    <v-text-field v-model="editedItem['id']" label="Dessert name"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['disease_name']" label="Calories"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['veterinary_name']" label="Fat (g)"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['drug']" label="Carbs (g)"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem['treatment_progress']" label="Protein (g)"></v-text-field>
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
    name: 'FlowRecord',
    created(){
    },computed:{
        cardNightClass(){
            return{
                'zms-cardcolor-light':!this.$vuetify.theme.dark,
                'zms-cardcolor-dark':this.$vuetify.theme.dark,
                
            }
        },
        nmNightClass(){
            return{
                'zms-background-nm-dark':this.$vuetify.theme.dark,
                
            }
        },
    },data:()=>{
        return{
        headers:[
            {text: '流水号', value: 'fund_acc_id'},
            {text: '名称', value: 'name'},
            {text: '时间', value: 'transaction_time'},
            {text: '类型', value: 'type'},
            {text: '金额', value: 'amount'},
            {text: '账户', value: 'bank_acc_id'},
            {text: '处理人', value: 'staff_id'},
            { text: '操作', value: 'actions', sortable: false }
            
        ],
        pageCount:0,
        page:1,
        queryData:[
            {fund_acc_id:'192ACFB7',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFB8',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFB9',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFBA',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFBB',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'},
            {fund_acc_id:'192ACFBC',name:'测试',transaction_time:'1970-01-01',type:'A',amount:'112233.00',bank_acc_id:'#1',staff_id:'9A7C'}
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