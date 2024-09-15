<script setup>
import { Ticks } from "./__code";

const value = ref(0);
const fruits = ref(1);

const ticksLabels = {
  0: "Figs",
  1: "Lemon",
  2: "Pear",
  3: "Apple",
};
</script>

<template>
  <div id="ticks">
    <GlobalsIntro title="Ticks">
      Tick marks represent predetermined values to which the user can move the slider.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Ticks">
      <div class="text-caption">Show ticks when using slider</div>
      <v-slider v-model="value" :step="10" show-ticks />
      <div class="text-caption">Always show ticks</div>
      <v-slider v-model="value" :step="10" show-ticks="always" />
      <div class="text-caption">Tick size</div>
      <v-slider v-model="value" :step="10" show-ticks="always" tick-size="4" />
      <div class="text-caption">Tick labels</div>
      <v-slider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </GlobalsCodePre>
  </div>
</template>
