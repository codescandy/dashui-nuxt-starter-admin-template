<script setup>
import { Density } from "./__code";
</script>

<template>
  <div id="density">
    <GlobalsIntro title="Density">
      You can use <code>density</code> prop to adjusts vertical spacing within the component.
      Available options are: <code>default</code>, <code>comfortable</code>, and
      <code>compact</code>.
    </GlobalsIntro>
    <GlobalsCodePre :code="Density">
      <v-file-input label="File input" density="compact" />
    </GlobalsCodePre>
  </div>
</template>
