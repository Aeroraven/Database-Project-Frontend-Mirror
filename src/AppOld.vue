<template>
  <v-app>
    12345
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style scoped lang="scss">
  $body-font-family: 'PTSans','HanSans';
  .v-application {
      font-family: $body-font-family, sans-serif !important;
  }
  .zms-right{
    position: fixed;
    right:20px;
  }
  .zms-hidden{
    display: none;
  }
  .wrap{
    position: absolute;
    bottom:0px;
    top:0px;
    left:0px;
    right:0px;
    z-index: 99999999;
    overflow: hidden;
  }
  #app{
    user-select: none;
  }
  .zms-app-barx{
    font-size:21px;
  }
</style>
