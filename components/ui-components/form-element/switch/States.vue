<script setup>
import { States } from "./__code";

const switchOn = ref("on");
const switchOnDisabled = ref("on");
const switchOnLoading = ref("on");
</script>

<template>
  <div id="states">
    <GlobalsIntro title="States">
      <code>v-switch</code> can have different states such as <code>default</code>,
      <code>disabled</code>, and <code>loading</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="States" flex margin-l>
      <v-switch v-model="switchOn" value="on" label="On" />

      <v-switch label="Off" />

      <v-switch v-model="switchOnDisabled" value="on" disabled label="On disabled" />

      <v-switch disabled label="Off disabled" />

      <v-switch v-model="switchOnLoading" loading="warning" value="on" label="On loading" />

      <v-switch loading="warning" label="Off loading" />
    </GlobalsCodePre>
  </div>
</template>
