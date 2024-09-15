<script setup>
import { Disabled } from "./__code";

const sliderValues = ref([30, 60]);
</script>

<template>
  <div id="disabled">
    <GlobalsIntro title="Disabled">
      You cannot interact with <code>disabled</code> sliders.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Disabled">
      <v-range-slider v-model="sliderValues" disabled label="Disabled" />
    </GlobalsCodePre>
  </div>
</template>
