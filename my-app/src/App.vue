<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello World!"/>
    <Something msg="Trying something else"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Something from './components/Something.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Something
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
