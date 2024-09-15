<script setup>
import { Icon } from "./__code";

const toggleCheckboxOne = ref(true);
const toggleCheckboxTwo = ref(true);
const toggleCheckboxThree = ref(true);

const capitalizedLabel = (label) => {
  const convertLabelText = label.toString();

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1);
};
</script>

<template>
  <div id="icon">
    <GlobalsIntro title="Icon">
      Use <code>false-icon</code> and <code>true-icon</code> prop to change the icon on the
      checkbox.
    </GlobalsIntro>
    <GlobalsCodePre :code="Icon" margin-l>
      <v-checkbox
        v-model="toggleCheckboxOne"
        :label="capitalizedLabel(toggleCheckboxOne)"
        true-icon="tabler-check"
        false-icon="tabler-x"
      />

      <v-checkbox
        v-model="toggleCheckboxTwo"
        :label="capitalizedLabel(toggleCheckboxTwo)"
        true-icon="tabler-alarm"
        false-icon="tabler-alarm"
        color="success"
      />

      <v-checkbox
        v-model="toggleCheckboxThree"
        :label="capitalizedLabel(toggleCheckboxThree)"
        true-icon="tabler-check"
        false-icon="tabler-circle-x"
        color="error"
      />
    </GlobalsCodePre>
  </div>
</template>
