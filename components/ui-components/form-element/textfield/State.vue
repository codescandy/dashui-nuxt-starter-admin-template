<script setup>
import { State } from "./__code";
</script>

<template>
  <div id="state">
    <GlobalsIntro title="State">
      Text fields components are used for collecting user provided information.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="State">
      <global-text-field label="Disabled" placeholder="Placeholder Text" disabled />
      <global-text-field placeholder="Placeholder Text" label="Readonly" readonly />
    </GlobalsCodePre>
  </div>
</template>
