<template>
  <a-layout class="layout">
    <a-layout-sider class="left-menu" :trigger="null" collapsible v-model="collapsed">
      <div class="logo">{{ collapsed ? 'RPA' : 'RPA监测平台' }}</div>
      <a-menu theme="dark" mode="inline" :defaultOpenKeys="['1']" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <router-link to="/">
            <a-icon type="home" />
            <span>首页</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="2">
          <span slot="title">
            <a-icon type="video-camera" />
            <span>A 级页面</span>
          </span>
          <a-menu-item key="2-1">
            <router-link to="/a/a1">
              <span>A1 页面</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2-2">
            <router-link to="/a/a2">
              <span>A2 页面</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2-3">
            <router-link to="/a/a3">
              <span>A3 页面</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="3">
          <span slot="title">
            <a-icon type="user" />
            <span>B 级页面</span>
          </span>
          <a-menu-item key="3-1">
            <router-link to="/b/b1">
              <span>B1 页面</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3-2">
            <router-link to="/b/b2">
              <span>B2 页面</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3-3">
            <router-link to="/b/b3">
              <span>B3 页面</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="4">
          <span slot="title">
            <a-icon type="user" />
            <span>C 级页面</span>
          </span>
          <a-menu-item key="4-1">
            <router-link to="/c/c1">
              <span>C1 页面</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4-2">
            <router-link to="/c/c2">
              <span>C2 页面</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4-3">
            <router-link to="/c/c3">
              <span>C3 页面</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;display:flex;justify-content: space-between">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)" />
        <a-dropdown style="margin-right: 20px">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            超级管理员，您好！
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:">
                <a-icon type="edit" />
                修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;" @click="logout">
                <a-icon type="logout" />
                注销登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
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
