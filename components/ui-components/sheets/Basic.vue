<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The sheet component has support for elevation, rounded corners, color, and more. It can be
      used as a container for other components or as a standalone.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic" background>
      <v-sheet :height="200" :width="200"></v-sheet>
    </GlobalsCodePre>
  </div>
</template>
