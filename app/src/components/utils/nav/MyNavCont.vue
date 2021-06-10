<template>
  <div
      v-for="(a, b) in contents"
      :key="b"
      :style="{'--indent': (indent * a.layer) + 'px'}">
    <div
        :class="[getHighlight(b), 'my-nav']"
        @click="clickEvent(b)"
        @mouseenter="hovered = b"
        @mouseleave="hovered = -1">
      {{ a.name }}
    </div>
    <my-nav-cont v-if="selected === b && a.hasChildren" :my-nav-content="a.children"></my-nav-cont>
  </div>
</template>

<script setup>
import {defineProps, onMounted, ref, watch} from 'vue';

let props = defineProps({
  myNavContent: Object,
  indent: {
    type: Number,
    default: 15,
  },
})

let contents = ref(props.myNavContent.map((c) => {
  c.hasChildren = (c.children && c.children.length > 0);
  return c;
}))
let selected = ref(-1)
let hovered = ref(-1)

onMounted(() => {
  let sel = sessionStorage.getItem("selection-" + contents.value[0].layer)
  if (typeof sel === "string") {
    selected.value = parseInt(sel);
  }
})

function getHighlight(b) {
  return hovered.value === b ? 'my-nav-highlight' : '';
}

function clickEvent(b) {
  selected.value = selected.value !== b ? b : -1
}

watch(
    () => selected.value,
    val => {
      sessionStorage.setItem("selection-" + contents.value[0].layer, val);
    }
)

</script>

<style scoped>
.my-nav {
  padding: 10px 0 10px var(--indent);
}

.my-nav-highlight {
  background-color: gray;
  cursor: pointer;
}
</style>