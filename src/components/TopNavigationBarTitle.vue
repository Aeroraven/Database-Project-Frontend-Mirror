<template>
  <div class="zms-top-navigation-bar-title">
      {{getProjectName}}
  </div>
</template>

<script>
export default {
  name: 'TopNavigationBarTitle',
  computed:{
      getProjectName(){
          return this.$store.state.sProjectName;
      }
  }
}
</script>

<style scoped lang="scss">
    .zms-top-navigation-bar-title{
        display:inline-block;
        padding-left:20px;
        position:relative;
        top:-5px;
    }
</style>
