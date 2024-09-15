<script setup>
import { Basic } from "./__code";
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      Text fields components are used for collecting user provided information.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <global-text-field label="Regular" placeholder="Placeholder Text" />
    </GlobalsCodePre>
  </div>
</template>
