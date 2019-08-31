<template>
  <div id="app">
    <dashboard v-if="isLogged" @loginOut="loginOut">
       <router-view />
    </dashboard>
    <login @loginIn="loginIn" v-else />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard'
import Login from './pages/Login'

let isLogged = !!localStorage.getItem("accessToken");

export default {
  name: 'app',
  components: {
    Dashboard,
    Login
  },
  methods: {
    async loginIn({username,password}){
      const {status,data} = await this.$axios.post("http://localhost:3000/login",{
          username,
          password
      }).catch(({response})=>{
          alert(response.data.message)
      })
      if(status === 200){
        localStorage.setItem("accessToken",data.accessToken)
        this.isLogged = true;
      }
    },
    loginOut(){
      localStorage.removeItem("accessToken")
      this.isLogged = false;
    }
  },
  data() {
    return {
      isLogged : isLogged
    }
  }
}
</script>

<style>
</style>
