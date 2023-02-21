<script setup lang="ts">
import { useRouter, useData } from "vitepress";
import { ref, provide } from "vue";

import "vitepress/dist/client/theme-default/styles/base.css";

/* data */
const { page, theme } = useData();
const drawer = ref(true);
const selectedRouter = 3;
// const groups: any = ref([
//   {
//     head: { name: "介绍", icon: "mdi-text-box-outline" },
//     items: [
//       { name: "JUI简介", to: "/introduction/brief", active: true },
//       { name: "版本路线", to: "/introduction/version-map" },
//     ],
//   },
//   {
//     head: { name: "快速入门", icon: "mdi-timer-outline", expand: true },
//     items: [
//       { name: "安装", to: "/getting-started/installation" },
//       { name: "快速上手", to: "/getting-started/quick-start" },
//       { name: "浏览器支持", to: "/getting-started/browser-support" },
//     ],
//   },
//   {
//     head: { name: "特性", icon: "mdi-feather" },
//     items: [
//       { name: "国际化", to: "/features/i18n" },
//       { name: "主题", to: "/features/theme" },
//     ],
//   },
//   {
//     head: { name: "样式", icon: "mdi-palette-swatch-outline" },
//     items: [
//       { name: "海拔", to: "/styles/elevation" },
//       { name: "颜色", to: "/styles/color" },
//       { name: "文本", to: "/styles/text" },
//       { name: "间距", to: "/styles/spacing" },
//       { name: "弹性布局(Flex)", to: "/styles/flex" },
//       { name: "边框(Border)", to: "/styles/border" },
//       { name: "过渡动画", to: "/styles/transitions" },
//     ],
//   },
//   {
//     head: { name: "组件", icon: "mdi-shape-outline" },
//     items: [
//       { name: "Lists(列表)", to: "/components/lists" },
//       { name: "Paper(纸张)", to: "/components/paper" },
//     ],
//   },
//   { head: { name: "指令", icon: "mdi-function-variant" }, items: [{}] },
// ]);

const groups = theme.value.sidebar;

/* provide */
provide("vue-router", useRouter());
</script>

<template>
  <!-- <Layout> -->
  <j-app id="app">
    <!-- <j-container app>
      <j-navigation-bar mini v-model="drawer">
        <template v-slot:prepend>
          <img style="width: 255px" src="https://www.jackiewongz.com/resources/blog_name_black.png" />
        </template>
        <j-list nav>
          <j-list-item-group mandatory v-model="selectedRouter">
            <j-list-group
              v-for="(group, group_id) in groups"
              :key="group_id"
              :prepend-icon="group.icon"
              :title="group.text"
              independent
              v-model="group.collapsed"
            >
              <component
                :is="!item.items ? 'j-list-item' : 'j-list-group'"
                v-for="(item, item_id) in group.items"
                :key="item_id"
                :active="item.active"
                :to="item.link"
                no-icon
                :title="item.text"
              >
                <j-list-item
                  v-if="item.items"
                  v-for="(subitem, subitem_id) in item.items"
                  :key="subitem_id"
                  :active="subitem.active"
                  :to="subitem.link"
                  no-icon
                >
                  <j-list-item-content class="pl-4">{{ subitem.text }}</j-list-item-content>
                </j-list-item>
                <j-list-item-content v-if="!item.items">{{ item.text }}</j-list-item-content>
              </component>
            </j-list-group>
          </j-list-item-group>
        </j-list>
      </j-navigation-bar>
      <j-container>
        <j-app-bar>
          <j-app-bar-nav-icon @click="drawer = !drawer"></j-app-bar-nav-icon>
          <j-app-bar-title>JACKIE UI</j-app-bar-title>
        </j-app-bar>
        <j-main>
          <j-doc>
            <j-row>
              <j-col cols="24" :lg="page.headers.length > 0 ? 18 : 0" :xl="page.headers.length > 0 ? 19 : 0">
                <Content />
              </j-col>
              <j-col cols="0" :lg="page.headers.length > 0 ? 6 : 0" :xl="page.headers.length > 0 ? 5 : 0">
                <j-doc-toc>aa</j-doc-toc>
              </j-col>
            </j-row>
          </j-doc>
        </j-main>
      </j-container>
    </j-container> -->
  </j-app>
  <!-- </Layout> -->
</template>
