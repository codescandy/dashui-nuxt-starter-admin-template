<script setup>
import { Outline } from "./__code";
</script>

<template>
  <div id="outlined">
    <GlobalsIntro title="Outlined">
      The <code>variant="outlined"</code> prop inverts the style of an alert, inheriting the
      currently applied color, applying it to the text and border, and making its background
      transparent.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Outline">
      <v-alert variant="outlined" color="primary"> I'm an alert with primary outline. </v-alert>
      <v-alert variant="outlined" color="secondary"> I'm an alert with secondary outline. </v-alert>
      <v-alert variant="outlined" color="success"> I'm an alert with success outline. </v-alert>
      <v-alert variant="outlined" color="error"> I'm an alert with error outline. </v-alert>
      <v-alert variant="outlined" color="warning"> I'm an alert with warning outline. </v-alert>
      <v-alert variant="outlined" color="info"> I'm an alert with info outline. </v-alert>
    </GlobalsCodePre>
  </div>
</template>
