<script setup lang="ts">
import { onMounted, provide, ref, onBeforeUnmount } from "vue";

/* data */
const doc = ref();
const scrollTop = ref(0);
const clientHeight = ref(0);
const renderCount = ref(0);

/* provide */
provide("doc-ref", doc);
provide("doc-scroll-top", scrollTop);
provide("doc-client-height", clientHeight);
provide("doc-render-count", renderCount);

/* methods */
function getScrollTop(e) {
  const padding = parseFloat(getComputedStyle(e.target).paddingTop);
  scrollTop.value = e.target.scrollTop - padding;
  clientHeight.value = e.target.clientHeight;
}

/* mounted */
onMounted(() => {
  doc.value.addEventListener("scroll", getScrollTop);
});

/* unmounted */
onBeforeUnmount(() => {
  doc.value.removeEventListener("scroll", getScrollTop);
});
</script>
<template>
  <div class="j-doc" ref="doc">
    <slot></slot>
  </div>
</template>
