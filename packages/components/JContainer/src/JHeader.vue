<script setup lang="ts">
import { computed } from "vue";

/* props */
const props = defineProps({
  height: { type: [String, Number], default: "60px" },
});

/* computed */
const h = computed(() => (isNaN(parseInt(props.height as string)) ? "60px" : `${parseInt(props.height as string)}px`));
</script>

<template>
  <div class="j-header" :style="{ height: h }">
    <slot></slot>
  </div>
</template>
