<template>
  <div class="app">
      <!-- <MainPage/> -->
      <router-view></router-view>
  </div>
</template>

<script>
// import MainPage from './components/Main-page.vue';
// import NewsPage from './components/News-page.vue';

export default {
  name: 'App',
  components: {
    // MainPage,
    // NewsPage
  }, 
  data() {
    return {
      
    }
  }
}
</script>
  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0;
}
</style>
