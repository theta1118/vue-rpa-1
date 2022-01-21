<template>
  <div id="app">
    <router-view />
  </div>
</template>

<!--<style lang="less">-->
<!--#app {-->
<!--  font-family: "Avenir", Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  color: #2c3e50;-->
<!--  height: 100%;-->
<!--}-->
<!--</style>-->

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    logout() {
      this.$router.push('login')
    }
  },
  created() {
    console.log(this.$rout)
  }
}
</script>
<style lang="less">
.layout {
  height: 100vh;
  .left-menu {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    /* 滚动区域背景 */
    &::-webkit-scrollbar-track-piece {
      background: silver;
      -webkit-border-radius: 6px;
    }
    /* 竖向滚动条 */
    &::-webkit-scrollbar-thumb:vertical {
      height: 5px;
      background-color: silver;
      -webkit-border-radius: 6px;
    }
    /* 横向滚动条 */
    &::-webkit-scrollbar-thumb:horizontal {
      width: 5px;
      background-color: red;
      -webkit-border-radius: 6px;
    }
  }
  .logo {
    height: 32px;
    line-height: 32px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
