<template>
  <div id="app">
    
    <MainContainer/>
  </div>
</template>

<script>
const MainContainer = () => import('./components/MainContainer');

export default {
  name: 'App',
  components: {
    MainContainer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  
  
}
body{
  background-color: #333;
  
}
html{
  overflow-x: hidden;
}


</style>
