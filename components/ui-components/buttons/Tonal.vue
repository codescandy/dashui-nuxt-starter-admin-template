<script setup>
import { Tonal } from "./__code";
</script>
<template>
  <div id="tonal">
    <GlobalsIntro title="Tonal">
      Use <code>tonal</code> variant option to a create a light background button.
    </GlobalsIntro>
    <GlobalsCodePre :code="Tonal">
      <v-btn color="primary" variant="tonal"> Primary </v-btn>
      <v-btn color="secondary" variant="tonal"> Secondary </v-btn>
      <v-btn color="success" variant="tonal"> Success </v-btn>
      <v-btn color="error" variant="tonal"> Error </v-btn>
      <v-btn color="warning" variant="tonal"> Warning </v-btn>
      <v-btn color="info" variant="tonal"> Info </v-btn>
    </GlobalsCodePre>
  </div>
</template>
