<script setup>
import { Basic } from "./__code";

const checkboxOne = ref(true);
const checkboxTwo = ref(false);

const capitalizedLabel = (label) => {
  const convertLabelText = label.toString();

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1);
};
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      <code>v-checkbox</code> in its simplest form provides a toggle between 2 values.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic" flex>
      <v-checkbox v-model="checkboxOne" :label="capitalizedLabel(checkboxOne)" />
      <v-checkbox v-model="checkboxTwo" :label="capitalizedLabel(checkboxTwo)" />
    </GlobalsCodePre>
  </div>
</template>
