<template>
  <q-layout view="lHh Lpr lFf">
    <q-header dark class="bg-grey-1 text-black q-px-xl" elevated>
      <div class="row items-center">
        <div class="row items-center q-mr-md">
          <q-img
            src="~assets/images/logo.png"
            width="35px"
            contain
            spinner-color="primary"
            spinner-size="82px"
          />
          <span class="text-h6 q-ml-md align-center">颐纳福 开放平台</span>
        </div>
        <q-tabs
          v-model="tab"
          indicator-color="transparent"
          active-color="white"
        >
          <q-route-tab
            v-for="(item, i) in headers"
            :key="i"
            :name="i"
            exact
            :class="i === tab ? 'activedTab' : ''"
            :label="item.name"
            :to="item.to"
          />
        </q-tabs>
        <q-space />
        <div class="row inline reverse items-center cursor-pointer">
          <router-link to="/signPage">登录</router-link>
          <q-separator
            color="grey"
            class="q-py-sm"
            spaced
            inset
            vertical
            dark
          />
          <router-link to="/signPage">注册</router-link>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout",
  data() {
    return {
      logo: require("assets/images/logo.png"),
      leftDrawerOpen: false,
      tab: 0,
      headers: [
        {
          name: "首页",
          to: "/"
        },
        {
          name: "个人中心",
          to: "/personalCenter"
        },
        {
          name: "数据中心",
          to: "/dataCenter"
        },
        {
          name: "文档",
          to: "/document"
        },
        {
          name: "问题反馈",
          to: "/feedBack"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.activedTab {
  background: #016afe;
}
</style>
