<script setup>
import { Variant } from "./__code";
</script>

<template>
  <div id="variant">
    <GlobalsIntro title="Variant">
      Use <code>filled</code>, <code>plain</code>, <code>outlined</code>, <code>solo</code> and
      <code>underlined</code> option of <code>variant</code> prop to change the look of file input.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Variant">
      <global-textarea label="Default" rows="2" placeholder="Placeholder Text" />
      <global-textarea label="Solo" placeholder="Placeholder Text" rows="2" variant="solo" />
      <global-textarea label="Filled" rows="2" placeholder="Placeholder Text" variant="filled" />
      <global-textarea
        label="Outlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="outlined"
      />
      <global-textarea
        label="Underlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="underlined"
      />
      <global-textarea label="Plain" rows="2" placeholder="Placeholder Text" variant="plain" />
    </GlobalsCodePre>
  </div>
</template>
