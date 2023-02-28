<script setup lang="ts">
/* emits */
defineEmits(["update:modelValue"]);

/* props */
defineProps({
  // Whether to open the bar or close
  modelValue: { type: Boolean, default: true },
  // Background color
  color: { type: String, default: undefined },
  // Width
  width: { type: [Number, String], default: "256px" },
  // Height
  height: { type: [Number, String], default: "100%" },
  // Background image
  src: { type: String },
  // Image flatten
  fullSrc: { type: Boolean, default: false },
  // Mini-bar
  mini: { type: Boolean, default: false },
  // Hide border
  noBorder: { type: Boolean, default: false },
  // Display navigation-bar on right hand
  right: { type: Boolean, default: false },
});
</script>
<template>
  <j-aside
    class="j-navigation-bar"
    :class="{
      'is-hide': !modelValue,
      'is-mini': mini,
      'is-no-border': noBorder,
      'is-right': right,
    }"
    :style="{
      width: `${parseInt(<string>width)}px`,
      height: height === '100%' ? '100%' : `${parseInt(<string>height)}px`,
      backgroundColor: color,
      backgroundImage: `url('${src}')`,
      backgroundSize: fullSrc ? '100% 100%' : 'auto 100%',
    }"
  >
    <div class="j-navigation-bar__prepend">
      <slot name="prepend"></slot>
    </div>
    <slot></slot>
    <div class="j-navigation-bar__append">
      <slot name="append"></slot>
    </div>
  </j-aside>
</template>
