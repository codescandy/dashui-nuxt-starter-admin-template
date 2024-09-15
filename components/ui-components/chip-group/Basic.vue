<script setup>
import { Basic } from "./__code";
</script>
<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      Chip groups make it easy for users to select filtering options for more complex
      implementations. By default <code>v-chip-group</code> will overflow to the right but can be
      changed to a <code>column</code> only mode.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-chip-group>
        <v-chip>Chip 1</v-chip>
        <v-chip>Chip 2</v-chip>
        <v-chip>Chip 3</v-chip>
      </v-chip-group>
    </GlobalsCodePre>
  </div>
</template>
