<template>
  <div v-if="showDialog" class="my-dialog">
    <div class="my-dialog-panel">
      <div class="my-dialog-header">
        <slot name="header"></slot>
        <span class="my-dialog-close" @click="closeDialog">x</span>
      </div>
      <div class="my-dialog-body">
        <slot name="default"></slot>
      </div>
      <div class="my-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineEmit, defineProps} from 'vue';

let props = defineProps({
  showDialog: Boolean
})

let emits = defineEmit(['close'])

function closeDialog() {
  emits('close');
}
</script>

<style scoped>
.my-dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-dialog-panel {
  width: 800px;
  height: 500px;
  z-index: 2001;
  background: #fff;
  position: relative;
  padding: 20px 10px;
}

.my-dialog-header {
  padding: 0 10px 10px;
  border-bottom: #333 1px solid;
}

.my-dialog-body {
}

.my-dialog-footer {

}

.my-dialog-close {
  position: absolute;
  right: 0;
  top: 0;
}

.my-dialog-close :hover {
  cursor: pointer;
}
</style>