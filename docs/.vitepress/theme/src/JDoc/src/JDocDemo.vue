<script setup lang="ts">
/* props */
const props = defineProps({
  demo: { type: Object, default: undefined },
});
</script>
<template>
  <ClientOnly>
    <component :is="demo" v-bind="$attrs"></component>
  </ClientOnly>
</template>
