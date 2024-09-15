<script setup>
import { Simple } from "./__code";
</script>

<template>
  <div id="simple">
    <GlobalsIntro title="Simple Alert">
      Alerts are available for any length of text, as well as an optional dismiss button. For proper
      styling, use one of the eight required contextual prop (e.g.,
      <code>color="primary"</code>).
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Simple">
      <v-alert color="primary"> I'm an alert with primary background color. </v-alert>
      <v-alert color="secondary"> I'm an alert with secondary background color. </v-alert>
      <v-alert color="success"> I'm an alert with success background color. </v-alert>
      <v-alert color="error"> I'm an alert with error background color. </v-alert>
      <v-alert color="warning"> I'm an alert with warning background color. </v-alert>
      <v-alert color="info"> I'm an alert with info background color. </v-alert>
    </GlobalsCodePre>
  </div>
</template>
