<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      isMove: false // 是否启动鼠标移动事件标识
    };
  },
  components: {},
  methods: {}
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
