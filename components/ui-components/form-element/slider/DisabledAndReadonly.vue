<script setup>
import { DisabledAndReadonly } from "./__code";
</script>

<template>
  <div id="disabled-and-readonly">
    <GlobalsIntro title="Disabled and Readonly">
      You cannot interact with <code>disabled</code> and <code>readonly</code> sliders.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="DisabledAndReadonly">
      <v-slider disabled label="Disabled" :model-value="30" />
      <v-slider readonly label="Readonly" :model-value="30" />
    </GlobalsCodePre>
  </div>
</template>
