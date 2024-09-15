<script setup>
import { Outlined } from "./__code";
</script>
<template>
  <div id="outlined">
    <GlobalsIntro title="Outlined">
      The <code>outlined</code> variant option is used to create outlined buttons.
    </GlobalsIntro>
    <GlobalsCodePre :code="Outlined">
      <v-btn color="primary" variant="outlined"> Primary </v-btn>
      <v-btn color="secondary" variant="outlined"> Secondary </v-btn>
      <v-btn color="success" variant="outlined"> Success </v-btn>
      <v-btn color="error" variant="outlined"> Error </v-btn>
      <v-btn color="warning" variant="outlined"> Warning </v-btn>
      <v-btn color="info" variant="outlined"> Info </v-btn>
    </GlobalsCodePre>
  </div>
</template>
