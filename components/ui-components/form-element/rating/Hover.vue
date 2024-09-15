<script setup>
import { Hover } from "./__code";
</script>

<template>
  <div id="hover">
    <GlobalsIntro title="Hover"> Provides visual feedback when hovering over icons </GlobalsIntro>
    <GlobalsCodePre :code="Hover">
      <v-rating hover />
    </GlobalsCodePre>
  </div>
</template>
