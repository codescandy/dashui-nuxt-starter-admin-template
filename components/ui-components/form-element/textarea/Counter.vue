<script setup>
import { Counter } from "./__code";
const textareaValue = ref("Hello!");
</script>

<template>
  <div id="counter">
    <GlobalsIntro title="Counter">
      The <code>counter</code> prop informs the user of a character limit for the
      <code>v-textarea</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Counter">
      <global-textarea
        v-model="textareaValue"
        counter
        label="Text"
        placeholder="Placeholder Text"
      />
    </GlobalsCodePre>
  </div>
</template>
