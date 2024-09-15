<script setup>
import { Thumb } from "./__code";

const satisfactionEmojis = ["😭", "😢", "☹️", "🙁", "😐", "🙂", "😊", "😁", "😄", "😍"];

const slider = ref(45);
</script>

<template>
  <div id="thumb">
    <GlobalsIntro title="Thumb">
      You can display a thumb label while sliding or always with the <code>thumb-label</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Thumb">
      <div class="text-caption">Show thumb when using slider</div>
      <v-slider v-model="slider" thumb-label />
      <div class="text-caption">Always show thumb label</div>
      <v-slider v-model="slider" thumb-label="always" />
      <div class="text-caption">Custom thumb size</div>
      <v-slider v-model="slider" :thumb-size="30" thumb-label="always" />
      <div class="text-caption">Custom thumb label</div>
      <v-slider v-model="slider" thumb-label="always">
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </v-slider>
    </GlobalsCodePre>
  </div>
</template>
