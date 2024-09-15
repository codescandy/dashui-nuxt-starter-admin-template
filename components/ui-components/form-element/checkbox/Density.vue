<script setup>
import { Density } from "./__code";

const checkboxOne = ref(true);
const checkboxTwo = ref(false);

const capitalizedLabel = (label) => {
  const convertLabelText = label.toString();

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1);
};
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      Use <code>density</code> prop to reduces the input height. Available options are:
      <code>default</code>, <code>comfortable</code>, and <code>compact</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density" flex>
      <v-checkbox
        v-model="checkboxOne"
        density="comfortable"
        :label="capitalizedLabel(checkboxOne)"
      />
      <v-checkbox
        v-model="checkboxTwo"
        density="comfortable"
        :label="capitalizedLabel(checkboxTwo)"
      />
    </GlobalsCodePre>
  </div>
</template>
