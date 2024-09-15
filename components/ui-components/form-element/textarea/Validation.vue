<script setup>
import { Validation } from "./__code";

const rules = [(v) => v.length <= 25 || "Max 25 characters"];

const textareaValue = ref("Hello!");
</script>

<template>
  <div id="validation">
    <GlobalsIntro title="Validation">
      Use <code>rules</code> prop to validate the textarea.
    </GlobalsIntro>
    <GlobalsCodePre :code="Validation">
      <global-textarea
        v-model="textareaValue"
        label="Validation"
        :rules="rules"
        rows="2"
        placeholder="Placeholder Text"
      />
    </GlobalsCodePre>
  </div>
</template>
