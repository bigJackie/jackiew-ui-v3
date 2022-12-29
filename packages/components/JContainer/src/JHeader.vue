<script setup lang="ts">
import { computed } from "vue";

/* props */
const props = defineProps({
  height: { type: [String, Number], default: "60px" },
});

/* computed */
const h = computed(() => {
  if (isNaN(parseInt(props.height as string))) {
    return "60px";
  } else return `${parseInt(props.height as string)}px`;
});
</script>
<template>
  <div class="j-header" :style="{ height: h }">
    <slot></slot>
  </div>
</template>
