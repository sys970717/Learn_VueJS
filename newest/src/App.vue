<template>
  <div id="app">
    <div id="header">
        <topHeader />
    </div>
    <img src="./assets/logo.png">
    <router-view/>

    <div id="footer">
      <baseFooter />
    </div>
  </div>
</template>

<script>
import TopHeader from './components/common/topHeader.vue'
import BaseFooter from './components/common/footer.vue'

export default {
    name: 'App',
    components: {
        'topHeader': TopHeader,
        'baseFooter': BaseFooter
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
