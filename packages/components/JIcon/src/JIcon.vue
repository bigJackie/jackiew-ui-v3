<script setup lang="ts">
import { ref, useSlots, onMounted, onUpdated } from "vue";
import type { Ref } from "vue";

/* props */
const props = defineProps({
  // 自定义元素标签
  tag: { type: String, default: "i" },
  // 大小
  size: { type: [String, Number], default: "24" },
  // 颜色
  color: { type: String, default: "rgba(0,0,0,.54)" },
  // 禁用
  disabled: { type: Boolean, default: false },
  // 大图标
  large: { type: Boolean, default: false },
  // 小图标
  small: { type: Boolean, default: false },
  // 更小图标
  xSmall: { type: Boolean, default: false },
  // 更大图标
  xLarge: { type: Boolean, default: false },
  // 按钮放置在元素左边时，增加margin
  left: { type: Boolean, default: false },
  // 图标放置在元素右边时，增加margin
  right: { type: Boolean, default: false },
  // 镜像翻转
  flip: { type: String, default: "off" },
  // 旋转
  rotate: { type: [String, Number], default: 0 },
});

/* data */
let icon: Ref<string> = ref("");

/* methods */
// 初始化
function init() {
  if (!!useSlots().default) {
    let name: any = useSlots().default!();
    while (typeof name != "string") {
      if (!name) return;
      name = name[0].children;
    }
    let prefix: string;
    name = name.split(" ").join("");
    prefix = name.split("-")[0];
    icon.value = `${prefix} ${name}`;
  }
}
// 获取Icon大小
function getSize() {
  if (props.xSmall) return "12px";
  else if (props.small) return "16px";
  else if (props.large) return "36px";
  else if (props.xLarge) return "40px";
  else return `${parseInt(props.size as string)}px`;
}

/* mounted */
onMounted(() => {
  init();
});

/* updated */
onUpdated(() => {
  init();
});
</script>

<template>
  <component
    :is="tag"
    :style="{
      'font-size': getSize(),
      color: disabled ? 'rgba(0,0,0,.4)' : color,
      cursor: disabled
        ? 'default'
        : $attrs.onClick ||
          $attrs.onDblclick ||
          $attrs.onMousedown ||
          $attrs.onMouseup
        ? 'pointer'
        : 'default',
      transform: `rotateZ(${parseFloat(<string>rotate)}deg) scale(${
        flip == 'horizontal' || flip == 'both' ? -1 : 1
      }, ${flip == 'vertical' || flip == 'both' ? -1 : 1})`,
      '-moz-transform': `rotateZ(${parseFloat(<string>rotate)}deg) scale(${
        flip == 'horizontal' || flip == 'both' ? -1 : 1
      }, ${flip == 'vertical' || flip == 'both' ? -1 : 1})`,
      '-webkit-transform': `rotateZ(${parseFloat(<string>rotate)}deg) scale(${
        flip == 'horizontal' || flip == 'both' ? -1 : 1
      }, ${flip == 'vertical' || flip == 'both' ? -1 : 1})`,
      '-o-transform': `rotateZ(${parseFloat(<string>rotate)}deg) scale(${
        flip == 'horizontal' || flip == 'both' ? -1 : 1
      }, ${flip == 'vertical' || flip == 'both' ? -1 : 1})`,
    }"
    :class="['j-icon', icon, { 'mr-2': left, 'ml-2': right }]"
  ></component>
</template>
