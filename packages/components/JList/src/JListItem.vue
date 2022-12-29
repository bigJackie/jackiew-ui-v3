<script setup lang="ts">
import { onMounted, ref, inject, watch } from "vue";
import type { Ref } from "vue";

/* props */
const props = defineProps({
  // 高度
  height: { type: [Number, String], default: undefined },
  // 链接
  link: { type: Boolean, default: false },
  // 跳转路由
  to: { type: [String, Object], default: undefined },
  // 去除头部Icon距离
  noIcon: { type: Boolean, default: false },
  // 禁用S
  disabled: { type: Boolean, default: false },
  // 是否可选择文本
  textSelectable: { type: Boolean, default: false },
  // 激活状态
  active: { type: Boolean, default: false },
  // 是否为list-group的Head
  groupHead: { type: Boolean, default: false },
  // 根元素上使用的自定义标签
  tag: { type: String, default: "div" },
  // router.replace
  replace: { type: Boolean, default: false },
});

/* data */
const is_active = ref(false); // 是否激活
const item = ref(null); // 组件dom
let idx: number; // 组件id

/* inject */
const router: any = inject("vue-router", undefined);
const mandatory: boolean = inject("list-item-mandatory", false);
const multiple: boolean = inject("list-item-multiple", false);
const max: number | string | undefined = inject("list-item-max", undefined);
const activable: boolean = inject("list-item-activable", false); // 是否能激活
const group_id: Ref<number> | undefined = inject("list-item-idx", undefined); // 是否能激活
const which_active: Ref<number> = inject("list-item-active", ref(-1)); // 是否能激活
const list_item_height: Ref<number> | undefined = inject(
  "list-item-height",
  undefined
); // 组件高度
const is_disabled: Ref<boolean> = inject(
  "list-group-disabled",
  ref(props.disabled)
); // 是否禁用

/* methods */
// 初始化 使用 provide & inject 将list-item组件高度传回list-group
function init() {
  if (!!group_id && !props.groupHead) {
    group_id.value++;
    idx = group_id.value;
  }
  if (!!list_item_height) {
    let height =
      parseInt(getComputedStyle(item.value!).marginBottom) +
      parseInt(getComputedStyle(item.value!).marginTop) +
      parseInt(getComputedStyle(item.value!).height);
    list_item_height.value += height;
  }
  if (props.active && !which_active) is_active.value = true;
  if (!!which_active && idx == which_active.value) is_active.value = true;
}
function activate() {
  if (activable && !props.groupHead) {
    is_active.value = true;
    which_active.value = idx;
  }
  if (!!props.to && !!router) {
    if (!!router.replace || !!router.push)
      props.replace ? router.replace(props.to) : router.push(props.to);
    else router.go(props.to);
  }
}
function deActivate() {
  if (activable) is_active.value = false;
}

/* watch */
watch(which_active, (val: any) => {
  if (val != idx && !multiple) {
    deActivate();
  }
});

/* mounted */
onMounted(() => {
  init();
});
</script>
<template>
  <component
    :is="tag"
    ref="item"
    class="j-list-item flex justify-start align-center"
    :class="{
      'is-link': link || to,
      'is-no-icon': noIcon,
      'is-active': is_active,
      'is-diabled': is_disabled,
    }"
    :style="{
      height: `${parseInt(height as string)}px !important`,
    }"
    @click="is_active && !mandatory ? deActivate() : activate()"
  >
    <slot></slot>
  </component>
</template>
