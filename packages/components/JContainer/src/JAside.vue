<script setup lang="ts">
import { computed } from "vue";

/* props */
const props = defineProps({
  width: { type: [String, Number], default: "256px" },
});

/* computed */
const w = computed(() => {
  if (isNaN(parseInt(props.width as string))) {
    return "256px";
  } else return `${parseInt(props.width as string)}px`;
});
</script>
<template>
  <nav class="j-aside" :style="{ width: w }">
    <slot></slot>
  </nav>
</template>
