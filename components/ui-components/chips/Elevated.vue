<script setup>
import { Elevated } from "./__code";
</script>

<template>
  <div id="elevated">
    <GlobalsIntro title="Elevated">
      Use <code>elevated</code> variant option to create filled chips.
    </GlobalsIntro>
    <GlobalsCodePre :code="Elevated">
      <v-chip variant="elevated"> Default </v-chip>
      <v-chip color="primary" variant="elevated"> Primary </v-chip>
      <v-chip color="secondary" variant="elevated"> Secondary </v-chip>
      <v-chip color="success" variant="elevated"> Success </v-chip>
      <v-chip color="info" variant="elevated"> Info </v-chip>
      <v-chip color="warning" variant="elevated"> Warning </v-chip>
      <v-chip color="error" variant="elevated"> Error </v-chip>
    </GlobalsCodePre>
  </div>
</template>
