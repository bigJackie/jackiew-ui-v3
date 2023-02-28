<script setup lang="ts">
import { computed } from "vue";

/* props */
const props = defineProps({
  width: { type: [String, Number], default: "256px" },
});

/* computed */
const width = computed(() => `${parseInt(<string>props.width)}px`);
</script>

<template>
  <aside class="j-aside" :style="{ width: width }">
    <slot></slot>
  </aside>
</template>
