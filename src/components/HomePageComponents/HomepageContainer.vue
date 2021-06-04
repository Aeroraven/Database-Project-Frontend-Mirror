<template>
  <div class="zms-home-container">
      <homepage-welcome></homepage-welcome>
      <homepage-notice></homepage-notice>
      <homepage-overview></homepage-overview>>
  </div>
</template>

<script>
import HomepageWelcome from '@/components/HomepageComponents/HomepageWelcome.vue'
import HomepageNotice from './HomepageNotice.vue';
import HomepageOverview from './HomepageOverview.vue';
export default {
  components: {HomepageWelcome,HomepageNotice, HomepageOverview  },
  name: 'HomepageContainer',
  props:{
      drawer:Boolean,
  },
  data: () => ({
    
  }),
  computed:{
   
  },
  methods:{
    
  }
};
</script>

<style scoped lang="scss">

</style>