<script setup>
import { Accept } from "./__code";
</script>

<template>
  <div id="accept">
    <GlobalsIntro title="Accept">
      <code>v-file-input</code> component can accept only specific media formats/file types if you
      want.
    </GlobalsIntro>

    <GlobalsCodePre :code="Accept">
      <v-file-input accept="image/*" label="File input" />
    </GlobalsCodePre>
  </div>
</template>
