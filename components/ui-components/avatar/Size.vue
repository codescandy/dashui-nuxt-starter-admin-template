<script setup>
import { Size } from "./__code";
</script>

<template>
  <div id="size">
    <GlobalsIntro title="Size">
      The <code>size</code> prop allows you to change the height and width of the avatar.
    </GlobalsIntro>
    <GlobalsCodePre :code="Size">
      <v-avatar color="primary" size="x-small"> PI </v-avatar>
      <v-avatar color="secondary" size="small"> SE </v-avatar>
      <v-avatar color="success"> SU </v-avatar>
      <v-avatar color="info" size="large"> IN </v-avatar>
      <v-avatar color="warning" size="x-large"> WA </v-avatar>
    </GlobalsCodePre>
  </div>
</template>
