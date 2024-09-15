<script setup>
import { Basic } from "./__code";

const toggleSwitch = ref(true);
const toggleFalseSwitch = ref(false);

const capitalizedLabel = (label) => {
  const convertLabelText = label.toString();

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1);
};
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      A <code>v-switch</code> in its simplest form provides a toggle between 2 values.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic" flex margin-l>
      <v-switch v-model="toggleSwitch" :label="capitalizedLabel(toggleSwitch)" />
      <v-switch v-model="toggleFalseSwitch" :label="capitalizedLabel(toggleFalseSwitch)" />
    </GlobalsCodePre>
  </div>
</template>
