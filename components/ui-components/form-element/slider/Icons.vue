<script setup>
import { Icons } from "./__code";

const mediaSlider = ref(0);
const alarmSlider = ref(0);
const zoomInOut = ref(10);
</script>

<template>
  <div id="icons">
    <GlobalsIntro title="Icons">
      You can add icons to the slider with the <code>append-icon</code> and
      <code>prepend-icon</code> props.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Icons">
      <v-slider v-model="mediaSlider" prepend-icon="tabler-volume" />
      <v-slider v-model="alarmSlider" append-icon="tabler-alarm" />
      <v-slider v-model="zoomInOut" append-icon="tabler-minus" prepend-icon="tabler-plus" />
    </GlobalsCodePre>
  </div>
</template>
