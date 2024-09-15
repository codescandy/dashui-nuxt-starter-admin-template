<script setup>
import { Text } from "./__code";
</script>

<template>
  <div id="text">
    <GlobalsIntro title="Text">
      Use <code>text</code> variant option to create text button. Text buttons have no box shadow
      and no background.
    </GlobalsIntro>
    <GlobalsCodePre :code="Text">
      <v-btn color="primary" variant="text"> Primary </v-btn>
      <v-btn color="secondary" variant="text"> Secondary </v-btn>
      <v-btn color="success" variant="text"> Success </v-btn>
      <v-btn color="error" variant="text"> Error </v-btn>
      <v-btn color="warning" variant="text"> Warning </v-btn>
      <v-btn color="info" variant="text"> Info </v-btn>
    </GlobalsCodePre>
  </div>
</template>
