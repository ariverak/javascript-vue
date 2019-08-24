<template>
  <div id="app">
    <Sidebar v-show="visible" />
    <div class="content">
      <Toolbar />
      <Content />
    </div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    Sidebar,
    Content
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
.content {
  width: 100%;
}
</style>
