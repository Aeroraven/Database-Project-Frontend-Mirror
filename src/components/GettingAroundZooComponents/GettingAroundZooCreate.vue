<template>
    <div class="zms-anicare">
        <div class="zms-query-filter">
            
            <v-icon color="primary">mdi-filter-plus</v-icon> <span class="zms-query-title">演出信息上报</span>
            
            <div>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="xxx动物编号" placeholder="请输入动物编号" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="adad疾病类型" placeholder="请输入疾病类型" prepend-icon="mdi-heart-pulse"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="兽医名称" placeholder="请输入兽医名称" prepend-icon="mdi-doctor"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="date" label="患病日期" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="date" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                          <v-col cols="12" sm="6" md="3">
                            <v-text-field label="演出编号" placeholder="请输入演出编号" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="演出动物编号" placeholder="请输入演出动物编号" prepend-icon="el-icon-view"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="负责人名称" placeholder="请输入负责人名称" prepend-icon="el-icon-s-custom"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="演出地点" placeholder="请输入演出地点" prepend-icon="el-icon-position"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="date" label="演出日期" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on">
                                    </v-text-field>
                                </template>
                                <v-date-picker color="primary" width="400" v-model="date" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-container>
                <v-textarea
                    outlined
                    counter
                    prepend-inner-icon="mdi-information" 
                    name="input-7-4"
                    label="情况描述"
                    placeholder="填写情况描述"
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
                                <v-icon>mdi-arrow-collapse-up</v-icon>&nbsp;&nbsp;上报
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AniCareCreate',
    created(){
    },data:()=>{
        return{
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