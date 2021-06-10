<template>
  <div class="my-input">
    <input
        ref="input"
        v-model="val"
        class="my-input-box"
        :type="visibility ? 'text' : 'password'"
        @keyup.enter.native="enterEvent"
        :placeholder="placeholder">
    <div v-if="hidable" class="my-input-icon" @click="toggleVisibility"></div>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入',
    },
    hidable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      val: this.modelValue,
      visibility: !this.hidable,
    };
  },
  computed: {},
  methods: {
    enterEvent() {
      this.$refs.input.blur();
      this.$emit('enterEvent');
    },
    toggleVisibility() {
      this.visibility = !this.visibility;
      this.$nextTick(() => {
        this.$refs.input.focus();
      })
    },
  },
  watch: {
    modelValue(newVal, oldVal) {
      this.val = newVal;
    },
    val(newVal, oldVal) {
      this.$emit('update:modelValue', newVal);
    },
  }
}
</script>

<style scoped>

.my-input-box {
  outline: none;
  display: inline-block;
  cursor: default;
  transition: 250ms;
}

.my-input-box:focus {
  cursor: text;
  border-color: blueviolet;
}

.my-input-box:focus:placeholder-shown {
  padding: 20px 10px 10px;
}

.my-input-box::placeholder {
  font-size: 16px;
  transform-origin: top left;
  transition: 300ms ease-out;
}

.my-input-box:focus::placeholder {
  transform: scale(0.6) translateY(-20px);
}

.my-input {
  display: flex;
  align-items: center;
}

.my-input-box {
  border: 2px solid rgba(255,255,255,0);
  border-radius: 5px;
  padding: 15px 10px;
  line-height: 20px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.5);
}

.my-input-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #666;
  margin-left: -30px;
}

</style>
