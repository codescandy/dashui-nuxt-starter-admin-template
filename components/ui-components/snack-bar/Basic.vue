<script setup>
import { Basic } from "./__code";
const isSnackbarVisible = ref(false);
</script>

<template>
  <div id="basic">
    <GlobalsIntro title="Basic">
      The <code>v-snackbar</code> component is used to display a quick message to a user. Snackbars
      support positioning, removal delay, and callbacks.
    </GlobalsIntro>
    <GlobalsCodePre :code="Basic">
      <v-btn @click="isSnackbarVisible = true"> Open Snackbar </v-btn>

      <v-snackbar v-model="isSnackbarVisible"> Hello, I'm a snackbar </v-snackbar>
    </GlobalsCodePre>
  </div>
</template>
