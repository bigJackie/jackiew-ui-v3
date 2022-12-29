<script setup lang="ts">
defineProps({
  // 绝对定位
  absolute: { type: Boolean, default: false },
  // 固定定位
  fixed: { type: Boolean, default: false },
  // 底部对齐
  bottom: { type: Boolean, default: false },
  // 左对齐
  left: { type: Boolean, default: false },
  // 右对齐
  right: { type: Boolean, default: false },
  // 顶部对齐
  top: { type: Boolean, default: false },
  // 颜色
  color: { type: String, default: undefined },
  // 禁用
  disabled: { type: Boolean, default: false },
  // 海拔
  elevation: { type: [Number, String], default: undefined },
  // 高度
  height: { type: [Number, String], default: undefined },
  // 宽度
  width: { type: [Number, String], default: undefined },
  // 最大高度
  maxHeight: { type: [Number, String], default: undefined },
  // 最大宽度
  maxWidth: { type: [Number, String], default: undefined },
  // 最小高度
  minHeight: { type: [Number, String], default: undefined },
  // 最小宽度
  minWidth: { type: [Number, String], default: undefined },
  // 线框
  outlined: { type: Boolean, default: false },
  // 圆角
  rounded: { type: Boolean, default: false },
  // 对角圆角
  shaped: { type: Boolean, default: false },
  // 自定义元素标签
  tag: { type: String, default: "div" },
  // 移除圆角
  tile: { type: Boolean, default: false },
  // 点击波纹效果
  clickable: { type: Boolean, default: false },
});
</script>

<template>
  <component
    v-waves="clickable"
    :is="tag"
    :style="{
      backgroundColor: color,
      width: `${parseInt(width as string)}px`,
      height: `${parseInt(height as string)}px`,
      maxWidth: `${parseInt(maxWidth as string)}px`,
      maxHeight: `${parseInt(maxHeight as string)}px`,
      minWidth: `${parseInt(minWidth as string)}px`,
      minHeight: `${parseInt(minHeight as string)}px`,
      position: absolute || fixed ? (fixed ? 'fixed' : 'absolute') : undefined ,
      bottom: bottom ? '0px' : undefined,
      left: left ? '0px' : undefined,
      right: right ? '0px' : undefined,
      top: top ? '0px' : undefined,
    }"
    :class="[{
      'is-disabled': disabled,
      'is-outlined': outlined,
      'is-rounded': rounded,
      'is-shaped': shaped,
      'is-tile': tile,
      },
      'j-paper',
      `elevation-${parseInt(elevation as string)}`,
      color,
    ]"
  >
    <slot></slot>
  </component>
</template>
