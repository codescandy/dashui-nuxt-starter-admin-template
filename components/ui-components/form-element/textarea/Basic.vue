<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <global-textarea label="Default" placeholder="Placeholder Text" />
    </GlobalsCodePre>
  </div>
</template>
