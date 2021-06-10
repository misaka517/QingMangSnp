<template>
  <div class="my-login-panel">
    <div style="display: flex; justify-content: flex-start; align-items: center;">
      <my-input v-model="data.username"></my-input>
    </div>
    <div style="display: flex; justify-content: flex-start; align-items: center;">
      <my-input v-model="data.password" hidable></my-input>
    </div>
    <div style="display: flex; justify-content: flex-start; align-items: center;">
      <my-input v-model="data.codeInput"></my-input>
      <my-verifier :modelValue="data.code" @update:modelValue="getCode"></my-verifier>
    </div>
    <my-button @clickEvent="submitLogin">确认</my-button>
  </div>
</template>

<script setup>
import MyVerifier from '../components/basic/MyVerifier.vue';
import MyInput from '../components/basic/MyInput.vue';
import MyButton from '../components/basic/MyButton.vue';

import {rand} from '../components/basic/MyVerifier.vue';
import {reactive} from 'vue';

let data = reactive({
  code: '',
  username: '',
  password: '',
  codeInput: '',
  avail: 'abcde1fghij2klmno3pqrst4uvwxy5zABCD6EFGHI7JKLMN8OPQRS9TUVWX0YZ',
})

const getCode = () => {
  data.username = '';
  data.code = '';
  for (let i = 0; i < 4; i++) {
    data.code += data.avail[rand(0, data.avail.length)];
  }
}
getCode();

function validate() {
  return true;
}

function verify() {
  return data.codeInput.toLowerCase() === data.code.toLowerCase();
}

function submitLogin() {
  if (!verify()) {
    getCode();
    return;
  }
  if (!validate()) {
    getCode();
    return;
  }
}

</script>

<style scoped>
.my-login-panel {
  background: #999;
  padding: 50px;
}
</style>