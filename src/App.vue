<template>
  <div id="app">
    <transition name="slide-right" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #F5F5F5;
  }
  
  #app {
  }
</style>
