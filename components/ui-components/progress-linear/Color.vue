<script setup>
import { Color } from "./__code";
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      Use the props <code>color</code> and <code>background-color</code> to set colors.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color" margin-l>
      <v-progress-linear model-value="15" bg-color="primary" color="primary" />
      <v-progress-linear model-value="30" bg-color="secondary" color="secondary" />
      <v-progress-linear model-value="45" bg-color="success" color="success" />
    </GlobalsCodePre>
  </div>
</template>
