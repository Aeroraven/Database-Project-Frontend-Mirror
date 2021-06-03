<template>
  <div id="app">
    <slidebar></slidebar>
    <top-navigation-bar></top-navigation-bar>
    <page-container></page-container>
    <z-popup-window title="你好世界" style="display:none">HelloWorld</z-popup-window>
  </div>
</template>

<script>
import TopNavigationBar from './components/TopbarComponents/TopNavigationBar.vue'
import Slidebar from './components/SlidebarComponents/Slidebar.vue'
import PageContainer from './components/PageContainer.vue'
import ZPopupWindow from './components/ControlComponents/ZPopupWindow.vue'
export default {
    name: 'App',
    components: {
        TopNavigationBar,
        Slidebar,
        PageContainer,
        ZPopupWindow,
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); 
}
</style>
