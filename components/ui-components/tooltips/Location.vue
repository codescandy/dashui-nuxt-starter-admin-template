<script setup>
import { Location } from "./__code";
</script>
<template>
  <div id="location">
    <GlobalsIntro title="Location">
      Use the <code>location</code> prop to specify on which side of the element the tooltip should
      show
    </GlobalsIntro>
    <GlobalsCodePre :code="Location">
      <v-btn variant="tonal">
        Tooltip on End
        <v-tooltip activator="parent" location="end"> End Tooltip </v-tooltip>
      </v-btn>

      <v-btn variant="tonal">
        Tooltip on Start
        <v-tooltip activator="parent" location="start"> Start Tooltip </v-tooltip>
      </v-btn>

      <v-btn variant="tonal">
        Tooltip on Top
        <v-tooltip activator="parent" location="top"> Top Tooltip </v-tooltip>
      </v-btn>

      <v-btn variant="tonal">
        Tooltip on Bottom
        <v-tooltip activator="parent" location="bottom"> Bottom Tooltip </v-tooltip>
      </v-btn>
    </GlobalsCodePre>
  </div>
</template>
