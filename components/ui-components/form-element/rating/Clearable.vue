<script setup>
import { Clearable } from "./__code";
</script>

<template>
  <div id="clearable">
    <GlobalsIntro title="Clearable">
      Use <code>clearable</code> prop to allows for the component to be cleared. Triggers when the
      icon containing the current value is clicked.
    </GlobalsIntro>
    <GlobalsCodePre :code="Clearable">
      <v-rating clearable />
    </GlobalsCodePre>
  </div>
</template>
