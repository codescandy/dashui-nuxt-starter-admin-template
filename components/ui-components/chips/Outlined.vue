<script setup>
import { Outlined } from "./__code";
</script>

<template>
  <div id="outlined">
    <GlobalsIntro title="Outlined">
      Use <code>outlined</code> variant option to create outline border chips.
    </GlobalsIntro>
    <GlobalsCodePre :code="Outlined">
      <v-chip variant="outlined"> Default </v-chip>
      <v-chip color="primary" variant="outlined"> Primary </v-chip>
      <v-chip color="secondary" variant="outlined"> Secondary </v-chip>
      <v-chip color="success" variant="outlined"> Success </v-chip>
      <v-chip color="info" variant="outlined"> Info </v-chip>
      <v-chip color="warning" variant="outlined"> Warning </v-chip>
      <v-chip color="error" variant="outlined"> Error </v-chip>
    </GlobalsCodePre>
  </div>
</template>
