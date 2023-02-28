<script setup lang="ts">
import { inject } from "vue";

/* props */
defineProps({
  // 默认列数
  cols: { type: [Number, String], default: 24 },
  xs: { type: [Number, String], default: undefined },
  sm: { type: [Number, String], default: undefined },
  md: { type: [Number, String], default: undefined },
  lg: { type: [Number, String], default: undefined },
  xl: { type: [Number, String], default: undefined },
  // 默认偏移
  offset: { type: [Number, String], default: undefined },
  offsetXs: { type: [Number, String], default: undefined },
  offsetSm: { type: [Number, String], default: undefined },
  offsetMd: { type: [Number, String], default: undefined },
  offsetLg: { type: [Number, String], default: undefined },
  offsetXl: { type: [Number, String], default: undefined },
});

/* inject */

const gap: number = inject("row-gap", 0);
</script>
<template>
  <div
    class="j-col"
    :class="[
      `col-${parseInt(cols as string)}`,
      xs ? `col-xs-${parseInt(xs as string)}` : '',
      sm ? `col-sm-${parseInt(sm as string)}` : '',
      md ? `col-md-${parseInt(md as string)}` : '',
      lg ? `col-lg-${parseInt(lg as string)}` : '',
      xl ? `col-xl-${parseInt(xl as string)}` : '',
      offset ? `col-offset-${parseInt(offset as string)}` : '',
      offsetXs ? `col-offset-xs-${parseInt(offsetXs as string)}` : '',
      offsetSm ? `col-offset-sm-${parseInt(offsetSm as string)}` : '',
      offsetMd ? `col-offset-md-${parseInt(offsetMd as string)}` : '',
      offsetLg ? `col-offset-lg-${parseInt(offsetLg as string)}` : '',
      offsetXl ? `col-offset-xl-${parseInt(offsetXl as string)}` : '',
    ]"
    :style="{ padding: `0 ${gap / 2}px` }"
  >
    <slot></slot>
  </div>
</template>
