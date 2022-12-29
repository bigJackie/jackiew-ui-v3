<script setup lang="ts">
import { provide, ref } from "vue";
import type { Ref } from "vue";

/* emits */
defineEmits(["update:modelValue"]);

/* props */
const props = defineProps({
  // 设置列表组中的活动列表项
  modelValue: { type: [String, Number, Array], default: undefined },
  // 根元素上使用的自定义标签
  tag: { type: String, default: "div" },
  // 颜色
  color: {},
  // 强制始终选择一个值
  mandatory: { type: Boolean, default: false },
  // 强制始终选择一个值
  max: { type: [Number, String], default: undefined },
  // 允许多个选择
  multiple: { type: Boolean, default: false },
});

/* data */
const active = ref(0); // 当前展开

/* provide */
provide("list-item-activable", true);
provide("list-item-idx", ref(0)); // 子组件id
provide("list-item-active", ref(props.modelValue)); // 当前激活item
provide("list-item-mandatory", props.mandatory);
provide("list-item-multiple", props.multiple);
provide("list-item-max", props.max);
</script>
<template>
  <component :is="tag" class="j-list-item-group flex flex-column">
    <slot></slot>
  </component>
</template>
