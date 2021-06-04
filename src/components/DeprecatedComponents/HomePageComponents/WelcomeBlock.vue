<template>
    <div class="zms-homepage-welcome" >
        <div class="zms-homepage-welcome-avatar">
            <img :src="avatarImg"/>
        </div>
        <div class="zms-homepage-welcome-info">
            <b>欢迎使用ZMS管理系统</b>
        </div>
        <div class="zms-homepage-welcome-infosub">
            <b>Welcome to ZMS Management System</b>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WelcomeBlock',
    computed:{
        
    },
    methods:{
        
    },
    components:{
        
    },created(){
        let urlTemp = this.$store.state.sAsset_WelcomeIcon;
        this.avatarImg = require("@/"+urlTemp)
    },data:()=>{
        return{
            avatarImg:null,
        }
    }
}
</script>

<style scoped lang="scss">
    .zms-homepage-welcome-info{
        font-size:25px;
        color:#3b6fcf;
        
    }
    .zms-homepage-welcome{
        margin-left:10%;
    }
</style>
