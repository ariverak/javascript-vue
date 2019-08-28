<template>
  <div id="app">
    <dashboard v-if="isLogged" @loginOut="loginOut" />
    <login @loginIn="loginIn" v-else />
  </div>
</template>

<script>
import Dashboard from './pages/dashboard'
import Login from './pages/login'
let isLogged = false;
export default {
  name: 'app',
  components: {
    Dashboard,
    Login
  },
  methods: {
    loginIn(){
      this.isLogged = true;
    },
    loginOut(){
      this.isLogged = false;
    }
  },
  data() {
    return {
      isLogged : isLogged
    }
  },
}
</script>

<style>
</style>
