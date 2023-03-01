<script setup lang="ts">
import { useRouter, useData } from "vitepress";
import { ref, provide } from "vue";

import "vitepress/dist/client/theme-default/styles/base.css";

/* data */
const { page, theme, localeIndex } = useData();
const drawer = ref(true);
const selectedRouter = 3;

const groups = theme.value.sidebar[localeIndex.value];
console.log(page.value.headers.length);
console.log(theme.value.sidebar, localeIndex.value);

/* provide */
provide("vue-router", useRouter());
</script>

<template>
  <!-- <Layout> -->
  <j-app id="app">
    <j-container app>
      <j-app-bar>
        <j-app-bar-nav-icon @click="drawer = !drawer"></j-app-bar-nav-icon>
        <j-app-bar-title>JACKIE UI</j-app-bar-title>
      </j-app-bar>
      <j-container>
        <j-navigation-bar mini v-model="drawer">
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
        <j-main>
          <j-doc>
            <j-row>
              <j-col cols="24" :lg="page.headers.length > 0 ? 18 : 0" :xl="page.headers.length > 0 ? 19 : 0">
                <Content />
              </j-col>
              <j-col cols="0" :lg="page.headers.length > 0 ? 6 : 0" :xl="page.headers.length > 0 ? 5 : 0">
                <j-doc-toc></j-doc-toc>
              </j-col>
            </j-row>
          </j-doc>
        </j-main>
      </j-container>
    </j-container>
  </j-app>
  <!-- </Layout> -->
</template>
