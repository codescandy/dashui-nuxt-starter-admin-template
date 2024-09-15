<script setup>
import { ShowSize } from "./__code";
</script>

<template>
  <div id="show-size">
    <GlobalsIntro title="Show size">
      The displayed size of the selected file(s) can be configured with the
      <code>show-size</code> property.
    </GlobalsIntro>

    <GlobalsCodePre :code="ShowSize">
      <v-file-input show-size label="File input" />
    </GlobalsCodePre>
  </div>
</template>
