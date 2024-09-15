<script setup>
import { Basic } from "./__code";

const sliderValues = ref([10, 60]);
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-slider</code> component is a better visualization of the number input.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Basic">
      <v-range-slider v-model="sliderValues" />
    </GlobalsCodePre>
  </div>
</template>
