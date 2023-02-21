<script setup lang="ts">
import { computed } from "vue";

/* props */
const props = defineProps({
  width: { type: [String, Number], default: "256px" },
});

/* computed */
const w = computed(() => (isNaN(parseInt(props.width as string)) ? "256px" : `${parseInt(props.width as string)}px`));
</script>

<template>
  <nav class="j-aside" :style="{ width: w }">
    <slot></slot>
  </nav>
</template>
