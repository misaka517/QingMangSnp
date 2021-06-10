<template>
  <span
      class="my-button"
      :class="[data.isPrime ? 'my-button-outlined' : 'my-button-solid']"
      @mouseenter="hoverIn"
      @mouseleave="hoverOut"
      @click="clickEvent()">
    <span class="my-button-content">
      <slot></slot>
    </span>
  </span>
</template>

<script setup>
import {defineProps, defineEmit, reactive, onMounted} from 'vue';
let props = defineProps({
  outlined: Boolean
});
let emits = defineEmit(['clickEvent']);

let data = reactive({
  isPrime: props.outlined
})

function clickEvent() {
  emits('clickEvent');
}

function hoverIn() {
  data.isPrime = !data.isPrime;
}
function hoverOut() {
  data.isPrime = !data.isPrime;
}

</script>

<style scoped>
.my-button {
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  display: inline-block;
}
.my-button:hover {
  cursor: pointer;
}
.my-button-content {
  display: inline-block;
  margin: 5px 10px;
}
.my-button-outlined {
  border: #333 1px solid;
}
.my-button-solid {
  color: white;
  background: var(--primary);
  border: #333 1px solid;
}
</style>
