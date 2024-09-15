<script setup>
import { Indeterminate } from "./__code";
</script>

<template>
  <div id="indeterminate">
    <GlobalsIntro title="Indeterminate">
      for continuously animating progress bar,use prop <code>indeterminate</code>. This indicates
      continuous process.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Indeterminate">
      <v-progress-linear indeterminate color="primary" />
    </GlobalsCodePre>
  </div>
</template>
