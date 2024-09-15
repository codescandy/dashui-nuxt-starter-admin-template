<script setup>
import { CustomColors } from "./__code";
</script>

<template>
  <div id="custom-colors">
    <GlobalsIntro title="Custom Colors">
      Text fields components are used for collecting user provided information.
    </GlobalsIntro>
    <GlobalsCodePre :code="CustomColors">
      <global-text-field color="success" label="First name" placeholder="Placeholder Text" />
    </GlobalsCodePre>
  </div>
</template>
