<script setup>
import { Variant } from "./__code";
</script>

<template>
  <div id="variant">
    <GlobalsIntro title="Variant">
      Use <code>solo</code>, <code>filled</code>, <code>outlined</code>, <code>plain</code> and
      <code>underlined</code> option of variant prop to change the look of the textfield.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Variant">
      <global-text-field label="Outlined" variant="outlined" />
      <global-text-field label="Filled" variant="filled" />
      <global-text-field label="Solo" variant="solo" />
      <global-text-field label="Plain" variant="plain" />
      <global-text-field label="Underlined" variant="underlined" />
    </GlobalsCodePre>
  </div>
</template>
