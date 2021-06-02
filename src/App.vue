<template>
  <div id="app">
    <slidebar></slidebar>
    <top-navigation-bar></top-navigation-bar>
    <br/><br/><br/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TopNavigationBar from './components/TopNavigationBar.vue'
import Slidebar from './components/Slidebar.vue'
export default {
    name: 'App',
    components: {
        TopNavigationBar,
        Slidebar,
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
