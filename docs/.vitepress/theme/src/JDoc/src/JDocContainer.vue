<script setup lang="ts">
import { ref, onMounted, markRaw, inject, onUpdated, nextTick } from "vue";
import type { Ref } from "vue";

/* props */
const props = defineProps({
  path: { type: String, default: undefined },
  source: { type: String, default: undefined },
});

/* data */
const highlight_height = ref("40px");
const is_hover = ref(false);
const is_expanded = ref(false);
const highlight = ref(null);
const demo = ref();

const heightHandler = val => {
  highlight_height.value = val;
};

/* inject */
const render_count = inject("doc-render-count");

/* mounted */
onMounted(() => {
  render_count.value++;
  const modules = import.meta.glob("@examples/**/**/*.vue");
  modules[`/examples/${props.path}.vue`]().then((module: any) => {
    demo.value = markRaw(module.default);
  });

  window.onresize = () => {
    render_count.value++;
  };
});

/* updated */
onUpdated(() => {
  render_count.value++;
});
</script>

<template>
  <div
    :style="{ border: !!source ? '' : 'none' }"
    class="j-doc-container"
    @mouseenter="is_hover = true"
    @mouseleave="is_hover = false"
  >
    <div class="j-component" :class="{ 'pa-0': !source }">
      <j-doc-demo :demo="demo"></j-doc-demo>
    </div>
    <div v-if="!!source" class="j-doc-container-action flex flex-row justify-end items-center">
      <j-icon class="mr-8" @click="is_expanded = !is_expanded">mdi-code-tags</j-icon>
    </div>
    <div
      v-if="!!source"
      class="j-code-block"
      :class="{ 'is-fold': !is_expanded }"
      :style="{ '--highlight--height': highlight_height }"
    >
      <div class="highlight" ref="highlight">
        <j-doc-highlight @highlight-height="heightHandler" v-bind="$attrs" :source="source"></j-doc-highlight>
      </div>
    </div>
    <div
      v-show="is_expanded"
      class="j-doc-container-action-sticky flex-row justify-center"
      :class="{ flex: is_expanded }"
    >
      <button class="flex items-center" @click="is_expanded = !is_expanded">
        隐藏代码
        <j-icon>mdi-menu-up</j-icon>
      </button>
    </div>
  </div>
</template>
