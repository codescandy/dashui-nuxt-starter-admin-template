<script setup>
import { AutoGrow } from "./__code";

const textareaValue = ref(
  "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
);
</script>

<template>
  <div id="auto-grow">
    <GlobalsIntro title="Auto Grow">
      When using the <code>auto-grow</code> prop, textarea's will automatically increase in size
      when the contained text exceeds its size.
    </GlobalsIntro>
    <GlobalsCodePre :code="AutoGrow">
      <global-textarea
        v-model="textareaValue"
        label="Auto Grow"
        placeholder="Placeholder Text"
        auto-grow
      />
    </GlobalsCodePre>
  </div>
</template>
