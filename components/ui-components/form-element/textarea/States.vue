<script setup>
import { States } from "./__code";
</script>

<template>
  <div id="states">
    <GlobalsIntro title="States">
      Use <code>disabled</code> and <code>readonly</code> prop to change the state of textarea.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="States">
      <global-textarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="Placeholder Text"
        rows="2"
      />
      <global-textarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="Placeholder Text"
        hint="Hint text"
      />
    </GlobalsCodePre>
  </div>
</template>
