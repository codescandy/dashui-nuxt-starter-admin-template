<script setup>
import { Icons } from "./__code";
</script>

<template>
  <div id="icons">
    <GlobalsIntro title="Icons">
      The <code>append-icon</code>, <code>prepend-icon</code>, <code>append-inner-icon</code> and
      <code>prepend-inner-icon</code> props help add context to v-textarea.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Icons">
      <global-textarea
        label="prepend-icon"
        rows="1"
        placeholder="Placeholder Text"
        prepend-icon="tabler-message-2"
      />
      <global-textarea
        append-icon="tabler-message-2"
        placeholder="Placeholder Text"
        label="append-icon"
        rows="1"
      />
      <global-textarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
      <global-textarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </GlobalsCodePre>
  </div>
</template>
