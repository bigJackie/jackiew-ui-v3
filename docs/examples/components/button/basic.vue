<template>
  <j-container class="flex flex-wrap">
    <j-row class="flex">
      <j-button class="mr-2" color="blue" v-for="(button_item, button_id) in button_list" :key="button_id">
        {{ button_item.name }}
      </j-button>
    </j-row>
  </j-container>
</template>

<script setup lang="ts">
const button_list = [
  { name: "default", color: "" },
  { name: "default", color: "" },
  { name: "default", color: "" },
  { name: "default", color: "" },
  { name: "default", color: "" },
  { name: "default", color: "" },
];
</script>
