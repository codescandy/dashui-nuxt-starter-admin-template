<script setup>
import { ThumbLabel } from "./__code";

const seasons = ["Winter", "Spring", "Summer", "Fall"];

const icons = ["tabler-snowflake", "tabler-leaf", "tabler-flame", "tabler-droplet"];

const sliderValues = ref([1, 2]);
</script>

<template>
  <div id="thumb-label">
    <GlobalsIntro title="Thumb Label">
      Using the <code>tick-labels</code> prop along with the <code>thumb-label</code> slot, you can
      create a very customized solution.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="ThumbLabel">
      <v-range-slider
        v-model="sliderValues"
        :tick="seasons"
        min="0"
        max="3"
        :step="1"
        show-ticks="always"
        thumb-label
        tick-size="4"
      >
        <template #thumb-label="{ modelValue }">
          <v-icon :icon="icons[modelValue]" />
        </template>
      </v-range-slider>
    </GlobalsCodePre>
  </div>
</template>
