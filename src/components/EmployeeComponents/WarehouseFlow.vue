<template>
    <div class="zms-anicare" :class="nmNightClass">
        <div class="zms-query-filter">
            <div>
                <v-container>
                    <v-row>
                         <v-col cols="12" sm="6" md="3">
                            <v-text-field label="工号" placeholder="请输入员工工号" prepend-icon="mdi-music-accidental-sharp"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="姓名" placeholder="请输入员工姓名" prepend-icon="mdi-form-textbox"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="性别" placeholder="请输入员工性别" prepend-icon="mdi-account-key"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="年龄" placeholder="请输入员工年龄" prepend-icon="mdi-numeric"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="园区" placeholder="请输入员工所属园区" prepend-icon="mdi-numeric"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="职务" placeholder="请输入员工职务" prepend-icon="mdi-numeric"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="工资" placeholder="请输入员工工资" prepend-icon="mdi-numeric"  />
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field label="入职年份" placeholder="请输入职年份" prepend-icon="mdi-numeric"  />
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

export default {
    name: 'WarehouseFlow',
    created(){
    },data:()=>{
        return{
        }
    } , computed:{
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
    },
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