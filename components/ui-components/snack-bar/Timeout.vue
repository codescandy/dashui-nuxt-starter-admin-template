<script setup>
import { Timeout } from "./__code";

const isSnackbarVisible = ref(false);
</script>

<template>
  <div id="timeout">
    <GlobalsIntro title="Timeout">
      The <code>timeout</code> property lets you customize the delay before the
      <code>v-snackbar</code> is hidden.
    </GlobalsIntro>
    <GlobalsCodePre :code="Timeout">
      <v-btn @click="isSnackbarVisible = true"> Open Snackbar </v-btn>

      <v-snackbar v-model="isSnackbarVisible" :timeout="2000">
        My timeout is set to 2000.
      </v-snackbar>
    </GlobalsCodePre>
  </div>
</template>
