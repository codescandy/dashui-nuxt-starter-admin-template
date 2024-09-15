<script setup>
import { Step } from "./__code";

const value = ref(0);
</script>

<template>
  <div id="step">
    <GlobalsIntro title="Step">
      Using the <code>step</code> prop you can control the precision of the slider, and how much it
      should move each step.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Step">
      <v-slider v-model="value" :min="0" :max="1" :step="0.2" thumb-label />
    </GlobalsCodePre>
  </div>
</template>
