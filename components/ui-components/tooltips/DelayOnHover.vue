<script setup>
import { DelayOnHover } from "./__code";
</script>
<template>
  <div id="delay-on-hover">
    <GlobalsIntro title="Delay On Hover">
      Delay (in ms) after which tooltip opens (when <code>open-on-hover</code> prop is set to true)
    </GlobalsIntro>
    <GlobalsCodePre :code="DelayOnHover">
      <v-btn variant="outlined">
        <span>Open Delay On Hover</span>
        <v-tooltip open-delay="500" location="top" activator="parent">
          <span>Open Delay On Hover</span>
        </v-tooltip>
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
