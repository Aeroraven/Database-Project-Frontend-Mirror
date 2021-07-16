<template>
  <div>
    <alert-messagebox 
        alertTitle="保存生产信息"
        :alertBody="`是否保存编号为`+insertId+`生产信息?`"
        alertLevel="warning"
        :alertModel="{}"
        ref='insertalert'
        @alertConfirm="insertInfoAfter"/>

        <alert-messagebox
        :alertTitle="$t('common3.transactionDoneTitle')"
        :alertBody="`操作成功`"
        :alertLevel="`success`"
        :alertOnlyConfirm="true"
        ref="commit_done" />
        
    <v-container
      v-for="align in alignments"
      :key="align"
      class="grey lighten-5 mb-6"
    >
      <v-row
        :align="align"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 3"
          :key="n"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="grey lighten-5">
      <v-row
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="align in alignments"
          :key="align"
          :align-self="align"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AlertMessagebox from '../CommonComponents/AlertMessagebox.vue'
import {createBreedInfo} from '../../apis/animalBreed' 
  export default {
    components:{
      AlertMessagebox
    },
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }
</script>