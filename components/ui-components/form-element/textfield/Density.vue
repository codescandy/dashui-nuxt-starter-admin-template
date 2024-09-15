<script setup>
import { Density } from "./__code";
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      The density prop decreases the height of the text field based upon 1 of 3 levels of
      <code>density</code>; <code>default</code>, <code>comfortable</code>, and
      <code>compact</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density">
      <global-text-field label="Regular" density="compact" placeholder="Placeholder Text" />
    </GlobalsCodePre>
  </div>
</template>
