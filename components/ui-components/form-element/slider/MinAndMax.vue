<script setup>
import { MinAndMax } from "./__code";

const min = ref(-50);
const max = ref(90);
const slider = ref(40);
</script>

<template>
  <div id="min-and-max">
    <GlobalsIntro title="Min and Max">
      You can set <code>min</code> and <code>max</code> values of sliders.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="MinAndMax">
      <v-slider v-model="slider" :max="max" :min="min" :step="1" />

      <global-text-field
        v-model="slider"
        type="number"
        placeholder="10"
        style="max-inline-size: 5rem"
      />
    </GlobalsCodePre>
  </div>
</template>
