<script setup>
import { Striped } from "./__code";
</script>

<template>
  <div id="striped">
    <GlobalsIntro title="Striped">
      The <code>striped</code> prop is used to apply striped background.
    </GlobalsIntro>
    <GlobalsCodePre :code="Striped" margin-l>
      <v-progress-linear color="rgb(var(--v-theme-primary))" model-value="75" striped />
      <v-progress-linear color="rgb(var(--v-theme-success))" model-value="55" striped />
      <v-progress-linear color="rgb(var(--v-theme-warning))" model-value="35" striped />
    </GlobalsCodePre>
  </div>
</template>
