<template>
    <div class="zms-top-navigation-bar-title">
        {{getTitle}}
    </div>
</template>

<script>

export default {
  components: {  },
  name: 'TopNavigationBarTitle',
  data:()=>{
      return {
          abc:[1,2,3,4],
      }
  },
  computed:{
      getTitle(){
          return this.$store.state.sTopBarTitle;
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
