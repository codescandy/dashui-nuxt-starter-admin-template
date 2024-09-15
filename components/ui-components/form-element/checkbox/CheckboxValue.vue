<script setup>
import { CheckboxValue } from "./__code";

const checkbox = ref(1);
const checkboxString = ref("Show");
</script>

<template>
  <div id="checkbox-value">
    <GlobalsIntro title="Checkbox value">
      Use <code>false-value</code> and <code>true-value</code> prop to sets value for truthy and
      falsy state
    </GlobalsIntro>
    <GlobalsCodePre :code="CheckboxValue" flex>
      <v-checkbox
        v-model="checkbox"
        :true-value="1"
        :false-value="0"
        :label="`${checkbox.toString()}`"
      />

      <v-checkbox
        v-model="checkboxString"
        true-value="Show"
        false-value="Hide"
        color="success"
        :label="`${checkboxString.toString()}`"
      />
    </GlobalsCodePre>
  </div>
</template>
