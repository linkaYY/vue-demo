<template>
  <div>
    <button @click="uploadImage">上传图片</button>
    <button @click="uploadVideo">视频</button>
    <button @click="uploadDoc">上传文档</button>
  </div>
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
  methods: {
    uploadImage() {
      this.uploader.upload("image", {
        multiple: true,
        progress: function(value) {},
        getFileInfo: function(info) {}
      });
    },
    uploadVideo() {
      this.uploader.upload("video", {
        multiple: true,
        progress: function(value) {},
        getFileInfo: function(info) {}
      });
    },
    uploadDoc() {
      this.uploader.upload("doc", {
        multiple: true,
        progress: function(value) {},
        getFileInfo: function(info) {}
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: red;
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
