<script setup>
import { Step } from "./__code";

const sliderValues = ref([20, 40]);
</script>

<template>
  <div id="step">
    <GlobalsIntro title="Step">
      <code>v-range-slider</code> can have steps other than 1. This can be helpful for some
      applications where you need to adjust values with more or less accuracy.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Step">
      <v-range-slider v-model="sliderValues" step="10" />
    </GlobalsCodePre>
  </div>
</template>
