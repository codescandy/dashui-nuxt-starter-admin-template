<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-rating</code> component provides a simple interface for gathering user feedback.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-rating />
    </GlobalsCodePre>
  </div>
</template>
