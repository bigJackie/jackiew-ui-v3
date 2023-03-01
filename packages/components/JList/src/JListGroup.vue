<script setup lang="ts">
import { onMounted, ref, provide, inject, watch } from "vue";
import type { Ref } from "vue";

/* emits */
defineEmits(["update:modelValue"]);

/* props */
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  // 组件头部附加图标
  prependIcon: { type: String, default: "" },
  // 组件尾部附加图标
  appendIcon: { type: String, default: "mdi-menu-up" },
  // 去除头部Icon距离
  noIcon: { type: Boolean, default: false },
  // head标题
  title: { type: String, default: "" },
  // 禁用
  disabled: { type: Boolean, default: false },
  // 自动折叠
  autoFold: { type: Boolean, default: false },
  // 独立group
  independent: { type: Boolean, default: false },
});

/* data */
const isExpanded = ref(props.modelValue); //是否展开
const content_height = ref(0); //容器高度
const autoFold = ref(props.autoFold); //自动折叠
const expanded = ref(0); //group组当前展开
const group = ref(null); //组件dom
const type = "group"; //类型
const idxs = ref(0); //子组件id
let idx: number; //组件id

/* provide */
provide("list-group-disabled", ref(props.disabled)); //父组件是否禁用
provide("list-group-auto-fold", autoFold); //自动折叠
provide("list-group-expanded", isExpanded); //父容器是否展开
provide("list-group-expand", expanded); //group组当前展开
provide("list-group-type", type); //类型
provide("list-group-idx", idxs); //子组件id

provide("list-item-height", content_height); //容器高度

/* inject */
const is_disabled: Ref<boolean> = inject("list-group-disabled", ref(props.disabled)); //父组件是否禁用
const expand_id: Ref<number> = inject("list-group-expand", ref(0)); //group组当前展开
const parent_type: string = inject("list-group-type", "none"); //父组件类型
const group_id: Ref<number> = inject("list-group-idx", ref(0)); //子组件id
const list_item_height: Ref<number> | undefined = parent_type == "group" ? inject("list-item-height")! : undefined; //容器高度
const isParentExpanded: Ref<boolean> = parent_type == "group" ? inject("list-group-expanded")! : ref(true); //父容器是否展开
autoFold.value =
  parent_type == "group" ? (props.autoFold ? true : (inject("list-group-auto-fold")! as any).value) : props.autoFold; //自动折叠

/* methods */
// 初始化
function init() {
  if (!props.independent && !!group_id) {
    group_id.value++;
    idx = group_id.value;
  }
  if (!!list_item_height) {
    let height =
      parseInt(getComputedStyle(group.value!).marginBottom) +
      parseInt(getComputedStyle(group.value!).marginTop) +
      parseInt(getComputedStyle(group.value!).height) +
      content_height.value;
    list_item_height.value += height;
  }
}
// 展开列表组
function expand() {
  if (!is_disabled.value) {
    isExpanded.value = true;
    if (!props.independent) expand_id.value = idx;
  }
}
// 折叠列表组
function fold() {
  isExpanded.value = false;
}

/* watcher */
// 同级组件展开
watch(expand_id, (val: number) => {
  if (val != idx && !props.independent) fold();
});
// 父组件展开
watch(isParentExpanded, (val: boolean) => {
  autoFold.value && !val ? fold() : null;
});

/* mounted */
onMounted(() => {
  init();
});
</script>

<template>
  <div ref="group" class="j-list-group flex flex-col" :style="{ '--content-height': `${content_height}px` }">
    <!-- head -->
    <div class="j-list-item__head" v-if="$slots.head" @click="isExpanded ? fold() : expand()">
      <slot name="head"></slot>
    </div>

    <j-list-item
      group-head
      :no-icon="noIcon"
      link
      class="j-list-item__head"
      :class="{ 'is-expand': isExpanded }"
      v-else
      @click="isExpanded ? fold() : expand()"
    >
      <j-list-item-icon v-show="prependIcon">{{ prependIcon }}</j-list-item-icon>

      <j-list-item-content>
        <j-list-item-title v-show="title">{{ title }}</j-list-item-title>
      </j-list-item-content>

      <j-list-item-icon class="j-list-group-icon__append" :class="{ 'is-expand': isExpanded }" v-show="appendIcon">
        {{ appendIcon }}
      </j-list-item-icon>
    </j-list-item>

    <!-- content -->
    <div class="j-list-group__content" :class="{ 'is-expand': isExpanded, 'is-disabled': is_disabled }">
      <slot></slot>
    </div>
  </div>
</template>
