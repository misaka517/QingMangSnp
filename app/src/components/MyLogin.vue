<template>
  <div>
    login page
  </div>
</template>

<script setup>
import { reactive } from 'vue';

let formState = reactive({
  username: '',
  password: ''
});

function handleFinish() {

}

function handleFinishFailed() {

}
</script>
