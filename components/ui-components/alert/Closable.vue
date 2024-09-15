<script setup>
import { Closable } from "./__code";

const isAlertVisible = ref(true);
</script>

<template>
  <div id="closable">
    <GlobalsIntro title="Closable">
      The <code>closable</code> prop adds a close button to the end of the alert component. Clicking
      this button will set its value to false and effectively hide the alert.
    </GlobalsIntro>
    <GlobalsCodePre margin-l :code="Closable">
      <v-alert v-model="isAlertVisible" closable close-label="Close Alert" color="primary">
        Nice, you triggered this alert message!
      </v-alert>
      <v-btn v-if="!isAlertVisible" @click="isAlertVisible = true"> Reset </v-btn>
    </GlobalsCodePre>
  </div>
</template>
