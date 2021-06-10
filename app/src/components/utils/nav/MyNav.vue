<template>
  <div class="my-nav">
    <my-nav-cont :my-nav-content="myNavContent"></my-nav-cont>
  </div>
</template>

<script setup>
import MyNavCont from './MyNavCont.vue';
import {defineProps} from 'vue';

let props = defineProps({
  myNavContent: Object
})

console.log(props.myNavContent)

</script>

<style scoped>
.my-nav {
  width: 200px;
  height: 100vh;
  background: #999;
  position: absolute;
  top: 0;
  left: 0;
}
</style>