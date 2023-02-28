<script setup lang="ts">
import { computed, useSlots } from "vue";

/* data */
const tags = ["JHeader", "JAppBar", "JFooter"];

/* props */
const props = defineProps({
  direction: String,
  app: { type: Boolean, default: false },
  absolute: { type: Boolean, default: false },
});

/* computed */
const isVertical = computed(() => {
  if (props.direction === "vertical") return true;

  /* if slots has tag which in tags make container flex-direction to vertical*/
  return !!useSlots().default
    ? useSlots().default!().some(vnode => tags.some(tag => (<any>vnode).type["__name"] === tag))
    : false;
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
