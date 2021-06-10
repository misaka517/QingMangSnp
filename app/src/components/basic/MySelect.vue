<template>
  <div v-if="multiple">
    <div v-for="(item, index) in modelValue" :key="index">{{item}}</div>
  </div>
  <div></div>
  <div>
    <input
      type="text"
      placeholder="some placeholder"
      v-model="data.inputValue"
      @blur="blurEvent"/>
  </div>
</template>

<script setup>
import { defineEmit, defineProps, reactive, watch } from 'vue';
let props = defineProps(['searchable', 'multiple', 'modelValue',]);
let data = reactive({
  inputValue: '',
  values: props.modelValue,
})
console.log(data.values)
let emits = defineEmit(['update:modelValue']);
watch(() => { data.values }, (newVal, oldVal) => {
  console.log('triggered')
  emits('update:modelValue', newVal);
}, {deep: true})

function blurEvent() {
  if (data.inputValue) {
    data.values.push(data.inputValue)
    data.inputValue = ''
  }
  emits('update:modelValue', data.values)
}

</script>

<style scoped></style>