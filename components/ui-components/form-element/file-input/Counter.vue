<script setup>
import { Counter } from "./__code";
</script>

<template>
  <div id="counter">
    <GlobalsIntro title="Counter">
      When using the <code>show-size</code> property along with <code>counter</code>, the total
      number of files and size will be displayed under the input.
    </GlobalsIntro>

    <GlobalsCodePre :code="Counter">
      <v-file-input show-size counter multiple label="File input" />
    </GlobalsCodePre>
  </div>
</template>
