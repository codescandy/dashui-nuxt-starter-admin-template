<script setup>
import { Vertical } from "./__code";

const value = ref(10);
</script>

<template>
  <div id="vertical">
    <GlobalsIntro title="Vertical">
      You can use the <code>vertical</code> prop to switch sliders to a vertical orientation.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Vertical">
      <v-slider v-model="value" direction="vertical" />
    </GlobalsCodePre>
  </div>
</template>
