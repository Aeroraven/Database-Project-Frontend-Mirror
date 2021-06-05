<template>
  <div class="zms-appbar-ext">
      <span class="zms-appbar-acc">张三 (1930000)</span>
      <v-icon color="white" class="float-right">mdi-exit-to-app</v-icon>
  </div>
</template>

<script>

export default {
    
    name: 'AppbarExt',
    
};
</script>

<style scoped lang="scss">
    .zms-appbar-acc{
      font-weight: bold;
      color:#ffffff;
      margin-right:20px;
    }
</style>