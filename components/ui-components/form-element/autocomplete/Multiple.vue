<script setup>
import { Multiple } from "./__code";

const items = ["California", "Colorado", "Florida", "Georgia", "Texas", "Wyoming"];
</script>

<template>
  <div id="multiple">
    <GlobalsIntro title="Multiple">
      Use <code>multiple</code> prop to select multiple. Accepts array for value
    </GlobalsIntro>
    <GlobalsCodePre :code="Multiple">
      <global-autocomplete
        label="States"
        :items="items"
        placeholder="Select State"
        multiple
        eager
      />
    </GlobalsCodePre>
  </div>
</template>
