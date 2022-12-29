<script setup lang="ts">
import { onMounted, provide, ref } from "vue";

/* props */
const props = defineProps({
  // 降低高度
  dense: { type: Boolean, default: false },
  // 禁用子级j-list-item
  disabled: { type: Boolean, default: false },
  // 删除 j-list-item 上突出显示的背景
  flat: { type: Boolean, default: false },
  // 减小 j-list-item 的宽度并圆角化
  nav: { type: Boolean, default: false },
  // List-group 唯一
  singleGroup: { type: Boolean, default: false },
  twoLine: Boolean,
  threeLine: Boolean,
});

/* data */
const expanded = ref([]); // 展开列表
const idxs = ref(0); // group_id
const expand = ref(0); // 当前展开
const type = "list"; // 类型

/* provide */
provide("list-group-disabled", ref(props.disabled)); //父组件是否禁用
provide("list-group-idx", idxs); // 子组件id
provide("list-group-expand", expand); // group组当前展开
provide("list-group-type", type); // 类型

/* mounted */
onMounted(() => {});
</script>

<template>
  <j-paper
    v-bind="$attrs"
    class="j-list flex flex-column"
    :class="[
      {
        'is-dense': dense,
        'is-disabled': disabled,
        'is-flat': flat,
        'is-nav': nav,
      },
    ]"
  >
    <slot></slot>
  </j-paper>
</template>
