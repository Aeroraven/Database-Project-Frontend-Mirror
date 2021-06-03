<template>
    <div class="zms-homepage-account-overview" >
        <div class="zms-homepage-account-avatar">
            <img :src="avatarImg" object-fit="fill"/>
        </div>
        <div class="zms-homepage-account-info">
            <b>张三</b>
            <span class="zms-homepage-account-info-id">1950000</span><br/>
            <span class="zms-homepage-account-info-type">用户 | 系统管理员</span><br/>
            <z-button icon="tool" type="royal" caption="账户设置" class='zms-homepage-account-info-btn'></z-button>
            <z-button icon="tab" type="reject" caption="退出系统" class='zms-homepage-account-info-btn'></z-button>
        
        </div>
    </div>
</template>

<script>
import ZButton from '../ControlComponents/ZButton.vue';

export default {
    name: 'AccountInfoOverview',
    computed:{
        
    },
    methods:{
        
    },
    components:{
        ZButton
        
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
    .zms-homepage-account-avatar{
        float:left;
        margin-right:30px;
        img{
            width:120px;
            height:160px;
        }
    }
    .zms-homepage-account-info{
        line-height: 200%;
        padding-top:15px;
        font-size:15px;
        letter-spacing: 1px;
        b{
            font-size:18px;
            margin-right:10px;
        }
        position:relative;
    }
    .zms-homepage-account-info-btn{
        transform:scaleX(85%) scaleY(85%);
        position:relative;
        margin-top:15px;
        left:-10px;
    }
</style>
