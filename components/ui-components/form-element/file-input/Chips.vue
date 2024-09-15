<script setup>
import { Chips } from "./__code";
</script>

<template>
  <div id="chips">
    <GlobalsIntro title="Chips">
      Use <code>chip</code> prop to display the selected file as a chip.
    </GlobalsIntro>

    <GlobalsCodePre :code="Chips">
      <v-file-input chips label="File input w/ chips" />
    </GlobalsCodePre>
  </div>
</template>
