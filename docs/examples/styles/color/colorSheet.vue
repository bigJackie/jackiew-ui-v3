<script lang="ts" setup>
import { colors } from "./colors";
</script>

<template>
  <j-container class="flex flex-wrap">
    <j-row gap="20" v-for="(color, id) in colors" :key="id">
      <j-paper v-for="(val, idx) in color" :style="{ 'background-color': val }">{{ idx }}</j-paper>
    </j-row>
  </j-container>
</template>
