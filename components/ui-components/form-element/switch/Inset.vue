<script setup>
import { Inset } from "./__code";

const insetSwitch1 = ref(true);
const insetSwitch2 = ref(false);
</script>

<template>
  <div id="inset">
    <GlobalsIntro title="Inset">
      To change the default <code>inset</code> switch, simply modify the inset prop to a
      <code>false</code> value.
    </GlobalsIntro>
    <GlobalsCodePre :code="Inset" flex margin-l>
      <v-switch
        v-model="insetSwitch1"
        :inset="false"
        :label="`Switch 1: ${insetSwitch1.toString()}`"
      />
      <v-switch
        v-model="insetSwitch2"
        :inset="false"
        :label="`Switch 2: ${insetSwitch2.toString()}`"
      />
    </GlobalsCodePre>
  </div>
</template>
