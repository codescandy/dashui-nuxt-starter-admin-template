<script setup>
import { Icons } from "./__code";
</script>

<template>
  <div id="icons">
    <GlobalsIntro title="Icons">
      You can add icons to the text field with <code>prepend-icon</code>,
      <code>append-icon</code> and <code>append-inner-icon</code> and
      <code>prepend-inner-icon</code> props.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Icons">
      <global-text-field
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
      <global-text-field
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
      <global-text-field
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
      <global-text-field
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </GlobalsCodePre>
  </div>
</template>
