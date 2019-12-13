<template>
  <div class="home">
    <div class="imgBox" @mousedown="moveStart($event)" @mouseup="moveEnd($event)" @mousemove="move($event)" @click="clickDom($event)"></div>
    <div class="hide"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data () {
    return {
      isMove: false, // 是否启动鼠标移动事件标识
    }
  },
  components: {
  },
  methods: {
    moveStart (e) {
      this.isMove = true
    },
    moveEnd (e) {
      this.isMove = false
    },
    move (e) {
      if (this.isMove) {
        console.log(e.clientX, e.clientY)
      } else {
        e.preventDefault()
      }
    },
    clickDom (e) {
    }
  }
};
</script>
<style lang="scss" scoped>
  .home {
    position: relative;
  }
  .imgBox {
    width: 1366px;
    height: 766px;
    background-color: red;
  }
  .hide {
    width: 1366px;
    height: 766px;
    position: absolute;
    left: 0;
    height: 0;
    display: none;
  }
</style>