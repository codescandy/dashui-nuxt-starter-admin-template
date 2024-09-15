<script setup>
import { Label } from "./__code";
</script>

<template>
  <div id="label">
    <GlobalsIntro title="Label">
      Label chips use the <code>v-card</code> border-radius. Use <code>label</code> prop to create
      label chips.
    </GlobalsIntro>
    <GlobalsCodePre :code="Label">
      <v-chip label> Default </v-chip>
      <v-chip label color="primary"> Primary </v-chip>
      <v-chip label color="secondary"> Secondary </v-chip>
      <v-chip label color="success"> Success </v-chip>
      <v-chip label color="info"> Info </v-chip>
      <v-chip label color="warning"> Warning </v-chip>
      <v-chip label color="error"> Error </v-chip>
    </GlobalsCodePre>
  </div>
</template>
