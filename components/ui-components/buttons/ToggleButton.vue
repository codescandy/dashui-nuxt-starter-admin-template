<script setup>
import { ToggleButton } from "./__code";

const toggleExclusive = ref(0);
</script>

<template>
  <div id="toggle">
    <GlobalsIntro title="Group ">
      Wrap buttons with the <code>v-btn-toggle</code> component to create a group button. You can
      add a visual divider between buttons with the <code>divided</code> prop.
    </GlobalsIntro>
    <GlobalsCodePre :code="ToggleButton">
      <v-btn-toggle v-model="toggleExclusive" divided color="primary" variant="outlined">
        <v-btn> Left </v-btn>
        <v-btn> Center </v-btn>
        <v-btn> Right </v-btn>
        <v-btn> Justified </v-btn>
      </v-btn-toggle>
    </GlobalsCodePre>
  </div>
</template>
