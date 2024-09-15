<script setup>
import { Basic } from "./__code";

const sliderValue = ref(30);
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-slider</code> component is a better visualization of the number input.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Basic">
      <v-slider />
      <v-slider v-model="sliderValue" />
    </GlobalsCodePre>
  </div>
</template>
