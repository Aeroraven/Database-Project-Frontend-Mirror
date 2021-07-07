<template>
<div>
    
    <div class="app" style='text-align: center;font-family:Novecento'>
        <div class="box-card" shadow="always">
          <span
          class="logintitle"
          style='font-size:30px; 
          color:rgb(50, 50, 100);
          margin-top:20px;
          display:block;
          ' >LOGIN</span>
          
          <form>
            <label>User:</label> &nbsp;<input type="input" class="input" value="123"/>
            <el-button class="style_a">这个是一个按钮</el-button>
          </form>
        </div>

        

        <vue-particles
        color="#dedede"
        class="app particlebg"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
        </vue-particles>
    </div> 
</div>
</template>


<script>
export default {

}
</script>

<style scoped>
    input{
      border-bottom:black 1px solid
    }
    .particlebg{
       
        z-index: -1;
    }
    .logintitle{
      font-family:Novecento;
      letter-spacing: 2px;
      font-weight: normal;
      padding-top:10px;
      padding-bottom:40px
    }
    .style_a{
      position:relative;
      bottom:-70px;
      background-color: #a6ce39;
      font-size:14px;
    }
    .box-card{
        height:520px;
        width:400px;
        position:absolute;
        top:50%;
        left:50%;
        border-radius: 10px;
        background: rgba(255, 255, 255, .3);
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, .3);
        transform:translate(-50%,-50%);
    }
    .app{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right: 0;
        background: linear-gradient(45deg, rgb(53, 92, 125), rgb(108, 91, 123), rgb(192, 108, 132));
    }
    .text {
        font-size: 14px;
    }

    .item {
      padding: 18px 0;
    }

 
</style>