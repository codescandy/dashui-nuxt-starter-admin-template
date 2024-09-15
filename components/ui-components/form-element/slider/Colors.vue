<script setup>
import { Colors } from "./__code";

const sliderColorValue = ref(25);
const sliderTrackColorValue = ref(75);
const sliderThumbColorValue = ref(50);
</script>

<template>
  <div id="colors">
    <GlobalsIntro title="Colors">
      You can set the colors of the slider using the props <code>color</code>,
      <code>track-color</code> and <code>thumb-color</code>.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Colors">
      <div class="text-caption">color</div>
      <v-slider v-model="sliderColorValue" color="error" />
      <div class="text-caption">track-color</div>
      <v-slider v-model="sliderTrackColorValue" track-color="error" />
      <div class="text-caption">thumb-color</div>
      <v-slider v-model="sliderThumbColorValue" thumb-color="error" thumb-label="always" />
    </GlobalsCodePre>
  </div>
</template>
