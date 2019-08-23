<template>
  <div id="app">
    <Sidebar v-show="visible" />
    <Toolbar />
    
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    Sidebar
  },
  data() {
        return {
           visible : true
        }
  },
}
</script>

<style>
#app{
  display: inline-flex;
  width: 100%;
  
}

</style>
