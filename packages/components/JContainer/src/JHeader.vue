<script setup lang="ts">
import { computed } from "vue";

/* props */
const props = defineProps({
  height: { type: [String, Number], default: "60px" },
});

/* computed */
const height = computed(() => `${parseInt(<string>props.height)}px`);
</script>

<template>
  <header class="j-header" :style="{ height: height }">
    <slot></slot>
  </header>
</template>
