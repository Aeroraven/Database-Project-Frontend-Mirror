<template>
    <div class="zms-anicare" :class="nmNightClass">
        <!-- 物品选择器 -->
        <item-selector ref='itemselector' :zmsSelectorMode="2" @itemSelectorSelect="itemSelectorResponse(arguments)"></item-selector>
        <v-icon color="primary">mdi-plus</v-icon> <span class="zms-query-title" >{{$t('ware2.newWareOp')}}</span>
            
        <div class="zms-query-filter">
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field 
                            label="物品编号" 
                            v-model="itemId"
                            placeholder="请输入编号" 
                            prepend-icon="mdi-music-accidental-sharp"
                            append-icon="mdi-magnify"
                            @click:append="showItemSelectBox"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field v-model="curDate" :label="$t('ware2.createDate')" readonly 
                            :placeholder="$t('common.pleaseInput')+$t('ware2.createDate')" prepend-icon="mdi-form-textbox"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="负责人" placeholder="请输入负责人ID" prepend-icon="mdi-account-key"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="数量" placeholder="请输入负责人ID" prepend-icon="mdi-numeric"  />
                        </v-col>
                    </v-row>
                </v-container>
                <v-textarea
                    outlined
                    counter
                    prepend-inner-icon="mdi-information" 
                    name="input-7-4"
                    label="备注"
                    placeholder="填写备注"
                >
                </v-textarea>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-btn v-ripple block class="zms-width"  color="primary" >
                                <v-icon>mdi-arrow-collapse-up</v-icon>&nbsp;&nbsp;提交
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>
import ItemSelector from '../CommonComponents/ItemSelector.vue'
export default {
    name: 'WarehouseFlow',
    components:{
        ItemSelector
    },
    created(){
        let x=new Date()
        this.curDate=x.getFullYear()+'-'+(x.getMonth()+1)+'-'+x.getDay()

    },data:()=>{
        return{
            curDate:'1970-01-01',
            itemId:null
        }
    }, computed:{
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
    },methods:{
        showItemSelectBox(){
            this.$refs.itemselector.show()
        },
        itemSelectorResponse(x){
            this.itemId=x[0]
        }
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