<script setup>
import { Basic } from "./__code";

const basicEditorContent = ref(
  "<p> This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though. </p> <br/> <p> The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different. </p> "
);
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic" />

    <GlobalsCodePre :code="Basic">
      <global-editor v-model="basicEditorContent" />
    </GlobalsCodePre>
  </div>
</template>
