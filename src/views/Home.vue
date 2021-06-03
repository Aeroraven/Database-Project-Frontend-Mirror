<template>
    <div class="home">
        <div class="zms-home-container">
            <homepage-float-box title="" :shadow="false" type='half'
            class="zms-home-icon">
                <welcome-block></welcome-block>
            </homepage-float-box>
            <homepage-float-box title="账户信息" :shadow="true" type='half'
            class="zms-home-accinfo">
                <account-info-overview></account-info-overview>
            </homepage-float-box>
            <hr/>
            <homepage-float-box title="园区概览" :shadow="true" type='full'
            class="zms-home-overview">
            </homepage-float-box>
            <homepage-float-box title="待办工作" :shadow="true" type='full'
            class="zms-home-overview">
            </homepage-float-box>
            <homepage-float-box title="通知信息" :shadow="true" type='full'
            class="zms-home-overview">
            </homepage-float-box>

        </div>
    </div>
    
</template>

<script>
import AccountInfoOverview from '../components/HomePageComponents/AccountInfoOverview.vue'
import HomepageFloatBox from '../components/HomePageComponents/HomepageFloatBox.vue'
import WelcomeBlock from '../components/HomePageComponents/WelcomeBlock.vue'

export default {
    components: { HomepageFloatBox, WelcomeBlock, AccountInfoOverview },
    name: 'Home',
  
}
</script>
<style scoped lang="scss">
    .zms-home-icon{
        margin-bottom:10px;
        text-align: center;
    }
    .zms-home-container{
        margin-top:20px;
        margin-left:5px;
        margin-right:5px;
        position:relative;
        width:95%;
    }
    .zms-home-accinfo{
        float:right;
    }
    .zms-home-overview{
        margin-top:20px;
    }
</style>