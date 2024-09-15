<script setup>
import { Clearable } from "./__code";

const items = ["California", "Colorado", "Florida", "Georgia", "Texas", "Wyoming"];
</script>

<template>
  <div id="clearable">
    <GlobalsIntro title="Clearable">
      Use <code>clearable</code> prop to add input clear functionality.
    </GlobalsIntro>
    <GlobalsCodePre :code="Clearable">
      <global-autocomplete
        label="States"
        :items="items"
        multiple
        placeholder="Select State"
        clearable
      />
    </GlobalsCodePre>
  </div>
</template>
