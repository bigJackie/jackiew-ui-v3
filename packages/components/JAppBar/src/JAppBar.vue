<template>
  <div class="j-app-bar">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // // 绝对定位
  absolute: { type: Boolean, default: false },
  // // 应用程序
  app: { type: Boolean, default: false },
  // // 底部对齐
  bottom: { type: Boolean, default: false },
  // // 颜色
  color: { type: String, dafault: "#fff" },
  // // 海拔
  elevation: { type: [Number, String], default: undefined },
  // // 平坦 删除框的阴影
  flat: { type: Boolean, default: false },
  // // 线框
  outlined: { type: Boolean, default: false },
  // // 圆角
  rounded: { type: Boolean, default: false },
  // // 对角圆角
  shaped: { type: Boolean, default: false },

  src: { type: [String, Object], default: undefined },
  // // 组件显示
  value: { type: Boolean, default: true },
});
</script>
