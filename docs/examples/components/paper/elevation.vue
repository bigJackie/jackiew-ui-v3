<template>
  <j-container>
    <j-row>
      <j-col
        class="pa-3"
        v-for="elevation in elevations"
        :key="elevation"
        cols="24"
        lg="12"
        xl="6"
      >
        <j-paper class="pa-12 flex" color="grey-300">
          <j-paper
            :elevation="elevation"
            class="mx-auto flex align-center justify-center"
            height="100"
            width="100"
            color="white"
          >
            {{ elevation }}
          </j-paper>
        </j-paper>
      </j-col>
    </j-row>
  </j-container>
</template>

<script setup lang="ts">
const elevations = [6, 12, 18, 24];
</script>
