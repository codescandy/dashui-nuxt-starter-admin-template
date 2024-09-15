<script setup>
import { Size } from "./__code";
</script>

<template>
  <div id="button-size">
    <GlobalsIntro title="Sizes">
      Fancy larger or smaller buttons? Add
      <code> size="x-large" </code>
      or
      <code> size="small" </code> prop for additional sizes.
    </GlobalsIntro>
    <GlobalsCodePre :code="Size">
      <v-btn size="x-large"> Extra Large Button </v-btn>
      <v-btn size="large"> Large Button </v-btn>
      <v-btn> Default Button </v-btn>
      <v-btn size="small"> Small Button </v-btn>
      <v-btn size="x-small"> Extra Small Button </v-btn>
    </GlobalsCodePre>
  </div>
</template>
