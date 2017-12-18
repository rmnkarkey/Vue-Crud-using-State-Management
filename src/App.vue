<template>
  <div id="app">
    <crud></crud>
    <router-view></router-view>
  </div>
</template>

<script>
import crud from './components/welcomepage.vue';
export default {
  name: 'app',
  components:{crud}
  
}
</script>

<style>

</style>
