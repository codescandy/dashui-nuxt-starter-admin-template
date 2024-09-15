<script setup>
import { Indeterminate } from "./__code";
</script>

<template>
  <div id="indeterminate">
    <GlobalsIntro title="Color">
      Using the <code>indeterminate</code> prop, a
      <code>v-progress-circular</code>
      continues to animate indefinitely.
    </GlobalsIntro>
    <GlobalsCodePre :code="Indeterminate">
      <v-progress-circular indeterminate color="primary" />
      <v-progress-circular indeterminate color="secondary" />
      <v-progress-circular indeterminate color="success" />
      <v-progress-circular indeterminate color="info" />
      <v-progress-circular indeterminate color="warning" />
      <v-progress-circular indeterminate color="error" />
    </GlobalsCodePre>
  </div>
</template>
