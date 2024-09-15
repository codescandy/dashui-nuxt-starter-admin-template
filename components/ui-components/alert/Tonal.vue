<script setup>
import { Tonal } from "./__code";
</script>
<template>
  <div id="tonal">
    <GlobalsIntro title="Tonal">
      The <code>variant</code> prop provides an easy way to change the overall style of your alerts.
      The <code>variant="tonal"</code> prop is a simple alert variant that applies a reduced opacity
      background of the provided color.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Tonal">
      <v-alert variant="tonal" color="primary"> I'm an alert with primary tonal. </v-alert>
      <v-alert variant="tonal" color="secondary"> I'm an alert with secondary tonal. </v-alert>
      <v-alert variant="tonal" color="success"> I'm an alert with success tonal. </v-alert>
      <v-alert variant="tonal" color="error"> I'm an alert with error tonal. </v-alert>
      <v-alert variant="tonal" color="warning"> I'm an alert with warning tonal. </v-alert>
      <v-alert variant="tonal" color="info"> I'm an alert with info tonal. </v-alert>
    </GlobalsCodePre>
  </div>
</template>
