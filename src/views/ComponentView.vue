<template>
    <div class="home">
        <h3>Component Examples</h3>
        <hr/>
        <br/><b>Buttons</b><br/><br/>

        <z-button icon="check" type="confirm" caption="CONFIRM"></z-button>
        <z-button icon="cross" type="reject" caption="REJECT"></z-button>
        <z-button icon="tool" type="dark" caption="CONFIGURE"></z-button>
        <z-button icon="heart" type="romance" caption="FOLLOW"></z-button>
        <z-button icon="filter-plus" type="royal" caption="FILTER"></z-button>
        
        <hr/>
        <br/><b>Checkbox</b><br/><br/>
        <z-check-box caption="APPLE"></z-check-box>
        <z-check-box caption="PINEAPPLE"></z-check-box>
        <z-check-box caption="ROTTEN PINEAPPLES"></z-check-box>
        <z-check-box caption="ROTTEN PINEAPPLES"></z-check-box>
    </div>
    
</template>

<script>

export default {
  components: { },
    name: 'ComponentView',
    created(){
        this.$store.dispatch('alterTopNavTitle',{title:'Components Examples'})
    }
}
</script>
<style scoped lang="scss">
    
</style>