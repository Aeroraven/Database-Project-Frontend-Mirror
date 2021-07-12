<template>
  <div class="zms-appbar-ext">
      <span class="zms-appbar-acc">张三 (1930000)</span>
      
      <v-btn style="margin-right:20px" color="primary" text >
        <v-icon color="white" class="float-right">mdi-exit-to-app</v-icon>
      </v-btn>
      <v-btn style="margin-right:20px" color="primary" text>
        <v-icon color="white" class="float-right" @click="switchNightMode" >mdi-weather-night</v-icon>
      </v-btn>
  </div>
</template>

<script>

export default {
    
    name: 'AppbarExt',
    methods:{
      switchNightMode(){
        this.$vuetify.theme.dark=!this.$vuetify.theme.dark
      }
    }
};
</script>

<style scoped lang="scss">
    .zms-appbar-acc{
      font-weight: bold;
      color:#ffffff;
      margin-right:20px;
    }
</style>