<script setup lang="ts">
defineProps({
  name: { type: String, default: "" },
});
</script>

<template>
  <div class="j-list-item-icon">
    <j-icon color="currentColor">
      <slot></slot>
    </j-icon>
  </div>
</template>
