<script setup lang="ts">
import { ref, inject, watch, onMounted } from "vue";
import { useData } from "vitepress";

/* data */
const { page, theme, localeIndex } = useData();
const toc_marker = ref();
const toc_item = ref();
const titles: number[] = [];

/* inject */
const scroll_top = inject("doc-scroll-top", 0);
const client_height = inject("doc-client-height", 0);
const renderCount = inject("doc-render-count", ref(0));
const doc = inject("doc-ref", undefined);
let active_toc = 0;
let last_scroll_top = undefined;

/* watch */
let t = {};
watch(renderCount, val => {
  if (!t.cleared && !!toc_item.value)
    t = new Timeout(() => {
      titles.length = 0;
      toc_item.value.forEach(el => {
        const id = decodeURIComponent((el as HTMLAnchorElement).href!.split("#")[1]);
        const title = document.getElementById(id)!.offsetTop;
        titles.push(title);
      });
      t.clear();
    }, 250);
});

watch(scroll_top, val => {
  if (!!last_scroll_top && !!toc_item.value) {
    if (val > last_scroll_top) {
      if (val >= titles[active_toc + 1]) setActiveToc(toc_item.value[active_toc + 1], active_toc + 1);
    } else {
      if (val <= titles[active_toc] && active_toc > 0) setActiveToc(toc_item.value[active_toc - 1], active_toc - 1);
    }
    if (active_toc == toc_item.value.length - 2) {
      if (client_height.value + val > titles[active_toc + 1])
        setActiveToc(toc_item.value[active_toc + 1], active_toc + 1);
    }
  }
  last_scroll_top = val;
});

/* mounted */
onMounted(() => {
  const href = window.location.href;
  if (!!href && !!toc_item.value && !!href.split("#")[1]) {
    toc_item.value.findIndex((item, index) => {
      if (href == item.href) {
        setActiveToc(item, index);
        if (active_toc > 0) {
          setTimeout(() => {
            scrollTo(index);
          }, 280);
        }
      }
    });
  } else if (!!toc_item.value) {
    const el = toc_item.value[active_toc];
    setActiveToc(el, active_toc);
  }
});

/* methods */
function Timeout(fn, interval) {
  var id = setTimeout(fn, interval);
  this.cleared = true;
  this.clear = function () {
    this.cleared = false;
    clearTimeout(id);
  };
}
function handleClick({ target: el }: Event) {
  const id = "#" + (el as HTMLAnchorElement).href!.split("#")[1].split("#")[1];
  const heading = document.querySelector<HTMLAnchorElement>(decodeURIComponent(id));
  /*  */
  toc_item.value.findIndex((item, index) => {
    if (item == el) {
      scrollTo(index);

      if (index != active_toc) setActiveToc(el, index);
    }
  });
}
function scrollTo(index: number) {
  doc.value.scrollTo({
    top: titles[index] + parseFloat(getComputedStyle(doc.value).paddingTop) + 2,
    behavior: "smooth",
  });
}
function setActiveToc(el, index: number) {
  active_toc = index;
  toc_marker.value.style.top = `${
    el.offsetTop + (parseFloat(getComputedStyle(el).height) - parseFloat(getComputedStyle(toc_marker.value).height)) / 2
  }px`;
}
</script>

<template>
  <div class="j-doc-toc">
    <div class="j-toc-content">
      <div class="j-outline-marker" ref="toc_marker" />

      <div class="j-outline-title">
        {{ theme.outlineTitle[localeIndex] || "On this page" }}
      </div>

      <nav aria-labelledby="doc-outline-aria-label">
        <ul>
          <li v-for="{ title, link, children } in page.headers" class="j-outline-li">
            <a class="j-outline-link" :href="link" @click="handleClick" ref="toc_item">
              {{ title }}
            </a>
            <ul v-if="children">
              <li v-for="{ title, link } in children" class="j-outline-li">
                <a class="j-outline-link" :href="link" @click="handleClick" ref="toc_item">
                  {{ title }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
