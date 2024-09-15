<script setup>
import { Variant } from "./__code";
</script>

<template>
  <div id="variant">
    <GlobalsIntro title="Variant">
      Use <code>solo</code>, <code>outlined</code>, <code>underlined</code>, <code>filled</code> and
      <code>plain</code> options of <code>variant</code> prop to change the look of Combobox.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Variant">
      <v-file-input label="Outlined" />
      <v-file-input label="Filled" variant="filled" />
      <v-file-input label="Solo" variant="solo" />
      <v-file-input label="Plain" variant="plain" />
      <v-file-input label="Underlined" variant="underlined" density="default" />
    </GlobalsCodePre>
  </div>
</template>
