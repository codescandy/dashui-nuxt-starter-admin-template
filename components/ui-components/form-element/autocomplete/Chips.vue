<script setup>
import { Chips } from "./__code";

const items = ["California", "Colorado", "Florida", "Georgia", "Texas", "Wyoming"];
</script>

<template>
  <div id="chips">
    <GlobalsIntro title="Chips"> Use <code>chips</code> prop to use chips in select. </GlobalsIntro>
    <GlobalsCodePre :code="Chips">
      <global-autocomplete
        label="States"
        :items="items"
        placeholder="Select State"
        chips
        multiple
        closable-chips
      />
    </GlobalsCodePre>
  </div>
</template>
