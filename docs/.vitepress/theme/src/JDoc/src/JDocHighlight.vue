<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";
import md from "markdown-it";
import * as shiki from "shiki";

/* emits */
const emits = defineEmits(["highlight-height"]);

/* props */
const props = defineProps({
  source: { type: String, default: undefined },
});

/* data */
const source = ref();
const highlight = ref(null);

/* methods */
function stripTemplate(content) {
  const result = content.match(/<(template)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : "";
}

function stripScript(content) {
  const result = content.match(/<(script setup lang="ts")>([\s\S]+)<\/script>/);
  return result && result[2] ? result[2].trim() : "";
}

function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : "";
}

/* mounted */
onMounted(() => {
  shiki.setCDN("/node_modules/shiki/");

  shiki
    .getHighlighter({
      theme: "vitesse-light",
    })
    .then(highlighter => {
      // let template = stripTemplate(decodeURIComponent(props.source!));
      let template = decodeURIComponent(props.source!);
      source.value = highlighter.codeToHtml(template, { lang: "html" });
    })
    .catch(err => {
      console.log(err);
    });
});

onUpdated(() => {
  emits(
    "highlight-height",
    `${
      parseFloat(getComputedStyle(highlight.value!).height) + 2 * parseFloat(getComputedStyle(highlight.value!).padding)
    }px`
  );
});
</script>

<template>
  <div ref="highlight" v-html="source"></div>
</template>
