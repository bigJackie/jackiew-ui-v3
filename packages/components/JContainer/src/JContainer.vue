<script setup lang="ts">
import { computed, useSlots } from "vue";

/* props */
const props = defineProps({
  direction: String,
  app: { type: Boolean, default: false },
  absolute: { type: Boolean, default: false },
});

/* computed */
const isVertical = computed(() => {
  if (props.direction === "vertical") {
    return true;
  } else if (props.direction === "horizontal") {
    return false;
  } else {
    if (props.direction != undefined) console.warn("Container方向类型错误");
  }

  if (!!useSlots().default) {
    let children = useSlots().default!();
    return children.some((vnode) => {
      let tag = (vnode as any).type["__name"];
      return tag === "JHeader" || tag === "JAppBar" || tag === "JFooter";
    });
  } else return false;
});
</script>

<template>
  <div
    class="j-container"
    :class="{
      'is-vertical': isVertical,
      'is-app': app,
      'is-absolute': absolute,
    }"
  >
    <slot></slot>
  </div>
</template>
