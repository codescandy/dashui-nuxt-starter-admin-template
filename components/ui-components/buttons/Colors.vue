<script setup>
import { Colors } from "./__code";
</script>

<template>
  <div id="colors">
    <GlobalsIntro title="Colors">
      The <code>color</code> prop is used to change the background color of the button.
    </GlobalsIntro>
    <GlobalsCodePre :code="Colors">
      <v-btn color="primary"> Primary </v-btn>
      <v-btn color="secondary"> Secondary </v-btn>
      <v-btn color="success"> Success </v-btn>
      <v-btn color="error"> Error </v-btn>
      <v-btn color="warning"> Warning </v-btn>
      <v-btn color="info"> Info </v-btn>
    </GlobalsCodePre>
  </div>
</template>
