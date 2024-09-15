<script setup>
import { Color } from "./__code";
</script>

<template>
  <div id="color">
    <GlobalsIntro title="Color">
      Use <code>color</code> prop to change the background color of chips.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-chip> Default </v-chip>
      <v-chip color="primary"> Primary </v-chip>
      <v-chip color="secondary"> Secondary </v-chip>
      <v-chip color="success"> Success </v-chip>
      <v-chip color="info"> Info </v-chip>
      <v-chip color="warning"> Warning </v-chip>
      <v-chip color="error"> Error </v-chip>
    </GlobalsCodePre>
  </div>
</template>
