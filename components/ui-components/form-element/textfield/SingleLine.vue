<script setup>
import { SingleLine } from "./__code";
</script>

<template>
  <div id="single-line">
    <GlobalsIntro title="Single line">
      <code>single-line</code> text fields do not float their label on focus or with data.
    </GlobalsIntro>
    <GlobalsCodePre :code="SingleLine">
      <global-text-field label="Regular" placeholder="Placeholder Text" single-line />
    </GlobalsCodePre>
  </div>
</template>
