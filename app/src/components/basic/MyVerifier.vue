<template>
  <div class="my-canvas">
    <canvas @click="changeText" ref="my-canvas" :width="contentWidth" :height="contentHeight"></canvas>
  </div>
</template>

<script>



export function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default {
  name: 'MyVerifier',
  props: {
    modelValue: {
      type: String,
      default: 'shit',
    },
    contentWidth: {
      type: Number,
      default: 111,
    },
    contentHeight: {
      type: Number,
      default: 38,
    },
  },
  methods: {
    changeText() {
      this.$emit('update:modelValue');
    },
    randomColor(min, max) {
      const r = rand(min, max);
      const g = rand(min, max);
      const b = rand(min, max);
      return `rgb(${r}, ${g}, ${b})`;
    },

    draw() {
      let canvas = this.$refs['my-canvas'];
      let ctx = canvas.getContext('2d');
      ctx.textBaseline = 'bottom';
      ctx.fillStyle = this.randomColor(205, 255);
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
      for (let i = 0; i < 4; i++) {
        this.drawText(i);
      }
      this.drawLines();
      this.drawDots();
    },
    drawText(i) {
      let canvas = this.$refs['my-canvas'];
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = this.randomColor(150, 200);
      ctx.font = `${rand(20, 24)}px Helvetica`;
      let x = (i + 1) * (this.contentWidth / 5);
      let y = rand(25, this.contentHeight - 5);
      let deg = rand(-30, 30);
      // new pos
      ctx.translate(x, y);
      ctx.rotate(deg * Math.PI / 180);
      ctx.fillText(this.modelValue[i], 0, 0);
      // restore original pos
      ctx.rotate(-deg * Math.PI / 180);
      ctx.translate(-x, -y);
    },
    drawLines() {
      let canvas = this.$refs['my-canvas'];
      let ctx = canvas.getContext('2d');
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = this.randomColor(205, 255);
        ctx.beginPath();
        ctx.moveTo(rand(0, this.contentWidth), rand(0, this.contentHeight));
        ctx.lineTo(rand(0, this.contentWidth), rand(0, this.contentHeight));
        ctx.stroke();
      }
    },
    drawDots() {
      let canvas = this.$refs['my-canvas'];
      let ctx = canvas.getContext('2d');
      for (let i = 0; i < 25; i++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(rand(0, this.contentWidth), rand(0, this.contentHeight), 1, 0, 2 * Math.PI);
        ctx.fill();
      }
    },
  },
  computed: {},
  watch: {
    modelValue: {
      handler(newVal, oldVal) {
        this.draw();
      }
    }
  },
  mounted() {
    this.draw();
  },
}
</script>

<style scoped>
.my-canvas {
  display: inline-block;
  height: 38px;
}
.my-canvas canvas {
  /*margin-top: 5px;*/
}
</style>