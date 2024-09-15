<script setup>
import { Color } from "./__code";
</script>

<template>
  <div id="colors">
    <GlobalsIntro title="Colors">
      Use <code>color</code> prop to change the background color of avatar.
    </GlobalsIntro>
    <GlobalsCodePre :code="Color">
      <v-avatar color="primary"> PI </v-avatar>
      <v-avatar color="secondary"> SE </v-avatar>
      <v-avatar color="success"> SU </v-avatar>
      <v-avatar color="info"> IN </v-avatar>
      <v-avatar color="warning"> WA </v-avatar>
      <v-avatar color="error"> ER </v-avatar>
    </GlobalsCodePre>
  </div>
</template>
