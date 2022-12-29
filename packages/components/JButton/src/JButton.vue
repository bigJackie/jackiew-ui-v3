<script setup lang="ts">
const props = defineProps({
  // 扩展按钮空间至100%
  block: { type: Boolean, default: false },
  // 圆形
  circle: { type: Boolean, default: false },
  // 移除按钮点击波纹效果
  depressed: { type: Boolean, default: false },
  // 锚点
  href: { type: Boolean, default: false },
  // 图标按钮
  icon: { type: Boolean, default: false },
  // 加载
  loading: { type: Boolean, default: false },
  // 圆形
  rounded: { type: Boolean, default: false },
  // 自定义元素标签
  tag: { type: String, default: "button" },
  // 和href一起使用
  target: { type: String, default: undefined },
  // 文字按钮
  text: { type: Boolean, default: false },
  // 路由
  to: { type: Boolean, default: false },
  // type属性
  type: { type: String, default: "button" },
});
</script>
<template>
  <j-paper :tag="tag" clickable :type="type" class="j-button" :class="{}">
    <slot></slot>
  </j-paper>
</template>
