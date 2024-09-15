<script setup>
import { Elevated } from "./__code";
</script>

<template>
  <div id="elevated">
    <GlobalsIntro title="Elevated">
      The <code>elevated</code> variant option is used to create shadow buttons.
    </GlobalsIntro>
    <GlobalsCodePre :code="Elevated">
      <v-btn color="primary" variant="elevated"> Primary </v-btn>
      <v-btn color="secondary" variant="elevated"> Secondary </v-btn>
      <v-btn color="success" variant="elevated"> Success </v-btn>
      <v-btn color="error" variant="elevated"> Error </v-btn>
      <v-btn color="warning" variant="elevated"> Warning </v-btn>
      <v-btn color="info" variant="elevated"> Info </v-btn>
    </GlobalsCodePre>
  </div>
</template>
