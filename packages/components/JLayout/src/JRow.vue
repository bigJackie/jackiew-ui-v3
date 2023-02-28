<script setup lang="ts">
import { provide } from "vue";

/* props */
const props = defineProps({
  gap: { type: [Number, String], default: 0 },
});

/* provide */
provide("row-gap", props.gap);
</script>

<template>
  <div
    class="j-row"
    :style="{ margin: `0 ${-parseInt(gap as string) / 2}px`, '--row-gap': `${gap}px` }"
  >
    <slot></slot>
  </div>
</template>
