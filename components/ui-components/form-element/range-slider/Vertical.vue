<script setup>
import { Vertical } from "./__code";

const sliderValues = ref([20, 40]);
</script>

<template>
  <div id="vertical">
    <GlobalsIntro title="Vertical">
      You can use the <code>vertical</code> prop to switch sliders to a vertical orientation. If you
      need to change the height of the slider, use css.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Vertical">
      <v-range-slider v-model="sliderValues" direction="vertical" />
    </GlobalsCodePre>
  </div>
</template>
