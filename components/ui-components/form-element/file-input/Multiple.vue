<script setup>
import { Multiple } from "./__code";
</script>

<template>
  <div id="multiple">
    <GlobalsIntro title="Multiple">
      The <code>v-file-input</code> can contain multiple files at the same time when using the
      <code>multiple</code> prop.
    </GlobalsIntro>

    <GlobalsCodePre :code="Multiple">
      <v-file-input multiple label="File input" />
    </GlobalsCodePre>
  </div>
</template>
