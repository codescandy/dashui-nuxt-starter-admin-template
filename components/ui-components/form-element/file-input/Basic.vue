<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-file-input</code> component is used to selecting files.
    </GlobalsIntro>

    <GlobalsCodePre :code="Basic">
      <v-file-input label="File input" />
    </GlobalsCodePre>
  </div>
</template>
