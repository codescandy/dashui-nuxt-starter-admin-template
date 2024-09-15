<script setup>
import { TrueAndFalseValue } from "./__code";

const switch1 = ref(1);
const switch2 = ref("Show");
</script>

<template>
  <div id="true-and-false-value">
    <GlobalsIntro titlek="True and False Value">
      Use <code>false-value</code> and <code>true-value</code> prop to sets value for truthy and
      falsy state
    </GlobalsIntro>
    <GlobalsCodePre :code="TrueAndFalseValue" flex margin-l>
      <v-switch v-model="switch1" :label="switch1.toString()" :true-value="1" :false-value="0" />

      <v-switch
        v-model="switch2"
        :label="switch2.toString()"
        true-value="Show"
        false-value="Hide"
      />
    </GlobalsCodePre>
  </div>
</template>
