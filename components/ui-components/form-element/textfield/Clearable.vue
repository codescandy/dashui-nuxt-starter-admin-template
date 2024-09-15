<script setup>
import { Clearable } from "./__code";
</script>

<template>
  <div id="clearable">
    <GlobalsIntro title="Clearable">
      When clearable, you can customize the clear icon with clear-icon.
    </GlobalsIntro>
    <GlobalsCodePre :code="Clearable">
      <global-text-field placeholder="Placeholder Text" label="Regular" clearable />
    </GlobalsCodePre>
  </div>
</template>
