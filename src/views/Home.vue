<template>
    <div class="home">
        <div class="zms-home-container">
            <homepage-float-box title="" :shadow="false" type='half'>
                <welcome-block></welcome-block>
            </homepage-float-box>
            <homepage-float-box title="账户信息" :shadow="true" type='half'>HelloWorld</homepage-float-box>
        </div>
    </div>
    
</template>

<script>
import HomepageFloatBox from '../components/HomePageComponents/HomepageFloatBox.vue'
import WelcomeBlock from '../components/HomePageComponents/WelcomeBlock.vue'

export default {
    components: { HomepageFloatBox, WelcomeBlock },
    name: 'Home',
  
}
</script>
<style scoped lang="scss">
    .zms-home-container{
        margin-top:20px;
        margin-left:5px;
        margin-right:5px;
        position:relative;
    }
</style>