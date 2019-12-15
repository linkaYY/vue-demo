<template>
  <div id="app">
    <nav class="header">
      <div class="logo">
        <img src="./assets/icon/logo.png" alt="" />
      </div>
      <div class="title">Vue App Demo</div>
      <div v-if="isCn" class="lang" @click="changeLang(false)">CN</div>
      <div v-else class="lang" @click="changeLang(true)">EN</div>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    changeLang(langType) {
      if (langType) {
        this.$store.commit("setLang", "cn-ZH");
        return;
      }
      this.$store.commit("setLang", "en-US");
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  width: 100%;
  height: 60px;
  background-color: #0b83ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 40px;
  color: #fff;
  font-size: 20px;
  .logo {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    height: 100%;
    width: 200px;
    line-height: 60px;
    text-align: center;
  }
  .lang {
    cursor: pointer;
    font-size: 19px;
    width: 40px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
  }
}
</style>
