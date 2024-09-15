<script setup>
import { Color } from "./__code";
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      Alternate colors can be applied to
      <code>v-progress-circular</code> using the <code>color</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-progress-circular model-value="50" color="primary" />
      <v-progress-circular model-value="50" color="secondary" />
      <v-progress-circular model-value="50" color="success" />
      <v-progress-circular model-value="50" color="info" />
      <v-progress-circular model-value="50" color="warning" />
      <v-progress-circular model-value="50" color="error" />
    </GlobalsCodePre>
  </div>
</template>
