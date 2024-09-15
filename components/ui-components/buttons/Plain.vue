<script setup>
import { Plain } from "./__code";
</script>

<template>
  <div id="plain">
    <GlobalsIntro title="Plain">
      Use <code>plain</code> variant option to a create a plain button. Plain buttons have a lower
      baseline opacity that reacts to hover and focus.
    </GlobalsIntro>
    <GlobalsCodePre :code="Plain">
      <v-btn color="primary" variant="plain"> Primary </v-btn>
      <v-btn color="secondary" variant="plain"> Secondary </v-btn>
      <v-btn color="success" variant="plain"> Success </v-btn>
      <v-btn color="error" variant="plain"> Error </v-btn>
      <v-btn color="warning" variant="plain"> Warning </v-btn>
      <v-btn color="info" variant="plain"> Info </v-btn>
    </GlobalsCodePre>
  </div>
</template>
