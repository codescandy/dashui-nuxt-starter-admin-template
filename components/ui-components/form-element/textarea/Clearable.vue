<script setup>
import { Clearable } from "./__code";
const textareaValue = ref("This is clearable text.");
</script>

<template>
  <div id="clearable">
    <GlobalsIntro title="Clearable">
      You can clear the text from a <code>v-textarea</code> by using the
      <code>clearable</code> prop, and customize the icon used with the
      <code>clearable-icon</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="Clearable">
      <global-textarea
        v-model="textareaValue"
        clearable
        clear-icon="tabler-circle-x"
        label="Text"
        placeholder="Placeholder Text"
      />
    </GlobalsCodePre>
  </div>
</template>
