<script setup>
import { Tonal } from "./__code";
</script>

<template>
  <div id="tonal">
    <GlobalsIntro title="Tonal">
      Use <code>variant="tonal"</code> to create light background avatars.
    </GlobalsIntro>
    <GlobalsCodePre :code="Tonal">
      <v-avatar color="primary" variant="tonal"> PI </v-avatar>
      <v-avatar color="secondary" variant="tonal"> SE </v-avatar>
      <v-avatar color="success" variant="tonal"> SU </v-avatar>
      <v-avatar color="info" variant="tonal"> IN </v-avatar>
      <v-avatar color="warning" variant="tonal"> WA </v-avatar>
      <v-avatar color="error" variant="tonal"> ER </v-avatar>
    </GlobalsCodePre>
  </div>
</template>
