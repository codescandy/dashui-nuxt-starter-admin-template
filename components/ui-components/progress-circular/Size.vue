<script setup>
import { Size } from "./__code";
</script>

<template>
  <div id="size">
    <GlobalsIntro title="Size">
      The <code>size</code> and <code>width</code> props allow you to easily alter the size and
      width of the <code>v-progress-circular</code> component.
    </GlobalsIntro>
    <GlobalsCodePre :code="Size">
      <v-progress-circular :size="30" width="3" indeterminate color="primary" />
      <v-progress-circular :size="40" indeterminate color="secondary" />
      <v-progress-circular :size="50" indeterminate color="success" />
      <v-progress-circular :size="60" indeterminate color="info" />
    </GlobalsCodePre>
  </div>
</template>
