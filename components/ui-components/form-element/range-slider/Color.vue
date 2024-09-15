<script setup>
import { Color } from "./__code";

const sliderValues = ref([10, 60]);
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      Use <code>color</code> prop to the sets the slider color. <code>track-color</code> prop to
      sets the color of slider's unfilled track.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Color">
      <v-range-slider v-model="sliderValues" color="success" track-color="warning" />
    </GlobalsCodePre>
  </div>
</template>
